

class loginHelper {


    constructor() { }


    static IsAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return (loginHelper.isValidInput(token)) ? true : false
    }

    static isValidInput<T>(input: T): boolean {
        if (loginHelper.isNull(input) || loginHelper.isUndefined(input) || loginHelper.isEmpty(input)) {
            return false;
        } else {
            return true;
        }
    }
    static  isNull<T>(input: T): boolean {
        if (input != null) {
            return false;
        } else {
            return true;
        }
    }
    static  isEmpty<T>(input: T): boolean {
        if (typeof input === 'undefined') {
            return true;
        } else {
            let lstrTempstring = new String(input);
            lstrTempstring = lstrTempstring.trim();
            if (lstrTempstring === '' || lstrTempstring === 'undefined') {
                return true;
            } else {
                return false;
            }
        }
    }

    static  isUndefined<T>(input: T): boolean {
        if (typeof input === 'undefined') {
            return true;
        } else {
            return false;
        }
    }
}


export default loginHelper;