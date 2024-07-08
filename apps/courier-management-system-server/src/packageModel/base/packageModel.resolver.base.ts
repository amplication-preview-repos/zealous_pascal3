/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PackageModel } from "./PackageModel";
import { PackageModelCountArgs } from "./PackageModelCountArgs";
import { PackageModelFindManyArgs } from "./PackageModelFindManyArgs";
import { PackageModelFindUniqueArgs } from "./PackageModelFindUniqueArgs";
import { DeletePackageModelArgs } from "./DeletePackageModelArgs";
import { PackageModelService } from "../packageModel.service";
@graphql.Resolver(() => PackageModel)
export class PackageModelResolverBase {
  constructor(protected readonly service: PackageModelService) {}

  async _packageModelsMeta(
    @graphql.Args() args: PackageModelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PackageModel])
  async packageModels(
    @graphql.Args() args: PackageModelFindManyArgs
  ): Promise<PackageModel[]> {
    return this.service.packageModels(args);
  }

  @graphql.Query(() => PackageModel, { nullable: true })
  async packageModel(
    @graphql.Args() args: PackageModelFindUniqueArgs
  ): Promise<PackageModel | null> {
    const result = await this.service.packageModel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PackageModel)
  async deletePackageModel(
    @graphql.Args() args: DeletePackageModelArgs
  ): Promise<PackageModel | null> {
    try {
      return await this.service.deletePackageModel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
