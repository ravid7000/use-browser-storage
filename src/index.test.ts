import { useBrowserStorage } from './'
import { renderHook } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('useBrowserStorage', () => {
  it('Should defined getItem, setItem and removeItem', () => {
    const hooks = renderHook(useBrowserStorage);

    expect(hooks.result.current.getItem).toBeDefined();
    expect(hooks.result.current.setItem).toBeDefined();
    expect(hooks.result.current.removeItem).toBeDefined();
  })

  it('Should set the value in localstorage', () => {
    const hooks = renderHook(useBrowserStorage);

    hooks.result.current.setItem('test', 1)

    expect(hooks.result.current.getItem('test')).toStrictEqual(1);
  })

  it('Should set null value in localstorage', () => {
    const hooks = renderHook(useBrowserStorage);

    hooks.result.current.setItem('test', null)

    expect(hooks.result.current.getItem('test')).toEqual(null);
  })

  it('Should set object value in localstorage', () => {
    const hooks = renderHook(useBrowserStorage);

    hooks.result.current.setItem('test', { a: '1' })

    expect(hooks.result.current.getItem('test')).toStrictEqual({ a: '1' });
  })

  it('Should set array value in localstorage', () => {
    const hooks = renderHook(useBrowserStorage);

    hooks.result.current.setItem('test', [1, 2, '3'])

    expect(hooks.result.current.getItem('test')).toStrictEqual([1, 2, '3']);
  })

  it('Should set true value in localstorage', () => {
    const hooks = renderHook(useBrowserStorage);

    hooks.result.current.setItem('test', true)

    expect(hooks.result.current.getItem('test')).toStrictEqual(true);
  })

  it('Should set value with timestamp in localstorage', () => {
    const hooks = renderHook(() => useBrowserStorage({ timestamp: true }));

    hooks.result.current.setItem('test', 1)

    expect(hooks.result.current.getItem('test')).toHaveProperty('timestamp');
  })

  it('Should removeItem', () => {
    const hooks = renderHook((useBrowserStorage));

    hooks.result.current.setItem('test', 1)

    expect(hooks.result.current.getItem('test')).toStrictEqual(1);

    hooks.result.current.removeItem('test');

    expect(hooks.result.current.getItem('test')).toEqual(undefined);
  })
})
