import { IsString, IsOptional, MaxLength } from 'class-validator';

export class UpdateDocumentDto {
  @IsOptional()
  @MaxLength(255)
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;
}
