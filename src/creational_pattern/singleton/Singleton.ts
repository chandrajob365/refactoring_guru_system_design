/**
 * The singleton class defines the `getInstance` method, that lets client access unique singleton instance
 */
class Singleton {

    private static instance: Singleton;

    /**
     * The constructor of singleton should always be private, to ensure that class should not be directly
     * instantiated from outside using `new` operator
     */
    private constructor() { }

    /**
     * The static method that controls access to singleton instansiation. 
     * @returns Singleton
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance
    }
}

export default Singleton;