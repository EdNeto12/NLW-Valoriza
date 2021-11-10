import { EntityRepository, Repository } from "typeorm";
import { tag } from "../entities/Tag";

@EntityRepository(tag)
class TagsRepositories extends Repository<tag> {}

export { TagsRepositories };