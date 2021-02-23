import { useCallback, useState, useEffect } from 'react';
import hasLocalStorageSupport from './hasLocalStorageSupport';
import { parse, safeUpdateCount } from './utils';

const hasSupport = hasLocalStorageSupport();


export enum STORAGE_TYPE {
  localStorage = 'localStorage',
  sessionStorage = 'sessionStorage'
}

export interface UseBrowserStorageTypes {
  /**
   * Change the type of storage `localStorage | sessionStorage`
   * @default localStorage
   */
  type?: keyof typeof STORAGE_TYPE;
  /**
   * Add timestamp with the value with calling setItem
   * @default false
   */
  timestamp?: boolean;
  /**
   * Update the react component after calling setItem and removeItem
   * @default false
   */
  forceUpdate?: boolean;
}

type ValueType = any;

export interface UseBrowserStorageReturnType {
  getItem: (name: string) => ValueType;
  setItem: (name: string, value: ValueType) => {
    value: ValueType;
    oldValue: ValueType;
    location: keyof typeof STORAGE_TYPE;
  };
  removeItem: (name: string) => keyof typeof STORAGE_TYPE;
}

/**
 * React hook to use browser's storage. Currenlty supported localStoage and sessionStoage.
 * 
 * @example
 * import { useBrowserStorage } from 'use-local-storage';
 * 
 * const { getItem, setItem, removeItem } = useBrowserStorage();
 * 
 * 
 * @example
 * // use sessionStorage
 * const { getItem, setItem, removeItem } = useBrowserStorage({ type: 'sessionStorage' }); 
 * 
 * 
 * @example
 * // use timestamp with the value
 * const { getItem, setItem, removeItem } = useBrowserStorage({ timestamp: true }); 
 * 
 * setItem('token', 'token_value');
 * 
 * getItem('token');
 * // { value: 'token_value', timestamp: '2021-02-23T09:06:29.645Z' }
 * 
 * @param options 
 */
export const useBrowserStorage = (options?: UseBrowserStorageTypes): UseBrowserStorageReturnType => {
  const [count, updateCount] = useState(0);

  const storageType = (options && options.type) || STORAGE_TYPE.localStorage;

  const timestamp = (options && options.timestamp) || false;

  const forceUpdate = (options && options.forceUpdate) || false;

  const storage = window[storageType];

  const getItem = useCallback((name: string) => {
    if (hasSupport) {
      const value = storage.getItem(name);
      if (value) return parse(value);
    }
  }, [storageType, timestamp, count]);

  const setItem = useCallback((name: string, value: any) => {
    let oldValue;
    if (hasSupport) {
      oldValue = parse(storage.getItem(name));
      if (timestamp) {
        storage.setItem(name, JSON.stringify({
          value,
          timestamp: new Date()
        }))
      } else {
        storage.setItem(name, JSON.stringify(value));
      }

      if (forceUpdate) {
        updateCount(safeUpdateCount);
      }
    }
    return { value, oldValue, location: storageType };
  }, [storageType, timestamp, count]);

  const removeItem = useCallback((name: string) => {
    if (hasSupport) {
      storage.removeItem(name);

      if (forceUpdate) {
        updateCount(safeUpdateCount);
      }
    }
    return storageType;
  }, [storageType, timestamp, count]);

  useEffect(() => {
    return () => {
      options = {};
    }
  }, []);

  return {
    getItem,
    setItem,
    removeItem,
  }
};