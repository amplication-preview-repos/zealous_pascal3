import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserService } from "./user.service";

@swagger.ApiTags("users")
@common.Controller("users")
export class UserController {
  constructor(protected readonly service: UserService) {}
}
