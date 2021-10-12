export interface Photos {
    photos: Photo[];
}

export interface Photo {
    id:         number;
    sol:        number;
    camera:     Camera;
    img_src:    string;
    earth_date: Date;
    rover:      Rover;
}

export interface Camera {
    id:        number;
    name:      string;
    rover_id:  number;
    full_name: string;
}

export interface Rover {
    id:           number;
    name:         string;
    landing_date: Date;
    launch_date:  Date;
    status:       string;
}