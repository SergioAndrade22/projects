import { Injectable } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  create(createCategoryDto: CategoryDto): Promise<Category> {
    const category = {...createCategoryDto} as Category;
    return this.categoryRepository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }

  async update(id: number, updateCategoryDto: CategoryDto): Promise<Category> {
    const categoryToSave = await this.categoryRepository.findOne(id);
    categoryToSave.name = updateCategoryDto.name;
    return this.categoryRepository.save(categoryToSave);
  }

  async remove(id: number): Promise<Category> {
    const toRet = await this.categoryRepository.findOne(id);
    return this.categoryRepository.delete(id)
            .then(() => toRet)
            .catch(() => null);
  }
}
