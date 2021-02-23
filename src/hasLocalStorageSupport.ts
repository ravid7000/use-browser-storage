export default function hasLocalStorageSupport() {
    try {
        if (typeof window === 'undefined') {
            return false;
        }
        if (typeof localStorage === 'undefined' || typeof sessionStorage === 'undefined') {
            return false;
        }
    } catch(e) {
        return false;
    }
    return true;
}