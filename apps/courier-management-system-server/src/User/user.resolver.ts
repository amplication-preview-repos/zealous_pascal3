import * as graphql from "@nestjs/graphql";
import { UserService } from "./user.service";

export class UserResolver {
  constructor(protected readonly service: UserService) {}
}
