/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Param,
  Request,
  Delete,
} from '@nestjs/common';
import { DocumentService } from './document.service';
import { UserService } from 'src/user/user.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update.document.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { User } from '../user/user.entity';

@Controller('document')
@UseGuards(JwtAuthGuard)
export class DocumentController {
  constructor(
    private readonly documentService: DocumentService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async create(
    @Body() createDocumentDto: CreateDocumentDto,
    @Request() req: any,
  ) {
    const user = (await this.userService.findById(
      req.user.userId,
    )) as unknown as User;
    if (!user) {
      throw new Error('Forbidden: User not found');
    }
    return this.documentService.create(user, createDocumentDto);
  }

  @Get()
  async findAll(@Request() req: any) {
    const user = (await this.userService.findById(
      req.user.userId,
    )) as unknown as User;
    if (!user) {
      throw new Error('Forbidden: User not found');
    }
    return this.documentService.findall(user);
  }
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req: any) {
    const user = (await this.userService.findById(
      req.user.userId,
    )) as unknown as User;
    if (!user) {
      throw new Error('Forbidden: User not found');
    }
    return this.documentService.findOne(id, user);
  }
  @Post(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDocumentDto: UpdateDocumentDto,
    @Request() req: any,
  ) {
    const user = (await this.userService.findById(
      req.user.userId,
    )) as unknown as User;
    if (!user) {
      throw new Error('Forbidden: User not found');
    }
    return this.documentService.update(id, user, updateDocumentDto);
  }
  @Delete(':id')
  async delete(@Param('id') id: string, @Request() req: any) {
    const user = (await this.userService.findById(
      req.user.userId,
    )) as unknown as User;
    if (!user) {
      throw new Error('Forbidden: User not found');
    }
    return this.documentService.remove(id, user);
  }
}
