{
    // Generic With Interface
    interface Student <X, Z = null> {
        id: number;
        name: string;
        roll: number;
        midResult: X;
        finalResult: X;
        mobile?: Z;
    }

    interface Result {
        ict: string;
        english: string;
        science: string;
    };

    const studentOne : Student <Result>= {
        id: 0,
        name: 'Farsi',
        roll: 8,
        midResult: {
            ict: 'A+',
            english: 'A+',
            science: 'A+',
        },
        finalResult: {
            ict: 'A+',
            english: 'A+',
            science: 'A+',
        },
    }

    interface Mobile {
        name: string,
        model: string,
        batteryHealth: number,
    }

    const studentTwo : Student <Result, Mobile>= {
        id: 0,
        name: 'Farsi',
        roll: 8,
        midResult: {
            ict: 'A',
            english: 'F',
            science: 'A-',
        },
        finalResult: {
            ict: 'A+',
            english: 'A+',
            science: 'A+',
        },
        mobile: {
            name: 'Iphone',
            model: '13',
            batteryHealth: 98,
        }, 
    }

    //
}