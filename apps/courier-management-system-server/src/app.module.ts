import { Module } from "@nestjs/common";
import { DeliveryModule } from "./delivery/delivery.module";
import { PaymentModule } from "./payment/payment.module";
import { ContactModule } from "./contact/contact.module";
import { CustomerModule } from "./customer/customer.module";
import { AddressModule } from "./address/address.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { CourierModule } from "./courier/courier.module";
import { AdminModule } from "./admin/admin.module";
import { PackageModelModule } from "./packageModel/packageModel.module";
import { UserModule } from "./User/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    DeliveryModule,
    PaymentModule,
    ContactModule,
    CustomerModule,
    AddressModule,
    FeedbackModule,
    CourierModule,
    AdminModule,
    PackageModelModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
