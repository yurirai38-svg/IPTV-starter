import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ChannelsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return this.prisma.channel.findMany({
      orderBy: { order: 'asc' },
      where: { isActive: true },
    });
  }

  async create(data: any) {
    return this.prisma.channel.create({
      data: {
        name: data.name,
        slug: data.slug,
        category: data.category,
        language: data.language,
        logoUrl: data.logoUrl,
        streamUrl: data.streamUrl,
        epgId: data.epgId,
        order: Number(data.order || 0),
      },
    });
  }
}
