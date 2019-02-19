module.exports = {
        typeDefs: /* GraphQL */ `type AggregateUrl {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createUrl(data: UrlCreateInput!): Url!
  updateUrl(data: UrlUpdateInput!, where: UrlWhereUniqueInput!): Url
  updateManyUrls(data: UrlUpdateManyMutationInput!, where: UrlWhereInput): BatchPayload!
  upsertUrl(where: UrlWhereUniqueInput!, create: UrlCreateInput!, update: UrlUpdateInput!): Url!
  deleteUrl(where: UrlWhereUniqueInput!): Url
  deleteManyUrls(where: UrlWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  url(where: UrlWhereUniqueInput!): Url
  urls(where: UrlWhereInput, orderBy: UrlOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Url]!
  urlsConnection(where: UrlWhereInput, orderBy: UrlOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UrlConnection!
  node(id: ID!): Node
}

type Subscription {
  url(where: UrlSubscriptionWhereInput): UrlSubscriptionPayload
}

type Url {
  id: ID!
  createdAt: DateTime!
  config: String!
  description: String
}

type UrlConnection {
  pageInfo: PageInfo!
  edges: [UrlEdge]!
  aggregate: AggregateUrl!
}

input UrlCreateInput {
  config: String!
  description: String
}

type UrlEdge {
  node: Url!
  cursor: String!
}

enum UrlOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  config_ASC
  config_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UrlPreviousValues {
  id: ID!
  createdAt: DateTime!
  config: String!
  description: String
}

type UrlSubscriptionPayload {
  mutation: MutationType!
  node: Url
  updatedFields: [String!]
  previousValues: UrlPreviousValues
}

input UrlSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UrlWhereInput
  AND: [UrlSubscriptionWhereInput!]
  OR: [UrlSubscriptionWhereInput!]
  NOT: [UrlSubscriptionWhereInput!]
}

input UrlUpdateInput {
  config: String
  description: String
}

input UrlUpdateManyMutationInput {
  config: String
  description: String
}

input UrlWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  config: String
  config_not: String
  config_in: [String!]
  config_not_in: [String!]
  config_lt: String
  config_lte: String
  config_gt: String
  config_gte: String
  config_contains: String
  config_not_contains: String
  config_starts_with: String
  config_not_starts_with: String
  config_ends_with: String
  config_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [UrlWhereInput!]
  OR: [UrlWhereInput!]
  NOT: [UrlWhereInput!]
}

input UrlWhereUniqueInput {
  id: ID
}
`
      }
    