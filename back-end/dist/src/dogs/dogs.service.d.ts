import { Dog } from './entities/dogs.entity';
import { Repository } from 'typeorm';
export declare class DogsService {
    private dogsRepository;
    constructor(dogsRepository: Repository<Dog>);
    private dogs;
    findAll(): Promise<Dog[]>;
    findOne(DogID: number): Dog;
}