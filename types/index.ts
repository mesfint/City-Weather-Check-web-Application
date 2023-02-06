export type WeatherData = {
    name: string;
    sys: {
        country: string;
    };
    weather: [{
        icon: string;
        description: string;
    }];
    main: {
        temp: number;
    };
}
