import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { Note } from './notes/entities/note.entity';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';

@Module({
  imports: [
    NotesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'notesAdmin',
      password: 'admin',
      database: 'notes',
      entities: [Note, Category]
    }),
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
