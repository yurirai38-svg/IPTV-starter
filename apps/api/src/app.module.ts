import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { ChannelsModule } from './channels/channels.module';

@Module({
  imports: [AuthModule, ChannelsModule],
  providers: [PrismaService],
})
export class AppModule {}
