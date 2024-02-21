
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type DiligenceUserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "DiligenceUser"
  objects: {
    diligenceEnterprise: DiligenceEnterprisePayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: string
    resetToken: string | null
    managerId: string | null
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
    diligenceEnterpriseId: string
  }, ExtArgs["result"]["diligenceUser"]>
  composites: {}
}

/**
 * Model DiligenceUser
 * 
 */
export type DiligenceUser = runtime.Types.DefaultSelection<DiligenceUserPayload>
export type DiligenceRequestPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "DiligenceRequest"
  objects: {
    diligenceRequestDocument: DiligenceRequestDocumentPayload<ExtArgs>[]
    diligenceEnterprise: DiligenceEnterprisePayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    registrationNumber: string
    status: string
    createdBy: string
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
    diligenceEnterpriseId: string
  }, ExtArgs["result"]["diligenceRequest"]>
  composites: {}
}

/**
 * Model DiligenceRequest
 * 
 */
export type DiligenceRequest = runtime.Types.DefaultSelection<DiligenceRequestPayload>
export type DiligenceRequestDocumentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "DiligenceRequestDocument"
  objects: {
    diligenceRequest: DiligenceRequestPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    type: string
    description: string
    link: string
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
    diligenceRequestId: string
  }, ExtArgs["result"]["diligenceRequestDocument"]>
  composites: {}
}

/**
 * Model DiligenceRequestDocument
 * 
 */
export type DiligenceRequestDocument = runtime.Types.DefaultSelection<DiligenceRequestDocumentPayload>
export type DiligenceEnterprisePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "DiligenceEnterprise"
  objects: {
    diligenceManager: DiligenceManagerPayload<ExtArgs>[]
    diligenceRequest: DiligenceRequestPayload<ExtArgs>[]
    diligenceUser: DiligenceUserPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    address: string
    adminEmail: string
    color: string | null
    logo: string | null
    backdrop: string | null
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["diligenceEnterprise"]>
  composites: {}
}

/**
 * Model DiligenceEnterprise
 * 
 */
export type DiligenceEnterprise = runtime.Types.DefaultSelection<DiligenceEnterprisePayload>
export type DiligenceManagerPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "DiligenceManager"
  objects: {
    diligenceStaff: DiligenceStaffPayload<ExtArgs>[]
    diligenceEnterprise: DiligenceEnterprisePayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string | null
    location: string | null
    managerEmail: string
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
    diligenceEnterpriseId: string
  }, ExtArgs["result"]["diligenceManager"]>
  composites: {}
}

/**
 * Model DiligenceManager
 * 
 */
export type DiligenceManager = runtime.Types.DefaultSelection<DiligenceManagerPayload>
export type DiligenceStaffPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "DiligenceStaff"
  objects: {
    diligenceManager: DiligenceManagerPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    email: string
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
    diligenceManagerId: string
  }, ExtArgs["result"]["diligenceStaff"]>
  composites: {}
}

/**
 * Model DiligenceStaff
 * 
 */
export type DiligenceStaff = runtime.Types.DefaultSelection<DiligenceStaffPayload>
export type NigerianBankPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "NigerianBank"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    color: string | null
    slug: string
    logo: string
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["nigerianBank"]>
  composites: {}
}

/**
 * Model NigerianBank
 * 
 */
export type NigerianBank = runtime.Types.DefaultSelection<NigerianBankPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DiligenceUsers
 * const diligenceUsers = await prisma.diligenceUser.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DiligenceUsers
   * const diligenceUsers = await prisma.diligenceUser.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.diligenceUser`: Exposes CRUD operations for the **DiligenceUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiligenceUsers
    * const diligenceUsers = await prisma.diligenceUser.findMany()
    * ```
    */
  get diligenceUser(): Prisma.DiligenceUserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.diligenceRequest`: Exposes CRUD operations for the **DiligenceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiligenceRequests
    * const diligenceRequests = await prisma.diligenceRequest.findMany()
    * ```
    */
  get diligenceRequest(): Prisma.DiligenceRequestDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.diligenceRequestDocument`: Exposes CRUD operations for the **DiligenceRequestDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiligenceRequestDocuments
    * const diligenceRequestDocuments = await prisma.diligenceRequestDocument.findMany()
    * ```
    */
  get diligenceRequestDocument(): Prisma.DiligenceRequestDocumentDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.diligenceEnterprise`: Exposes CRUD operations for the **DiligenceEnterprise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiligenceEnterprises
    * const diligenceEnterprises = await prisma.diligenceEnterprise.findMany()
    * ```
    */
  get diligenceEnterprise(): Prisma.DiligenceEnterpriseDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.diligenceManager`: Exposes CRUD operations for the **DiligenceManager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiligenceManagers
    * const diligenceManagers = await prisma.diligenceManager.findMany()
    * ```
    */
  get diligenceManager(): Prisma.DiligenceManagerDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.diligenceStaff`: Exposes CRUD operations for the **DiligenceStaff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiligenceStaffs
    * const diligenceStaffs = await prisma.diligenceStaff.findMany()
    * ```
    */
  get diligenceStaff(): Prisma.DiligenceStaffDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.nigerianBank`: Exposes CRUD operations for the **NigerianBank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NigerianBanks
    * const nigerianBanks = await prisma.nigerianBank.findMany()
    * ```
    */
  get nigerianBank(): Prisma.NigerianBankDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DiligenceUser: 'DiligenceUser',
    DiligenceRequest: 'DiligenceRequest',
    DiligenceRequestDocument: 'DiligenceRequestDocument',
    DiligenceEnterprise: 'DiligenceEnterprise',
    DiligenceManager: 'DiligenceManager',
    DiligenceStaff: 'DiligenceStaff',
    NigerianBank: 'NigerianBank'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'diligenceUser' | 'diligenceRequest' | 'diligenceRequestDocument' | 'diligenceEnterprise' | 'diligenceManager' | 'diligenceStaff' | 'nigerianBank'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      DiligenceUser: {
        payload: DiligenceUserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DiligenceUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiligenceUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceUserPayload>
          }
          findFirst: {
            args: Prisma.DiligenceUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiligenceUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceUserPayload>
          }
          findMany: {
            args: Prisma.DiligenceUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceUserPayload>[]
          }
          create: {
            args: Prisma.DiligenceUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceUserPayload>
          }
          createMany: {
            args: Prisma.DiligenceUserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DiligenceUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceUserPayload>
          }
          update: {
            args: Prisma.DiligenceUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceUserPayload>
          }
          deleteMany: {
            args: Prisma.DiligenceUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DiligenceUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DiligenceUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceUserPayload>
          }
          aggregate: {
            args: Prisma.DiligenceUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDiligenceUser>
          }
          groupBy: {
            args: Prisma.DiligenceUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DiligenceUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiligenceUserCountArgs<ExtArgs>,
            result: $Utils.Optional<DiligenceUserCountAggregateOutputType> | number
          }
        }
      }
      DiligenceRequest: {
        payload: DiligenceRequestPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DiligenceRequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiligenceRequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestPayload>
          }
          findFirst: {
            args: Prisma.DiligenceRequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiligenceRequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestPayload>
          }
          findMany: {
            args: Prisma.DiligenceRequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestPayload>[]
          }
          create: {
            args: Prisma.DiligenceRequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestPayload>
          }
          createMany: {
            args: Prisma.DiligenceRequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DiligenceRequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestPayload>
          }
          update: {
            args: Prisma.DiligenceRequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestPayload>
          }
          deleteMany: {
            args: Prisma.DiligenceRequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DiligenceRequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DiligenceRequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestPayload>
          }
          aggregate: {
            args: Prisma.DiligenceRequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDiligenceRequest>
          }
          groupBy: {
            args: Prisma.DiligenceRequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DiligenceRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiligenceRequestCountArgs<ExtArgs>,
            result: $Utils.Optional<DiligenceRequestCountAggregateOutputType> | number
          }
        }
      }
      DiligenceRequestDocument: {
        payload: DiligenceRequestDocumentPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DiligenceRequestDocumentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiligenceRequestDocumentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestDocumentPayload>
          }
          findFirst: {
            args: Prisma.DiligenceRequestDocumentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiligenceRequestDocumentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestDocumentPayload>
          }
          findMany: {
            args: Prisma.DiligenceRequestDocumentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestDocumentPayload>[]
          }
          create: {
            args: Prisma.DiligenceRequestDocumentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestDocumentPayload>
          }
          createMany: {
            args: Prisma.DiligenceRequestDocumentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DiligenceRequestDocumentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestDocumentPayload>
          }
          update: {
            args: Prisma.DiligenceRequestDocumentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestDocumentPayload>
          }
          deleteMany: {
            args: Prisma.DiligenceRequestDocumentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DiligenceRequestDocumentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DiligenceRequestDocumentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceRequestDocumentPayload>
          }
          aggregate: {
            args: Prisma.DiligenceRequestDocumentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDiligenceRequestDocument>
          }
          groupBy: {
            args: Prisma.DiligenceRequestDocumentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DiligenceRequestDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiligenceRequestDocumentCountArgs<ExtArgs>,
            result: $Utils.Optional<DiligenceRequestDocumentCountAggregateOutputType> | number
          }
        }
      }
      DiligenceEnterprise: {
        payload: DiligenceEnterprisePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DiligenceEnterpriseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceEnterprisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiligenceEnterpriseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceEnterprisePayload>
          }
          findFirst: {
            args: Prisma.DiligenceEnterpriseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceEnterprisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiligenceEnterpriseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceEnterprisePayload>
          }
          findMany: {
            args: Prisma.DiligenceEnterpriseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceEnterprisePayload>[]
          }
          create: {
            args: Prisma.DiligenceEnterpriseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceEnterprisePayload>
          }
          createMany: {
            args: Prisma.DiligenceEnterpriseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DiligenceEnterpriseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceEnterprisePayload>
          }
          update: {
            args: Prisma.DiligenceEnterpriseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceEnterprisePayload>
          }
          deleteMany: {
            args: Prisma.DiligenceEnterpriseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DiligenceEnterpriseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DiligenceEnterpriseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceEnterprisePayload>
          }
          aggregate: {
            args: Prisma.DiligenceEnterpriseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDiligenceEnterprise>
          }
          groupBy: {
            args: Prisma.DiligenceEnterpriseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DiligenceEnterpriseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiligenceEnterpriseCountArgs<ExtArgs>,
            result: $Utils.Optional<DiligenceEnterpriseCountAggregateOutputType> | number
          }
        }
      }
      DiligenceManager: {
        payload: DiligenceManagerPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DiligenceManagerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiligenceManagerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceManagerPayload>
          }
          findFirst: {
            args: Prisma.DiligenceManagerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiligenceManagerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceManagerPayload>
          }
          findMany: {
            args: Prisma.DiligenceManagerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceManagerPayload>[]
          }
          create: {
            args: Prisma.DiligenceManagerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceManagerPayload>
          }
          createMany: {
            args: Prisma.DiligenceManagerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DiligenceManagerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceManagerPayload>
          }
          update: {
            args: Prisma.DiligenceManagerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceManagerPayload>
          }
          deleteMany: {
            args: Prisma.DiligenceManagerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DiligenceManagerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DiligenceManagerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceManagerPayload>
          }
          aggregate: {
            args: Prisma.DiligenceManagerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDiligenceManager>
          }
          groupBy: {
            args: Prisma.DiligenceManagerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DiligenceManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiligenceManagerCountArgs<ExtArgs>,
            result: $Utils.Optional<DiligenceManagerCountAggregateOutputType> | number
          }
        }
      }
      DiligenceStaff: {
        payload: DiligenceStaffPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DiligenceStaffFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceStaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiligenceStaffFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceStaffPayload>
          }
          findFirst: {
            args: Prisma.DiligenceStaffFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceStaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiligenceStaffFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceStaffPayload>
          }
          findMany: {
            args: Prisma.DiligenceStaffFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceStaffPayload>[]
          }
          create: {
            args: Prisma.DiligenceStaffCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceStaffPayload>
          }
          createMany: {
            args: Prisma.DiligenceStaffCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DiligenceStaffDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceStaffPayload>
          }
          update: {
            args: Prisma.DiligenceStaffUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceStaffPayload>
          }
          deleteMany: {
            args: Prisma.DiligenceStaffDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DiligenceStaffUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DiligenceStaffUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DiligenceStaffPayload>
          }
          aggregate: {
            args: Prisma.DiligenceStaffAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDiligenceStaff>
          }
          groupBy: {
            args: Prisma.DiligenceStaffGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DiligenceStaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiligenceStaffCountArgs<ExtArgs>,
            result: $Utils.Optional<DiligenceStaffCountAggregateOutputType> | number
          }
        }
      }
      NigerianBank: {
        payload: NigerianBankPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.NigerianBankFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NigerianBankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NigerianBankFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NigerianBankPayload>
          }
          findFirst: {
            args: Prisma.NigerianBankFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NigerianBankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NigerianBankFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NigerianBankPayload>
          }
          findMany: {
            args: Prisma.NigerianBankFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NigerianBankPayload>[]
          }
          create: {
            args: Prisma.NigerianBankCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NigerianBankPayload>
          }
          createMany: {
            args: Prisma.NigerianBankCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NigerianBankDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NigerianBankPayload>
          }
          update: {
            args: Prisma.NigerianBankUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NigerianBankPayload>
          }
          deleteMany: {
            args: Prisma.NigerianBankDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NigerianBankUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NigerianBankUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NigerianBankPayload>
          }
          aggregate: {
            args: Prisma.NigerianBankAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNigerianBank>
          }
          groupBy: {
            args: Prisma.NigerianBankGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NigerianBankGroupByOutputType>[]
          }
          count: {
            args: Prisma.NigerianBankCountArgs<ExtArgs>,
            result: $Utils.Optional<NigerianBankCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DiligenceRequestCountOutputType
   */


  export type DiligenceRequestCountOutputType = {
    diligenceRequestDocument: number
  }

  export type DiligenceRequestCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    diligenceRequestDocument?: boolean | DiligenceRequestCountOutputTypeCountDiligenceRequestDocumentArgs
  }

  // Custom InputTypes

  /**
   * DiligenceRequestCountOutputType without action
   */
  export type DiligenceRequestCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequestCountOutputType
     */
    select?: DiligenceRequestCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DiligenceRequestCountOutputType without action
   */
  export type DiligenceRequestCountOutputTypeCountDiligenceRequestDocumentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DiligenceRequestDocumentWhereInput
  }



  /**
   * Count Type DiligenceEnterpriseCountOutputType
   */


  export type DiligenceEnterpriseCountOutputType = {
    diligenceManager: number
    diligenceRequest: number
    diligenceUser: number
  }

  export type DiligenceEnterpriseCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    diligenceManager?: boolean | DiligenceEnterpriseCountOutputTypeCountDiligenceManagerArgs
    diligenceRequest?: boolean | DiligenceEnterpriseCountOutputTypeCountDiligenceRequestArgs
    diligenceUser?: boolean | DiligenceEnterpriseCountOutputTypeCountDiligenceUserArgs
  }

  // Custom InputTypes

  /**
   * DiligenceEnterpriseCountOutputType without action
   */
  export type DiligenceEnterpriseCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceEnterpriseCountOutputType
     */
    select?: DiligenceEnterpriseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DiligenceEnterpriseCountOutputType without action
   */
  export type DiligenceEnterpriseCountOutputTypeCountDiligenceManagerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DiligenceManagerWhereInput
  }


  /**
   * DiligenceEnterpriseCountOutputType without action
   */
  export type DiligenceEnterpriseCountOutputTypeCountDiligenceRequestArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DiligenceRequestWhereInput
  }


  /**
   * DiligenceEnterpriseCountOutputType without action
   */
  export type DiligenceEnterpriseCountOutputTypeCountDiligenceUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DiligenceUserWhereInput
  }



  /**
   * Count Type DiligenceManagerCountOutputType
   */


  export type DiligenceManagerCountOutputType = {
    diligenceStaff: number
  }

  export type DiligenceManagerCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    diligenceStaff?: boolean | DiligenceManagerCountOutputTypeCountDiligenceStaffArgs
  }

  // Custom InputTypes

  /**
   * DiligenceManagerCountOutputType without action
   */
  export type DiligenceManagerCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceManagerCountOutputType
     */
    select?: DiligenceManagerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DiligenceManagerCountOutputType without action
   */
  export type DiligenceManagerCountOutputTypeCountDiligenceStaffArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DiligenceStaffWhereInput
  }



  /**
   * Models
   */

  /**
   * Model DiligenceUser
   */


  export type AggregateDiligenceUser = {
    _count: DiligenceUserCountAggregateOutputType | null
    _min: DiligenceUserMinAggregateOutputType | null
    _max: DiligenceUserMaxAggregateOutputType | null
  }

  export type DiligenceUserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: string | null
    resetToken: string | null
    managerId: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    diligenceEnterpriseId: string | null
  }

  export type DiligenceUserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: string | null
    resetToken: string | null
    managerId: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    diligenceEnterpriseId: string | null
  }

  export type DiligenceUserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
    resetToken: number
    managerId: number
    isDeprecated: number
    createdAt: number
    updatedAt: number
    diligenceEnterpriseId: number
    _all: number
  }


  export type DiligenceUserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    resetToken?: true
    managerId?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceEnterpriseId?: true
  }

  export type DiligenceUserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    resetToken?: true
    managerId?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceEnterpriseId?: true
  }

  export type DiligenceUserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    resetToken?: true
    managerId?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceEnterpriseId?: true
    _all?: true
  }

  export type DiligenceUserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiligenceUser to aggregate.
     */
    where?: DiligenceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceUsers to fetch.
     */
    orderBy?: Enumerable<DiligenceUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiligenceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiligenceUsers
    **/
    _count?: true | DiligenceUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiligenceUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiligenceUserMaxAggregateInputType
  }

  export type GetDiligenceUserAggregateType<T extends DiligenceUserAggregateArgs> = {
        [P in keyof T & keyof AggregateDiligenceUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiligenceUser[P]>
      : GetScalarType<T[P], AggregateDiligenceUser[P]>
  }




  export type DiligenceUserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DiligenceUserWhereInput
    orderBy?: Enumerable<DiligenceUserOrderByWithAggregationInput>
    by: DiligenceUserScalarFieldEnum[]
    having?: DiligenceUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiligenceUserCountAggregateInputType | true
    _min?: DiligenceUserMinAggregateInputType
    _max?: DiligenceUserMaxAggregateInputType
  }


  export type DiligenceUserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: string
    resetToken: string | null
    managerId: string | null
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
    diligenceEnterpriseId: string
    _count: DiligenceUserCountAggregateOutputType | null
    _min: DiligenceUserMinAggregateOutputType | null
    _max: DiligenceUserMaxAggregateOutputType | null
  }

  type GetDiligenceUserGroupByPayload<T extends DiligenceUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DiligenceUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiligenceUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiligenceUserGroupByOutputType[P]>
            : GetScalarType<T[P], DiligenceUserGroupByOutputType[P]>
        }
      >
    >


  export type DiligenceUserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    resetToken?: boolean
    managerId?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diligenceEnterpriseId?: boolean
    diligenceEnterprise?: boolean | DiligenceEnterpriseArgs<ExtArgs>
  }, ExtArgs["result"]["diligenceUser"]>

  export type DiligenceUserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    resetToken?: boolean
    managerId?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diligenceEnterpriseId?: boolean
  }

  export type DiligenceUserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    diligenceEnterprise?: boolean | DiligenceEnterpriseArgs<ExtArgs>
  }


  type DiligenceUserGetPayload<S extends boolean | null | undefined | DiligenceUserArgs> = $Types.GetResult<DiligenceUserPayload, S>

  type DiligenceUserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DiligenceUserFindManyArgs, 'select' | 'include'> & {
      select?: DiligenceUserCountAggregateInputType | true
    }

  export interface DiligenceUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiligenceUser'], meta: { name: 'DiligenceUser' } }
    /**
     * Find zero or one DiligenceUser that matches the filter.
     * @param {DiligenceUserFindUniqueArgs} args - Arguments to find a DiligenceUser
     * @example
     * // Get one DiligenceUser
     * const diligenceUser = await prisma.diligenceUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DiligenceUserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DiligenceUserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DiligenceUser'> extends True ? Prisma__DiligenceUserClient<$Types.GetResult<DiligenceUserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DiligenceUserClient<$Types.GetResult<DiligenceUserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one DiligenceUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DiligenceUserFindUniqueOrThrowArgs} args - Arguments to find a DiligenceUser
     * @example
     * // Get one DiligenceUser
     * const diligenceUser = await prisma.diligenceUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DiligenceUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DiligenceUserClient<$Types.GetResult<DiligenceUserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first DiligenceUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceUserFindFirstArgs} args - Arguments to find a DiligenceUser
     * @example
     * // Get one DiligenceUser
     * const diligenceUser = await prisma.diligenceUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DiligenceUserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DiligenceUserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DiligenceUser'> extends True ? Prisma__DiligenceUserClient<$Types.GetResult<DiligenceUserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DiligenceUserClient<$Types.GetResult<DiligenceUserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first DiligenceUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceUserFindFirstOrThrowArgs} args - Arguments to find a DiligenceUser
     * @example
     * // Get one DiligenceUser
     * const diligenceUser = await prisma.diligenceUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DiligenceUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DiligenceUserClient<$Types.GetResult<DiligenceUserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more DiligenceUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiligenceUsers
     * const diligenceUsers = await prisma.diligenceUser.findMany()
     * 
     * // Get first 10 DiligenceUsers
     * const diligenceUsers = await prisma.diligenceUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diligenceUserWithIdOnly = await prisma.diligenceUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DiligenceUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DiligenceUserPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a DiligenceUser.
     * @param {DiligenceUserCreateArgs} args - Arguments to create a DiligenceUser.
     * @example
     * // Create one DiligenceUser
     * const DiligenceUser = await prisma.diligenceUser.create({
     *   data: {
     *     // ... data to create a DiligenceUser
     *   }
     * })
     * 
    **/
    create<T extends DiligenceUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceUserCreateArgs<ExtArgs>>
    ): Prisma__DiligenceUserClient<$Types.GetResult<DiligenceUserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many DiligenceUsers.
     *     @param {DiligenceUserCreateManyArgs} args - Arguments to create many DiligenceUsers.
     *     @example
     *     // Create many DiligenceUsers
     *     const diligenceUser = await prisma.diligenceUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DiligenceUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiligenceUser.
     * @param {DiligenceUserDeleteArgs} args - Arguments to delete one DiligenceUser.
     * @example
     * // Delete one DiligenceUser
     * const DiligenceUser = await prisma.diligenceUser.delete({
     *   where: {
     *     // ... filter to delete one DiligenceUser
     *   }
     * })
     * 
    **/
    delete<T extends DiligenceUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceUserDeleteArgs<ExtArgs>>
    ): Prisma__DiligenceUserClient<$Types.GetResult<DiligenceUserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one DiligenceUser.
     * @param {DiligenceUserUpdateArgs} args - Arguments to update one DiligenceUser.
     * @example
     * // Update one DiligenceUser
     * const diligenceUser = await prisma.diligenceUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DiligenceUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceUserUpdateArgs<ExtArgs>>
    ): Prisma__DiligenceUserClient<$Types.GetResult<DiligenceUserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more DiligenceUsers.
     * @param {DiligenceUserDeleteManyArgs} args - Arguments to filter DiligenceUsers to delete.
     * @example
     * // Delete a few DiligenceUsers
     * const { count } = await prisma.diligenceUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DiligenceUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiligenceUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiligenceUsers
     * const diligenceUser = await prisma.diligenceUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DiligenceUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiligenceUser.
     * @param {DiligenceUserUpsertArgs} args - Arguments to update or create a DiligenceUser.
     * @example
     * // Update or create a DiligenceUser
     * const diligenceUser = await prisma.diligenceUser.upsert({
     *   create: {
     *     // ... data to create a DiligenceUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiligenceUser we want to update
     *   }
     * })
    **/
    upsert<T extends DiligenceUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceUserUpsertArgs<ExtArgs>>
    ): Prisma__DiligenceUserClient<$Types.GetResult<DiligenceUserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of DiligenceUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceUserCountArgs} args - Arguments to filter DiligenceUsers to count.
     * @example
     * // Count the number of DiligenceUsers
     * const count = await prisma.diligenceUser.count({
     *   where: {
     *     // ... the filter for the DiligenceUsers we want to count
     *   }
     * })
    **/
    count<T extends DiligenceUserCountArgs>(
      args?: Subset<T, DiligenceUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiligenceUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiligenceUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiligenceUserAggregateArgs>(args: Subset<T, DiligenceUserAggregateArgs>): Prisma.PrismaPromise<GetDiligenceUserAggregateType<T>>

    /**
     * Group by DiligenceUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiligenceUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiligenceUserGroupByArgs['orderBy'] }
        : { orderBy?: DiligenceUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiligenceUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiligenceUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DiligenceUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DiligenceUserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    diligenceEnterprise<T extends DiligenceEnterpriseArgs<ExtArgs> = {}>(args?: Subset<T, DiligenceEnterpriseArgs<ExtArgs>>): Prisma__DiligenceEnterpriseClient<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DiligenceUser base type for findUnique actions
   */
  export type DiligenceUserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceUser
     */
    select?: DiligenceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceUserInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceUser to fetch.
     */
    where: DiligenceUserWhereUniqueInput
  }

  /**
   * DiligenceUser findUnique
   */
  export interface DiligenceUserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DiligenceUserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DiligenceUser findUniqueOrThrow
   */
  export type DiligenceUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceUser
     */
    select?: DiligenceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceUserInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceUser to fetch.
     */
    where: DiligenceUserWhereUniqueInput
  }


  /**
   * DiligenceUser base type for findFirst actions
   */
  export type DiligenceUserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceUser
     */
    select?: DiligenceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceUserInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceUser to fetch.
     */
    where?: DiligenceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceUsers to fetch.
     */
    orderBy?: Enumerable<DiligenceUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiligenceUsers.
     */
    cursor?: DiligenceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiligenceUsers.
     */
    distinct?: Enumerable<DiligenceUserScalarFieldEnum>
  }

  /**
   * DiligenceUser findFirst
   */
  export interface DiligenceUserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DiligenceUserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DiligenceUser findFirstOrThrow
   */
  export type DiligenceUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceUser
     */
    select?: DiligenceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceUserInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceUser to fetch.
     */
    where?: DiligenceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceUsers to fetch.
     */
    orderBy?: Enumerable<DiligenceUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiligenceUsers.
     */
    cursor?: DiligenceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiligenceUsers.
     */
    distinct?: Enumerable<DiligenceUserScalarFieldEnum>
  }


  /**
   * DiligenceUser findMany
   */
  export type DiligenceUserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceUser
     */
    select?: DiligenceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceUserInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceUsers to fetch.
     */
    where?: DiligenceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceUsers to fetch.
     */
    orderBy?: Enumerable<DiligenceUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiligenceUsers.
     */
    cursor?: DiligenceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceUsers.
     */
    skip?: number
    distinct?: Enumerable<DiligenceUserScalarFieldEnum>
  }


  /**
   * DiligenceUser create
   */
  export type DiligenceUserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceUser
     */
    select?: DiligenceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceUserInclude<ExtArgs> | null
    /**
     * The data needed to create a DiligenceUser.
     */
    data: XOR<DiligenceUserCreateInput, DiligenceUserUncheckedCreateInput>
  }


  /**
   * DiligenceUser createMany
   */
  export type DiligenceUserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiligenceUsers.
     */
    data: Enumerable<DiligenceUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DiligenceUser update
   */
  export type DiligenceUserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceUser
     */
    select?: DiligenceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceUserInclude<ExtArgs> | null
    /**
     * The data needed to update a DiligenceUser.
     */
    data: XOR<DiligenceUserUpdateInput, DiligenceUserUncheckedUpdateInput>
    /**
     * Choose, which DiligenceUser to update.
     */
    where: DiligenceUserWhereUniqueInput
  }


  /**
   * DiligenceUser updateMany
   */
  export type DiligenceUserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiligenceUsers.
     */
    data: XOR<DiligenceUserUpdateManyMutationInput, DiligenceUserUncheckedUpdateManyInput>
    /**
     * Filter which DiligenceUsers to update
     */
    where?: DiligenceUserWhereInput
  }


  /**
   * DiligenceUser upsert
   */
  export type DiligenceUserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceUser
     */
    select?: DiligenceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceUserInclude<ExtArgs> | null
    /**
     * The filter to search for the DiligenceUser to update in case it exists.
     */
    where: DiligenceUserWhereUniqueInput
    /**
     * In case the DiligenceUser found by the `where` argument doesn't exist, create a new DiligenceUser with this data.
     */
    create: XOR<DiligenceUserCreateInput, DiligenceUserUncheckedCreateInput>
    /**
     * In case the DiligenceUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiligenceUserUpdateInput, DiligenceUserUncheckedUpdateInput>
  }


  /**
   * DiligenceUser delete
   */
  export type DiligenceUserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceUser
     */
    select?: DiligenceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceUserInclude<ExtArgs> | null
    /**
     * Filter which DiligenceUser to delete.
     */
    where: DiligenceUserWhereUniqueInput
  }


  /**
   * DiligenceUser deleteMany
   */
  export type DiligenceUserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiligenceUsers to delete
     */
    where?: DiligenceUserWhereInput
  }


  /**
   * DiligenceUser without action
   */
  export type DiligenceUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceUser
     */
    select?: DiligenceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceUserInclude<ExtArgs> | null
  }



  /**
   * Model DiligenceRequest
   */


  export type AggregateDiligenceRequest = {
    _count: DiligenceRequestCountAggregateOutputType | null
    _min: DiligenceRequestMinAggregateOutputType | null
    _max: DiligenceRequestMaxAggregateOutputType | null
  }

  export type DiligenceRequestMinAggregateOutputType = {
    id: string | null
    name: string | null
    registrationNumber: string | null
    status: string | null
    createdBy: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    diligenceEnterpriseId: string | null
  }

  export type DiligenceRequestMaxAggregateOutputType = {
    id: string | null
    name: string | null
    registrationNumber: string | null
    status: string | null
    createdBy: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    diligenceEnterpriseId: string | null
  }

  export type DiligenceRequestCountAggregateOutputType = {
    id: number
    name: number
    registrationNumber: number
    status: number
    createdBy: number
    isDeprecated: number
    createdAt: number
    updatedAt: number
    diligenceEnterpriseId: number
    _all: number
  }


  export type DiligenceRequestMinAggregateInputType = {
    id?: true
    name?: true
    registrationNumber?: true
    status?: true
    createdBy?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceEnterpriseId?: true
  }

  export type DiligenceRequestMaxAggregateInputType = {
    id?: true
    name?: true
    registrationNumber?: true
    status?: true
    createdBy?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceEnterpriseId?: true
  }

  export type DiligenceRequestCountAggregateInputType = {
    id?: true
    name?: true
    registrationNumber?: true
    status?: true
    createdBy?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceEnterpriseId?: true
    _all?: true
  }

  export type DiligenceRequestAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiligenceRequest to aggregate.
     */
    where?: DiligenceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceRequests to fetch.
     */
    orderBy?: Enumerable<DiligenceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiligenceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiligenceRequests
    **/
    _count?: true | DiligenceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiligenceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiligenceRequestMaxAggregateInputType
  }

  export type GetDiligenceRequestAggregateType<T extends DiligenceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateDiligenceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiligenceRequest[P]>
      : GetScalarType<T[P], AggregateDiligenceRequest[P]>
  }




  export type DiligenceRequestGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DiligenceRequestWhereInput
    orderBy?: Enumerable<DiligenceRequestOrderByWithAggregationInput>
    by: DiligenceRequestScalarFieldEnum[]
    having?: DiligenceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiligenceRequestCountAggregateInputType | true
    _min?: DiligenceRequestMinAggregateInputType
    _max?: DiligenceRequestMaxAggregateInputType
  }


  export type DiligenceRequestGroupByOutputType = {
    id: string
    name: string
    registrationNumber: string
    status: string
    createdBy: string
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
    diligenceEnterpriseId: string
    _count: DiligenceRequestCountAggregateOutputType | null
    _min: DiligenceRequestMinAggregateOutputType | null
    _max: DiligenceRequestMaxAggregateOutputType | null
  }

  type GetDiligenceRequestGroupByPayload<T extends DiligenceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DiligenceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiligenceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiligenceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], DiligenceRequestGroupByOutputType[P]>
        }
      >
    >


  export type DiligenceRequestSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    registrationNumber?: boolean
    status?: boolean
    createdBy?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diligenceEnterpriseId?: boolean
    diligenceRequestDocument?: boolean | DiligenceRequest$diligenceRequestDocumentArgs<ExtArgs>
    diligenceEnterprise?: boolean | DiligenceEnterpriseArgs<ExtArgs>
    _count?: boolean | DiligenceRequestCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["diligenceRequest"]>

  export type DiligenceRequestSelectScalar = {
    id?: boolean
    name?: boolean
    registrationNumber?: boolean
    status?: boolean
    createdBy?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diligenceEnterpriseId?: boolean
  }

  export type DiligenceRequestInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    diligenceRequestDocument?: boolean | DiligenceRequest$diligenceRequestDocumentArgs<ExtArgs>
    diligenceEnterprise?: boolean | DiligenceEnterpriseArgs<ExtArgs>
    _count?: boolean | DiligenceRequestCountOutputTypeArgs<ExtArgs>
  }


  type DiligenceRequestGetPayload<S extends boolean | null | undefined | DiligenceRequestArgs> = $Types.GetResult<DiligenceRequestPayload, S>

  type DiligenceRequestCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DiligenceRequestFindManyArgs, 'select' | 'include'> & {
      select?: DiligenceRequestCountAggregateInputType | true
    }

  export interface DiligenceRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiligenceRequest'], meta: { name: 'DiligenceRequest' } }
    /**
     * Find zero or one DiligenceRequest that matches the filter.
     * @param {DiligenceRequestFindUniqueArgs} args - Arguments to find a DiligenceRequest
     * @example
     * // Get one DiligenceRequest
     * const diligenceRequest = await prisma.diligenceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DiligenceRequestFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DiligenceRequestFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DiligenceRequest'> extends True ? Prisma__DiligenceRequestClient<$Types.GetResult<DiligenceRequestPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DiligenceRequestClient<$Types.GetResult<DiligenceRequestPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one DiligenceRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DiligenceRequestFindUniqueOrThrowArgs} args - Arguments to find a DiligenceRequest
     * @example
     * // Get one DiligenceRequest
     * const diligenceRequest = await prisma.diligenceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DiligenceRequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceRequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DiligenceRequestClient<$Types.GetResult<DiligenceRequestPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first DiligenceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestFindFirstArgs} args - Arguments to find a DiligenceRequest
     * @example
     * // Get one DiligenceRequest
     * const diligenceRequest = await prisma.diligenceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DiligenceRequestFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DiligenceRequestFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DiligenceRequest'> extends True ? Prisma__DiligenceRequestClient<$Types.GetResult<DiligenceRequestPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DiligenceRequestClient<$Types.GetResult<DiligenceRequestPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first DiligenceRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestFindFirstOrThrowArgs} args - Arguments to find a DiligenceRequest
     * @example
     * // Get one DiligenceRequest
     * const diligenceRequest = await prisma.diligenceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DiligenceRequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceRequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DiligenceRequestClient<$Types.GetResult<DiligenceRequestPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more DiligenceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiligenceRequests
     * const diligenceRequests = await prisma.diligenceRequest.findMany()
     * 
     * // Get first 10 DiligenceRequests
     * const diligenceRequests = await prisma.diligenceRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diligenceRequestWithIdOnly = await prisma.diligenceRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DiligenceRequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceRequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DiligenceRequestPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a DiligenceRequest.
     * @param {DiligenceRequestCreateArgs} args - Arguments to create a DiligenceRequest.
     * @example
     * // Create one DiligenceRequest
     * const DiligenceRequest = await prisma.diligenceRequest.create({
     *   data: {
     *     // ... data to create a DiligenceRequest
     *   }
     * })
     * 
    **/
    create<T extends DiligenceRequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceRequestCreateArgs<ExtArgs>>
    ): Prisma__DiligenceRequestClient<$Types.GetResult<DiligenceRequestPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many DiligenceRequests.
     *     @param {DiligenceRequestCreateManyArgs} args - Arguments to create many DiligenceRequests.
     *     @example
     *     // Create many DiligenceRequests
     *     const diligenceRequest = await prisma.diligenceRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DiligenceRequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceRequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiligenceRequest.
     * @param {DiligenceRequestDeleteArgs} args - Arguments to delete one DiligenceRequest.
     * @example
     * // Delete one DiligenceRequest
     * const DiligenceRequest = await prisma.diligenceRequest.delete({
     *   where: {
     *     // ... filter to delete one DiligenceRequest
     *   }
     * })
     * 
    **/
    delete<T extends DiligenceRequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceRequestDeleteArgs<ExtArgs>>
    ): Prisma__DiligenceRequestClient<$Types.GetResult<DiligenceRequestPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one DiligenceRequest.
     * @param {DiligenceRequestUpdateArgs} args - Arguments to update one DiligenceRequest.
     * @example
     * // Update one DiligenceRequest
     * const diligenceRequest = await prisma.diligenceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DiligenceRequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceRequestUpdateArgs<ExtArgs>>
    ): Prisma__DiligenceRequestClient<$Types.GetResult<DiligenceRequestPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more DiligenceRequests.
     * @param {DiligenceRequestDeleteManyArgs} args - Arguments to filter DiligenceRequests to delete.
     * @example
     * // Delete a few DiligenceRequests
     * const { count } = await prisma.diligenceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DiligenceRequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceRequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiligenceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiligenceRequests
     * const diligenceRequest = await prisma.diligenceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DiligenceRequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceRequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiligenceRequest.
     * @param {DiligenceRequestUpsertArgs} args - Arguments to update or create a DiligenceRequest.
     * @example
     * // Update or create a DiligenceRequest
     * const diligenceRequest = await prisma.diligenceRequest.upsert({
     *   create: {
     *     // ... data to create a DiligenceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiligenceRequest we want to update
     *   }
     * })
    **/
    upsert<T extends DiligenceRequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceRequestUpsertArgs<ExtArgs>>
    ): Prisma__DiligenceRequestClient<$Types.GetResult<DiligenceRequestPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of DiligenceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestCountArgs} args - Arguments to filter DiligenceRequests to count.
     * @example
     * // Count the number of DiligenceRequests
     * const count = await prisma.diligenceRequest.count({
     *   where: {
     *     // ... the filter for the DiligenceRequests we want to count
     *   }
     * })
    **/
    count<T extends DiligenceRequestCountArgs>(
      args?: Subset<T, DiligenceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiligenceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiligenceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiligenceRequestAggregateArgs>(args: Subset<T, DiligenceRequestAggregateArgs>): Prisma.PrismaPromise<GetDiligenceRequestAggregateType<T>>

    /**
     * Group by DiligenceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiligenceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiligenceRequestGroupByArgs['orderBy'] }
        : { orderBy?: DiligenceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiligenceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiligenceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DiligenceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DiligenceRequestClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    diligenceRequestDocument<T extends DiligenceRequest$diligenceRequestDocumentArgs<ExtArgs> = {}>(args?: Subset<T, DiligenceRequest$diligenceRequestDocumentArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DiligenceRequestDocumentPayload<ExtArgs>, T, 'findMany', never>| Null>;

    diligenceEnterprise<T extends DiligenceEnterpriseArgs<ExtArgs> = {}>(args?: Subset<T, DiligenceEnterpriseArgs<ExtArgs>>): Prisma__DiligenceEnterpriseClient<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DiligenceRequest base type for findUnique actions
   */
  export type DiligenceRequestFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequest
     */
    select?: DiligenceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceRequest to fetch.
     */
    where: DiligenceRequestWhereUniqueInput
  }

  /**
   * DiligenceRequest findUnique
   */
  export interface DiligenceRequestFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DiligenceRequestFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DiligenceRequest findUniqueOrThrow
   */
  export type DiligenceRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequest
     */
    select?: DiligenceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceRequest to fetch.
     */
    where: DiligenceRequestWhereUniqueInput
  }


  /**
   * DiligenceRequest base type for findFirst actions
   */
  export type DiligenceRequestFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequest
     */
    select?: DiligenceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceRequest to fetch.
     */
    where?: DiligenceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceRequests to fetch.
     */
    orderBy?: Enumerable<DiligenceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiligenceRequests.
     */
    cursor?: DiligenceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiligenceRequests.
     */
    distinct?: Enumerable<DiligenceRequestScalarFieldEnum>
  }

  /**
   * DiligenceRequest findFirst
   */
  export interface DiligenceRequestFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DiligenceRequestFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DiligenceRequest findFirstOrThrow
   */
  export type DiligenceRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequest
     */
    select?: DiligenceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceRequest to fetch.
     */
    where?: DiligenceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceRequests to fetch.
     */
    orderBy?: Enumerable<DiligenceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiligenceRequests.
     */
    cursor?: DiligenceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiligenceRequests.
     */
    distinct?: Enumerable<DiligenceRequestScalarFieldEnum>
  }


  /**
   * DiligenceRequest findMany
   */
  export type DiligenceRequestFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequest
     */
    select?: DiligenceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceRequests to fetch.
     */
    where?: DiligenceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceRequests to fetch.
     */
    orderBy?: Enumerable<DiligenceRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiligenceRequests.
     */
    cursor?: DiligenceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceRequests.
     */
    skip?: number
    distinct?: Enumerable<DiligenceRequestScalarFieldEnum>
  }


  /**
   * DiligenceRequest create
   */
  export type DiligenceRequestCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequest
     */
    select?: DiligenceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a DiligenceRequest.
     */
    data: XOR<DiligenceRequestCreateInput, DiligenceRequestUncheckedCreateInput>
  }


  /**
   * DiligenceRequest createMany
   */
  export type DiligenceRequestCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiligenceRequests.
     */
    data: Enumerable<DiligenceRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DiligenceRequest update
   */
  export type DiligenceRequestUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequest
     */
    select?: DiligenceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a DiligenceRequest.
     */
    data: XOR<DiligenceRequestUpdateInput, DiligenceRequestUncheckedUpdateInput>
    /**
     * Choose, which DiligenceRequest to update.
     */
    where: DiligenceRequestWhereUniqueInput
  }


  /**
   * DiligenceRequest updateMany
   */
  export type DiligenceRequestUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiligenceRequests.
     */
    data: XOR<DiligenceRequestUpdateManyMutationInput, DiligenceRequestUncheckedUpdateManyInput>
    /**
     * Filter which DiligenceRequests to update
     */
    where?: DiligenceRequestWhereInput
  }


  /**
   * DiligenceRequest upsert
   */
  export type DiligenceRequestUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequest
     */
    select?: DiligenceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the DiligenceRequest to update in case it exists.
     */
    where: DiligenceRequestWhereUniqueInput
    /**
     * In case the DiligenceRequest found by the `where` argument doesn't exist, create a new DiligenceRequest with this data.
     */
    create: XOR<DiligenceRequestCreateInput, DiligenceRequestUncheckedCreateInput>
    /**
     * In case the DiligenceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiligenceRequestUpdateInput, DiligenceRequestUncheckedUpdateInput>
  }


  /**
   * DiligenceRequest delete
   */
  export type DiligenceRequestDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequest
     */
    select?: DiligenceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestInclude<ExtArgs> | null
    /**
     * Filter which DiligenceRequest to delete.
     */
    where: DiligenceRequestWhereUniqueInput
  }


  /**
   * DiligenceRequest deleteMany
   */
  export type DiligenceRequestDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiligenceRequests to delete
     */
    where?: DiligenceRequestWhereInput
  }


  /**
   * DiligenceRequest.diligenceRequestDocument
   */
  export type DiligenceRequest$diligenceRequestDocumentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequestDocument
     */
    select?: DiligenceRequestDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestDocumentInclude<ExtArgs> | null
    where?: DiligenceRequestDocumentWhereInput
    orderBy?: Enumerable<DiligenceRequestDocumentOrderByWithRelationInput>
    cursor?: DiligenceRequestDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DiligenceRequestDocumentScalarFieldEnum>
  }


  /**
   * DiligenceRequest without action
   */
  export type DiligenceRequestArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequest
     */
    select?: DiligenceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestInclude<ExtArgs> | null
  }



  /**
   * Model DiligenceRequestDocument
   */


  export type AggregateDiligenceRequestDocument = {
    _count: DiligenceRequestDocumentCountAggregateOutputType | null
    _min: DiligenceRequestDocumentMinAggregateOutputType | null
    _max: DiligenceRequestDocumentMaxAggregateOutputType | null
  }

  export type DiligenceRequestDocumentMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    description: string | null
    link: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    diligenceRequestId: string | null
  }

  export type DiligenceRequestDocumentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    description: string | null
    link: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    diligenceRequestId: string | null
  }

  export type DiligenceRequestDocumentCountAggregateOutputType = {
    id: number
    name: number
    type: number
    description: number
    link: number
    isDeprecated: number
    createdAt: number
    updatedAt: number
    diligenceRequestId: number
    _all: number
  }


  export type DiligenceRequestDocumentMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    link?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceRequestId?: true
  }

  export type DiligenceRequestDocumentMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    link?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceRequestId?: true
  }

  export type DiligenceRequestDocumentCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    link?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceRequestId?: true
    _all?: true
  }

  export type DiligenceRequestDocumentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiligenceRequestDocument to aggregate.
     */
    where?: DiligenceRequestDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceRequestDocuments to fetch.
     */
    orderBy?: Enumerable<DiligenceRequestDocumentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiligenceRequestDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceRequestDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceRequestDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiligenceRequestDocuments
    **/
    _count?: true | DiligenceRequestDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiligenceRequestDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiligenceRequestDocumentMaxAggregateInputType
  }

  export type GetDiligenceRequestDocumentAggregateType<T extends DiligenceRequestDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDiligenceRequestDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiligenceRequestDocument[P]>
      : GetScalarType<T[P], AggregateDiligenceRequestDocument[P]>
  }




  export type DiligenceRequestDocumentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DiligenceRequestDocumentWhereInput
    orderBy?: Enumerable<DiligenceRequestDocumentOrderByWithAggregationInput>
    by: DiligenceRequestDocumentScalarFieldEnum[]
    having?: DiligenceRequestDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiligenceRequestDocumentCountAggregateInputType | true
    _min?: DiligenceRequestDocumentMinAggregateInputType
    _max?: DiligenceRequestDocumentMaxAggregateInputType
  }


  export type DiligenceRequestDocumentGroupByOutputType = {
    id: string
    name: string
    type: string
    description: string
    link: string
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
    diligenceRequestId: string
    _count: DiligenceRequestDocumentCountAggregateOutputType | null
    _min: DiligenceRequestDocumentMinAggregateOutputType | null
    _max: DiligenceRequestDocumentMaxAggregateOutputType | null
  }

  type GetDiligenceRequestDocumentGroupByPayload<T extends DiligenceRequestDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DiligenceRequestDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiligenceRequestDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiligenceRequestDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DiligenceRequestDocumentGroupByOutputType[P]>
        }
      >
    >


  export type DiligenceRequestDocumentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    link?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diligenceRequestId?: boolean
    diligenceRequest?: boolean | DiligenceRequestArgs<ExtArgs>
  }, ExtArgs["result"]["diligenceRequestDocument"]>

  export type DiligenceRequestDocumentSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    link?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diligenceRequestId?: boolean
  }

  export type DiligenceRequestDocumentInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    diligenceRequest?: boolean | DiligenceRequestArgs<ExtArgs>
  }


  type DiligenceRequestDocumentGetPayload<S extends boolean | null | undefined | DiligenceRequestDocumentArgs> = $Types.GetResult<DiligenceRequestDocumentPayload, S>

  type DiligenceRequestDocumentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DiligenceRequestDocumentFindManyArgs, 'select' | 'include'> & {
      select?: DiligenceRequestDocumentCountAggregateInputType | true
    }

  export interface DiligenceRequestDocumentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiligenceRequestDocument'], meta: { name: 'DiligenceRequestDocument' } }
    /**
     * Find zero or one DiligenceRequestDocument that matches the filter.
     * @param {DiligenceRequestDocumentFindUniqueArgs} args - Arguments to find a DiligenceRequestDocument
     * @example
     * // Get one DiligenceRequestDocument
     * const diligenceRequestDocument = await prisma.diligenceRequestDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DiligenceRequestDocumentFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DiligenceRequestDocumentFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DiligenceRequestDocument'> extends True ? Prisma__DiligenceRequestDocumentClient<$Types.GetResult<DiligenceRequestDocumentPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DiligenceRequestDocumentClient<$Types.GetResult<DiligenceRequestDocumentPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one DiligenceRequestDocument that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DiligenceRequestDocumentFindUniqueOrThrowArgs} args - Arguments to find a DiligenceRequestDocument
     * @example
     * // Get one DiligenceRequestDocument
     * const diligenceRequestDocument = await prisma.diligenceRequestDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DiligenceRequestDocumentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceRequestDocumentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DiligenceRequestDocumentClient<$Types.GetResult<DiligenceRequestDocumentPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first DiligenceRequestDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestDocumentFindFirstArgs} args - Arguments to find a DiligenceRequestDocument
     * @example
     * // Get one DiligenceRequestDocument
     * const diligenceRequestDocument = await prisma.diligenceRequestDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DiligenceRequestDocumentFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DiligenceRequestDocumentFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DiligenceRequestDocument'> extends True ? Prisma__DiligenceRequestDocumentClient<$Types.GetResult<DiligenceRequestDocumentPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DiligenceRequestDocumentClient<$Types.GetResult<DiligenceRequestDocumentPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first DiligenceRequestDocument that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestDocumentFindFirstOrThrowArgs} args - Arguments to find a DiligenceRequestDocument
     * @example
     * // Get one DiligenceRequestDocument
     * const diligenceRequestDocument = await prisma.diligenceRequestDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DiligenceRequestDocumentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceRequestDocumentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DiligenceRequestDocumentClient<$Types.GetResult<DiligenceRequestDocumentPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more DiligenceRequestDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestDocumentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiligenceRequestDocuments
     * const diligenceRequestDocuments = await prisma.diligenceRequestDocument.findMany()
     * 
     * // Get first 10 DiligenceRequestDocuments
     * const diligenceRequestDocuments = await prisma.diligenceRequestDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diligenceRequestDocumentWithIdOnly = await prisma.diligenceRequestDocument.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DiligenceRequestDocumentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceRequestDocumentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DiligenceRequestDocumentPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a DiligenceRequestDocument.
     * @param {DiligenceRequestDocumentCreateArgs} args - Arguments to create a DiligenceRequestDocument.
     * @example
     * // Create one DiligenceRequestDocument
     * const DiligenceRequestDocument = await prisma.diligenceRequestDocument.create({
     *   data: {
     *     // ... data to create a DiligenceRequestDocument
     *   }
     * })
     * 
    **/
    create<T extends DiligenceRequestDocumentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceRequestDocumentCreateArgs<ExtArgs>>
    ): Prisma__DiligenceRequestDocumentClient<$Types.GetResult<DiligenceRequestDocumentPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many DiligenceRequestDocuments.
     *     @param {DiligenceRequestDocumentCreateManyArgs} args - Arguments to create many DiligenceRequestDocuments.
     *     @example
     *     // Create many DiligenceRequestDocuments
     *     const diligenceRequestDocument = await prisma.diligenceRequestDocument.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DiligenceRequestDocumentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceRequestDocumentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiligenceRequestDocument.
     * @param {DiligenceRequestDocumentDeleteArgs} args - Arguments to delete one DiligenceRequestDocument.
     * @example
     * // Delete one DiligenceRequestDocument
     * const DiligenceRequestDocument = await prisma.diligenceRequestDocument.delete({
     *   where: {
     *     // ... filter to delete one DiligenceRequestDocument
     *   }
     * })
     * 
    **/
    delete<T extends DiligenceRequestDocumentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceRequestDocumentDeleteArgs<ExtArgs>>
    ): Prisma__DiligenceRequestDocumentClient<$Types.GetResult<DiligenceRequestDocumentPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one DiligenceRequestDocument.
     * @param {DiligenceRequestDocumentUpdateArgs} args - Arguments to update one DiligenceRequestDocument.
     * @example
     * // Update one DiligenceRequestDocument
     * const diligenceRequestDocument = await prisma.diligenceRequestDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DiligenceRequestDocumentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceRequestDocumentUpdateArgs<ExtArgs>>
    ): Prisma__DiligenceRequestDocumentClient<$Types.GetResult<DiligenceRequestDocumentPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more DiligenceRequestDocuments.
     * @param {DiligenceRequestDocumentDeleteManyArgs} args - Arguments to filter DiligenceRequestDocuments to delete.
     * @example
     * // Delete a few DiligenceRequestDocuments
     * const { count } = await prisma.diligenceRequestDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DiligenceRequestDocumentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceRequestDocumentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiligenceRequestDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiligenceRequestDocuments
     * const diligenceRequestDocument = await prisma.diligenceRequestDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DiligenceRequestDocumentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceRequestDocumentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiligenceRequestDocument.
     * @param {DiligenceRequestDocumentUpsertArgs} args - Arguments to update or create a DiligenceRequestDocument.
     * @example
     * // Update or create a DiligenceRequestDocument
     * const diligenceRequestDocument = await prisma.diligenceRequestDocument.upsert({
     *   create: {
     *     // ... data to create a DiligenceRequestDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiligenceRequestDocument we want to update
     *   }
     * })
    **/
    upsert<T extends DiligenceRequestDocumentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceRequestDocumentUpsertArgs<ExtArgs>>
    ): Prisma__DiligenceRequestDocumentClient<$Types.GetResult<DiligenceRequestDocumentPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of DiligenceRequestDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestDocumentCountArgs} args - Arguments to filter DiligenceRequestDocuments to count.
     * @example
     * // Count the number of DiligenceRequestDocuments
     * const count = await prisma.diligenceRequestDocument.count({
     *   where: {
     *     // ... the filter for the DiligenceRequestDocuments we want to count
     *   }
     * })
    **/
    count<T extends DiligenceRequestDocumentCountArgs>(
      args?: Subset<T, DiligenceRequestDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiligenceRequestDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiligenceRequestDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiligenceRequestDocumentAggregateArgs>(args: Subset<T, DiligenceRequestDocumentAggregateArgs>): Prisma.PrismaPromise<GetDiligenceRequestDocumentAggregateType<T>>

    /**
     * Group by DiligenceRequestDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceRequestDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiligenceRequestDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiligenceRequestDocumentGroupByArgs['orderBy'] }
        : { orderBy?: DiligenceRequestDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiligenceRequestDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiligenceRequestDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DiligenceRequestDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DiligenceRequestDocumentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    diligenceRequest<T extends DiligenceRequestArgs<ExtArgs> = {}>(args?: Subset<T, DiligenceRequestArgs<ExtArgs>>): Prisma__DiligenceRequestClient<$Types.GetResult<DiligenceRequestPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DiligenceRequestDocument base type for findUnique actions
   */
  export type DiligenceRequestDocumentFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequestDocument
     */
    select?: DiligenceRequestDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceRequestDocument to fetch.
     */
    where: DiligenceRequestDocumentWhereUniqueInput
  }

  /**
   * DiligenceRequestDocument findUnique
   */
  export interface DiligenceRequestDocumentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DiligenceRequestDocumentFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DiligenceRequestDocument findUniqueOrThrow
   */
  export type DiligenceRequestDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequestDocument
     */
    select?: DiligenceRequestDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceRequestDocument to fetch.
     */
    where: DiligenceRequestDocumentWhereUniqueInput
  }


  /**
   * DiligenceRequestDocument base type for findFirst actions
   */
  export type DiligenceRequestDocumentFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequestDocument
     */
    select?: DiligenceRequestDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceRequestDocument to fetch.
     */
    where?: DiligenceRequestDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceRequestDocuments to fetch.
     */
    orderBy?: Enumerable<DiligenceRequestDocumentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiligenceRequestDocuments.
     */
    cursor?: DiligenceRequestDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceRequestDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceRequestDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiligenceRequestDocuments.
     */
    distinct?: Enumerable<DiligenceRequestDocumentScalarFieldEnum>
  }

  /**
   * DiligenceRequestDocument findFirst
   */
  export interface DiligenceRequestDocumentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DiligenceRequestDocumentFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DiligenceRequestDocument findFirstOrThrow
   */
  export type DiligenceRequestDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequestDocument
     */
    select?: DiligenceRequestDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceRequestDocument to fetch.
     */
    where?: DiligenceRequestDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceRequestDocuments to fetch.
     */
    orderBy?: Enumerable<DiligenceRequestDocumentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiligenceRequestDocuments.
     */
    cursor?: DiligenceRequestDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceRequestDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceRequestDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiligenceRequestDocuments.
     */
    distinct?: Enumerable<DiligenceRequestDocumentScalarFieldEnum>
  }


  /**
   * DiligenceRequestDocument findMany
   */
  export type DiligenceRequestDocumentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequestDocument
     */
    select?: DiligenceRequestDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceRequestDocuments to fetch.
     */
    where?: DiligenceRequestDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceRequestDocuments to fetch.
     */
    orderBy?: Enumerable<DiligenceRequestDocumentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiligenceRequestDocuments.
     */
    cursor?: DiligenceRequestDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceRequestDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceRequestDocuments.
     */
    skip?: number
    distinct?: Enumerable<DiligenceRequestDocumentScalarFieldEnum>
  }


  /**
   * DiligenceRequestDocument create
   */
  export type DiligenceRequestDocumentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequestDocument
     */
    select?: DiligenceRequestDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a DiligenceRequestDocument.
     */
    data: XOR<DiligenceRequestDocumentCreateInput, DiligenceRequestDocumentUncheckedCreateInput>
  }


  /**
   * DiligenceRequestDocument createMany
   */
  export type DiligenceRequestDocumentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiligenceRequestDocuments.
     */
    data: Enumerable<DiligenceRequestDocumentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DiligenceRequestDocument update
   */
  export type DiligenceRequestDocumentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequestDocument
     */
    select?: DiligenceRequestDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a DiligenceRequestDocument.
     */
    data: XOR<DiligenceRequestDocumentUpdateInput, DiligenceRequestDocumentUncheckedUpdateInput>
    /**
     * Choose, which DiligenceRequestDocument to update.
     */
    where: DiligenceRequestDocumentWhereUniqueInput
  }


  /**
   * DiligenceRequestDocument updateMany
   */
  export type DiligenceRequestDocumentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiligenceRequestDocuments.
     */
    data: XOR<DiligenceRequestDocumentUpdateManyMutationInput, DiligenceRequestDocumentUncheckedUpdateManyInput>
    /**
     * Filter which DiligenceRequestDocuments to update
     */
    where?: DiligenceRequestDocumentWhereInput
  }


  /**
   * DiligenceRequestDocument upsert
   */
  export type DiligenceRequestDocumentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequestDocument
     */
    select?: DiligenceRequestDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the DiligenceRequestDocument to update in case it exists.
     */
    where: DiligenceRequestDocumentWhereUniqueInput
    /**
     * In case the DiligenceRequestDocument found by the `where` argument doesn't exist, create a new DiligenceRequestDocument with this data.
     */
    create: XOR<DiligenceRequestDocumentCreateInput, DiligenceRequestDocumentUncheckedCreateInput>
    /**
     * In case the DiligenceRequestDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiligenceRequestDocumentUpdateInput, DiligenceRequestDocumentUncheckedUpdateInput>
  }


  /**
   * DiligenceRequestDocument delete
   */
  export type DiligenceRequestDocumentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequestDocument
     */
    select?: DiligenceRequestDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestDocumentInclude<ExtArgs> | null
    /**
     * Filter which DiligenceRequestDocument to delete.
     */
    where: DiligenceRequestDocumentWhereUniqueInput
  }


  /**
   * DiligenceRequestDocument deleteMany
   */
  export type DiligenceRequestDocumentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiligenceRequestDocuments to delete
     */
    where?: DiligenceRequestDocumentWhereInput
  }


  /**
   * DiligenceRequestDocument without action
   */
  export type DiligenceRequestDocumentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequestDocument
     */
    select?: DiligenceRequestDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestDocumentInclude<ExtArgs> | null
  }



  /**
   * Model DiligenceEnterprise
   */


  export type AggregateDiligenceEnterprise = {
    _count: DiligenceEnterpriseCountAggregateOutputType | null
    _min: DiligenceEnterpriseMinAggregateOutputType | null
    _max: DiligenceEnterpriseMaxAggregateOutputType | null
  }

  export type DiligenceEnterpriseMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    adminEmail: string | null
    color: string | null
    logo: string | null
    backdrop: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiligenceEnterpriseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    adminEmail: string | null
    color: string | null
    logo: string | null
    backdrop: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiligenceEnterpriseCountAggregateOutputType = {
    id: number
    name: number
    address: number
    adminEmail: number
    color: number
    logo: number
    backdrop: number
    isDeprecated: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DiligenceEnterpriseMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    adminEmail?: true
    color?: true
    logo?: true
    backdrop?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiligenceEnterpriseMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    adminEmail?: true
    color?: true
    logo?: true
    backdrop?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiligenceEnterpriseCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    adminEmail?: true
    color?: true
    logo?: true
    backdrop?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DiligenceEnterpriseAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiligenceEnterprise to aggregate.
     */
    where?: DiligenceEnterpriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceEnterprises to fetch.
     */
    orderBy?: Enumerable<DiligenceEnterpriseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiligenceEnterpriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceEnterprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceEnterprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiligenceEnterprises
    **/
    _count?: true | DiligenceEnterpriseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiligenceEnterpriseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiligenceEnterpriseMaxAggregateInputType
  }

  export type GetDiligenceEnterpriseAggregateType<T extends DiligenceEnterpriseAggregateArgs> = {
        [P in keyof T & keyof AggregateDiligenceEnterprise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiligenceEnterprise[P]>
      : GetScalarType<T[P], AggregateDiligenceEnterprise[P]>
  }




  export type DiligenceEnterpriseGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DiligenceEnterpriseWhereInput
    orderBy?: Enumerable<DiligenceEnterpriseOrderByWithAggregationInput>
    by: DiligenceEnterpriseScalarFieldEnum[]
    having?: DiligenceEnterpriseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiligenceEnterpriseCountAggregateInputType | true
    _min?: DiligenceEnterpriseMinAggregateInputType
    _max?: DiligenceEnterpriseMaxAggregateInputType
  }


  export type DiligenceEnterpriseGroupByOutputType = {
    id: string
    name: string
    address: string
    adminEmail: string
    color: string | null
    logo: string | null
    backdrop: string | null
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
    _count: DiligenceEnterpriseCountAggregateOutputType | null
    _min: DiligenceEnterpriseMinAggregateOutputType | null
    _max: DiligenceEnterpriseMaxAggregateOutputType | null
  }

  type GetDiligenceEnterpriseGroupByPayload<T extends DiligenceEnterpriseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DiligenceEnterpriseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiligenceEnterpriseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiligenceEnterpriseGroupByOutputType[P]>
            : GetScalarType<T[P], DiligenceEnterpriseGroupByOutputType[P]>
        }
      >
    >


  export type DiligenceEnterpriseSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    adminEmail?: boolean
    color?: boolean
    logo?: boolean
    backdrop?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diligenceManager?: boolean | DiligenceEnterprise$diligenceManagerArgs<ExtArgs>
    diligenceRequest?: boolean | DiligenceEnterprise$diligenceRequestArgs<ExtArgs>
    diligenceUser?: boolean | DiligenceEnterprise$diligenceUserArgs<ExtArgs>
    _count?: boolean | DiligenceEnterpriseCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["diligenceEnterprise"]>

  export type DiligenceEnterpriseSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    adminEmail?: boolean
    color?: boolean
    logo?: boolean
    backdrop?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DiligenceEnterpriseInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    diligenceManager?: boolean | DiligenceEnterprise$diligenceManagerArgs<ExtArgs>
    diligenceRequest?: boolean | DiligenceEnterprise$diligenceRequestArgs<ExtArgs>
    diligenceUser?: boolean | DiligenceEnterprise$diligenceUserArgs<ExtArgs>
    _count?: boolean | DiligenceEnterpriseCountOutputTypeArgs<ExtArgs>
  }


  type DiligenceEnterpriseGetPayload<S extends boolean | null | undefined | DiligenceEnterpriseArgs> = $Types.GetResult<DiligenceEnterprisePayload, S>

  type DiligenceEnterpriseCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DiligenceEnterpriseFindManyArgs, 'select' | 'include'> & {
      select?: DiligenceEnterpriseCountAggregateInputType | true
    }

  export interface DiligenceEnterpriseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiligenceEnterprise'], meta: { name: 'DiligenceEnterprise' } }
    /**
     * Find zero or one DiligenceEnterprise that matches the filter.
     * @param {DiligenceEnterpriseFindUniqueArgs} args - Arguments to find a DiligenceEnterprise
     * @example
     * // Get one DiligenceEnterprise
     * const diligenceEnterprise = await prisma.diligenceEnterprise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DiligenceEnterpriseFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DiligenceEnterpriseFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DiligenceEnterprise'> extends True ? Prisma__DiligenceEnterpriseClient<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DiligenceEnterpriseClient<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one DiligenceEnterprise that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DiligenceEnterpriseFindUniqueOrThrowArgs} args - Arguments to find a DiligenceEnterprise
     * @example
     * // Get one DiligenceEnterprise
     * const diligenceEnterprise = await prisma.diligenceEnterprise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DiligenceEnterpriseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceEnterpriseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DiligenceEnterpriseClient<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first DiligenceEnterprise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceEnterpriseFindFirstArgs} args - Arguments to find a DiligenceEnterprise
     * @example
     * // Get one DiligenceEnterprise
     * const diligenceEnterprise = await prisma.diligenceEnterprise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DiligenceEnterpriseFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DiligenceEnterpriseFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DiligenceEnterprise'> extends True ? Prisma__DiligenceEnterpriseClient<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DiligenceEnterpriseClient<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first DiligenceEnterprise that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceEnterpriseFindFirstOrThrowArgs} args - Arguments to find a DiligenceEnterprise
     * @example
     * // Get one DiligenceEnterprise
     * const diligenceEnterprise = await prisma.diligenceEnterprise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DiligenceEnterpriseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceEnterpriseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DiligenceEnterpriseClient<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more DiligenceEnterprises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceEnterpriseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiligenceEnterprises
     * const diligenceEnterprises = await prisma.diligenceEnterprise.findMany()
     * 
     * // Get first 10 DiligenceEnterprises
     * const diligenceEnterprises = await prisma.diligenceEnterprise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diligenceEnterpriseWithIdOnly = await prisma.diligenceEnterprise.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DiligenceEnterpriseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceEnterpriseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a DiligenceEnterprise.
     * @param {DiligenceEnterpriseCreateArgs} args - Arguments to create a DiligenceEnterprise.
     * @example
     * // Create one DiligenceEnterprise
     * const DiligenceEnterprise = await prisma.diligenceEnterprise.create({
     *   data: {
     *     // ... data to create a DiligenceEnterprise
     *   }
     * })
     * 
    **/
    create<T extends DiligenceEnterpriseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceEnterpriseCreateArgs<ExtArgs>>
    ): Prisma__DiligenceEnterpriseClient<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many DiligenceEnterprises.
     *     @param {DiligenceEnterpriseCreateManyArgs} args - Arguments to create many DiligenceEnterprises.
     *     @example
     *     // Create many DiligenceEnterprises
     *     const diligenceEnterprise = await prisma.diligenceEnterprise.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DiligenceEnterpriseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceEnterpriseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiligenceEnterprise.
     * @param {DiligenceEnterpriseDeleteArgs} args - Arguments to delete one DiligenceEnterprise.
     * @example
     * // Delete one DiligenceEnterprise
     * const DiligenceEnterprise = await prisma.diligenceEnterprise.delete({
     *   where: {
     *     // ... filter to delete one DiligenceEnterprise
     *   }
     * })
     * 
    **/
    delete<T extends DiligenceEnterpriseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceEnterpriseDeleteArgs<ExtArgs>>
    ): Prisma__DiligenceEnterpriseClient<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one DiligenceEnterprise.
     * @param {DiligenceEnterpriseUpdateArgs} args - Arguments to update one DiligenceEnterprise.
     * @example
     * // Update one DiligenceEnterprise
     * const diligenceEnterprise = await prisma.diligenceEnterprise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DiligenceEnterpriseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceEnterpriseUpdateArgs<ExtArgs>>
    ): Prisma__DiligenceEnterpriseClient<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more DiligenceEnterprises.
     * @param {DiligenceEnterpriseDeleteManyArgs} args - Arguments to filter DiligenceEnterprises to delete.
     * @example
     * // Delete a few DiligenceEnterprises
     * const { count } = await prisma.diligenceEnterprise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DiligenceEnterpriseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceEnterpriseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiligenceEnterprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceEnterpriseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiligenceEnterprises
     * const diligenceEnterprise = await prisma.diligenceEnterprise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DiligenceEnterpriseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceEnterpriseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiligenceEnterprise.
     * @param {DiligenceEnterpriseUpsertArgs} args - Arguments to update or create a DiligenceEnterprise.
     * @example
     * // Update or create a DiligenceEnterprise
     * const diligenceEnterprise = await prisma.diligenceEnterprise.upsert({
     *   create: {
     *     // ... data to create a DiligenceEnterprise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiligenceEnterprise we want to update
     *   }
     * })
    **/
    upsert<T extends DiligenceEnterpriseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceEnterpriseUpsertArgs<ExtArgs>>
    ): Prisma__DiligenceEnterpriseClient<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of DiligenceEnterprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceEnterpriseCountArgs} args - Arguments to filter DiligenceEnterprises to count.
     * @example
     * // Count the number of DiligenceEnterprises
     * const count = await prisma.diligenceEnterprise.count({
     *   where: {
     *     // ... the filter for the DiligenceEnterprises we want to count
     *   }
     * })
    **/
    count<T extends DiligenceEnterpriseCountArgs>(
      args?: Subset<T, DiligenceEnterpriseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiligenceEnterpriseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiligenceEnterprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceEnterpriseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiligenceEnterpriseAggregateArgs>(args: Subset<T, DiligenceEnterpriseAggregateArgs>): Prisma.PrismaPromise<GetDiligenceEnterpriseAggregateType<T>>

    /**
     * Group by DiligenceEnterprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceEnterpriseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiligenceEnterpriseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiligenceEnterpriseGroupByArgs['orderBy'] }
        : { orderBy?: DiligenceEnterpriseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiligenceEnterpriseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiligenceEnterpriseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DiligenceEnterprise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DiligenceEnterpriseClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    diligenceManager<T extends DiligenceEnterprise$diligenceManagerArgs<ExtArgs> = {}>(args?: Subset<T, DiligenceEnterprise$diligenceManagerArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DiligenceManagerPayload<ExtArgs>, T, 'findMany', never>| Null>;

    diligenceRequest<T extends DiligenceEnterprise$diligenceRequestArgs<ExtArgs> = {}>(args?: Subset<T, DiligenceEnterprise$diligenceRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DiligenceRequestPayload<ExtArgs>, T, 'findMany', never>| Null>;

    diligenceUser<T extends DiligenceEnterprise$diligenceUserArgs<ExtArgs> = {}>(args?: Subset<T, DiligenceEnterprise$diligenceUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DiligenceUserPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DiligenceEnterprise base type for findUnique actions
   */
  export type DiligenceEnterpriseFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceEnterprise
     */
    select?: DiligenceEnterpriseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceEnterpriseInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceEnterprise to fetch.
     */
    where: DiligenceEnterpriseWhereUniqueInput
  }

  /**
   * DiligenceEnterprise findUnique
   */
  export interface DiligenceEnterpriseFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DiligenceEnterpriseFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DiligenceEnterprise findUniqueOrThrow
   */
  export type DiligenceEnterpriseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceEnterprise
     */
    select?: DiligenceEnterpriseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceEnterpriseInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceEnterprise to fetch.
     */
    where: DiligenceEnterpriseWhereUniqueInput
  }


  /**
   * DiligenceEnterprise base type for findFirst actions
   */
  export type DiligenceEnterpriseFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceEnterprise
     */
    select?: DiligenceEnterpriseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceEnterpriseInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceEnterprise to fetch.
     */
    where?: DiligenceEnterpriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceEnterprises to fetch.
     */
    orderBy?: Enumerable<DiligenceEnterpriseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiligenceEnterprises.
     */
    cursor?: DiligenceEnterpriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceEnterprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceEnterprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiligenceEnterprises.
     */
    distinct?: Enumerable<DiligenceEnterpriseScalarFieldEnum>
  }

  /**
   * DiligenceEnterprise findFirst
   */
  export interface DiligenceEnterpriseFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DiligenceEnterpriseFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DiligenceEnterprise findFirstOrThrow
   */
  export type DiligenceEnterpriseFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceEnterprise
     */
    select?: DiligenceEnterpriseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceEnterpriseInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceEnterprise to fetch.
     */
    where?: DiligenceEnterpriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceEnterprises to fetch.
     */
    orderBy?: Enumerable<DiligenceEnterpriseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiligenceEnterprises.
     */
    cursor?: DiligenceEnterpriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceEnterprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceEnterprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiligenceEnterprises.
     */
    distinct?: Enumerable<DiligenceEnterpriseScalarFieldEnum>
  }


  /**
   * DiligenceEnterprise findMany
   */
  export type DiligenceEnterpriseFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceEnterprise
     */
    select?: DiligenceEnterpriseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceEnterpriseInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceEnterprises to fetch.
     */
    where?: DiligenceEnterpriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceEnterprises to fetch.
     */
    orderBy?: Enumerable<DiligenceEnterpriseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiligenceEnterprises.
     */
    cursor?: DiligenceEnterpriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceEnterprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceEnterprises.
     */
    skip?: number
    distinct?: Enumerable<DiligenceEnterpriseScalarFieldEnum>
  }


  /**
   * DiligenceEnterprise create
   */
  export type DiligenceEnterpriseCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceEnterprise
     */
    select?: DiligenceEnterpriseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceEnterpriseInclude<ExtArgs> | null
    /**
     * The data needed to create a DiligenceEnterprise.
     */
    data: XOR<DiligenceEnterpriseCreateInput, DiligenceEnterpriseUncheckedCreateInput>
  }


  /**
   * DiligenceEnterprise createMany
   */
  export type DiligenceEnterpriseCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiligenceEnterprises.
     */
    data: Enumerable<DiligenceEnterpriseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DiligenceEnterprise update
   */
  export type DiligenceEnterpriseUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceEnterprise
     */
    select?: DiligenceEnterpriseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceEnterpriseInclude<ExtArgs> | null
    /**
     * The data needed to update a DiligenceEnterprise.
     */
    data: XOR<DiligenceEnterpriseUpdateInput, DiligenceEnterpriseUncheckedUpdateInput>
    /**
     * Choose, which DiligenceEnterprise to update.
     */
    where: DiligenceEnterpriseWhereUniqueInput
  }


  /**
   * DiligenceEnterprise updateMany
   */
  export type DiligenceEnterpriseUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiligenceEnterprises.
     */
    data: XOR<DiligenceEnterpriseUpdateManyMutationInput, DiligenceEnterpriseUncheckedUpdateManyInput>
    /**
     * Filter which DiligenceEnterprises to update
     */
    where?: DiligenceEnterpriseWhereInput
  }


  /**
   * DiligenceEnterprise upsert
   */
  export type DiligenceEnterpriseUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceEnterprise
     */
    select?: DiligenceEnterpriseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceEnterpriseInclude<ExtArgs> | null
    /**
     * The filter to search for the DiligenceEnterprise to update in case it exists.
     */
    where: DiligenceEnterpriseWhereUniqueInput
    /**
     * In case the DiligenceEnterprise found by the `where` argument doesn't exist, create a new DiligenceEnterprise with this data.
     */
    create: XOR<DiligenceEnterpriseCreateInput, DiligenceEnterpriseUncheckedCreateInput>
    /**
     * In case the DiligenceEnterprise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiligenceEnterpriseUpdateInput, DiligenceEnterpriseUncheckedUpdateInput>
  }


  /**
   * DiligenceEnterprise delete
   */
  export type DiligenceEnterpriseDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceEnterprise
     */
    select?: DiligenceEnterpriseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceEnterpriseInclude<ExtArgs> | null
    /**
     * Filter which DiligenceEnterprise to delete.
     */
    where: DiligenceEnterpriseWhereUniqueInput
  }


  /**
   * DiligenceEnterprise deleteMany
   */
  export type DiligenceEnterpriseDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiligenceEnterprises to delete
     */
    where?: DiligenceEnterpriseWhereInput
  }


  /**
   * DiligenceEnterprise.diligenceManager
   */
  export type DiligenceEnterprise$diligenceManagerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceManager
     */
    select?: DiligenceManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceManagerInclude<ExtArgs> | null
    where?: DiligenceManagerWhereInput
    orderBy?: Enumerable<DiligenceManagerOrderByWithRelationInput>
    cursor?: DiligenceManagerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DiligenceManagerScalarFieldEnum>
  }


  /**
   * DiligenceEnterprise.diligenceRequest
   */
  export type DiligenceEnterprise$diligenceRequestArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceRequest
     */
    select?: DiligenceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceRequestInclude<ExtArgs> | null
    where?: DiligenceRequestWhereInput
    orderBy?: Enumerable<DiligenceRequestOrderByWithRelationInput>
    cursor?: DiligenceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DiligenceRequestScalarFieldEnum>
  }


  /**
   * DiligenceEnterprise.diligenceUser
   */
  export type DiligenceEnterprise$diligenceUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceUser
     */
    select?: DiligenceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceUserInclude<ExtArgs> | null
    where?: DiligenceUserWhereInput
    orderBy?: Enumerable<DiligenceUserOrderByWithRelationInput>
    cursor?: DiligenceUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DiligenceUserScalarFieldEnum>
  }


  /**
   * DiligenceEnterprise without action
   */
  export type DiligenceEnterpriseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceEnterprise
     */
    select?: DiligenceEnterpriseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceEnterpriseInclude<ExtArgs> | null
  }



  /**
   * Model DiligenceManager
   */


  export type AggregateDiligenceManager = {
    _count: DiligenceManagerCountAggregateOutputType | null
    _min: DiligenceManagerMinAggregateOutputType | null
    _max: DiligenceManagerMaxAggregateOutputType | null
  }

  export type DiligenceManagerMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    managerEmail: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    diligenceEnterpriseId: string | null
  }

  export type DiligenceManagerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    managerEmail: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    diligenceEnterpriseId: string | null
  }

  export type DiligenceManagerCountAggregateOutputType = {
    id: number
    name: number
    location: number
    managerEmail: number
    isDeprecated: number
    createdAt: number
    updatedAt: number
    diligenceEnterpriseId: number
    _all: number
  }


  export type DiligenceManagerMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    managerEmail?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceEnterpriseId?: true
  }

  export type DiligenceManagerMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    managerEmail?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceEnterpriseId?: true
  }

  export type DiligenceManagerCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    managerEmail?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceEnterpriseId?: true
    _all?: true
  }

  export type DiligenceManagerAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiligenceManager to aggregate.
     */
    where?: DiligenceManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceManagers to fetch.
     */
    orderBy?: Enumerable<DiligenceManagerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiligenceManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiligenceManagers
    **/
    _count?: true | DiligenceManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiligenceManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiligenceManagerMaxAggregateInputType
  }

  export type GetDiligenceManagerAggregateType<T extends DiligenceManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateDiligenceManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiligenceManager[P]>
      : GetScalarType<T[P], AggregateDiligenceManager[P]>
  }




  export type DiligenceManagerGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DiligenceManagerWhereInput
    orderBy?: Enumerable<DiligenceManagerOrderByWithAggregationInput>
    by: DiligenceManagerScalarFieldEnum[]
    having?: DiligenceManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiligenceManagerCountAggregateInputType | true
    _min?: DiligenceManagerMinAggregateInputType
    _max?: DiligenceManagerMaxAggregateInputType
  }


  export type DiligenceManagerGroupByOutputType = {
    id: string
    name: string | null
    location: string | null
    managerEmail: string
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
    diligenceEnterpriseId: string
    _count: DiligenceManagerCountAggregateOutputType | null
    _min: DiligenceManagerMinAggregateOutputType | null
    _max: DiligenceManagerMaxAggregateOutputType | null
  }

  type GetDiligenceManagerGroupByPayload<T extends DiligenceManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DiligenceManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiligenceManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiligenceManagerGroupByOutputType[P]>
            : GetScalarType<T[P], DiligenceManagerGroupByOutputType[P]>
        }
      >
    >


  export type DiligenceManagerSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    managerEmail?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diligenceEnterpriseId?: boolean
    diligenceStaff?: boolean | DiligenceManager$diligenceStaffArgs<ExtArgs>
    diligenceEnterprise?: boolean | DiligenceEnterpriseArgs<ExtArgs>
    _count?: boolean | DiligenceManagerCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["diligenceManager"]>

  export type DiligenceManagerSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    managerEmail?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diligenceEnterpriseId?: boolean
  }

  export type DiligenceManagerInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    diligenceStaff?: boolean | DiligenceManager$diligenceStaffArgs<ExtArgs>
    diligenceEnterprise?: boolean | DiligenceEnterpriseArgs<ExtArgs>
    _count?: boolean | DiligenceManagerCountOutputTypeArgs<ExtArgs>
  }


  type DiligenceManagerGetPayload<S extends boolean | null | undefined | DiligenceManagerArgs> = $Types.GetResult<DiligenceManagerPayload, S>

  type DiligenceManagerCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DiligenceManagerFindManyArgs, 'select' | 'include'> & {
      select?: DiligenceManagerCountAggregateInputType | true
    }

  export interface DiligenceManagerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiligenceManager'], meta: { name: 'DiligenceManager' } }
    /**
     * Find zero or one DiligenceManager that matches the filter.
     * @param {DiligenceManagerFindUniqueArgs} args - Arguments to find a DiligenceManager
     * @example
     * // Get one DiligenceManager
     * const diligenceManager = await prisma.diligenceManager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DiligenceManagerFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DiligenceManagerFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DiligenceManager'> extends True ? Prisma__DiligenceManagerClient<$Types.GetResult<DiligenceManagerPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DiligenceManagerClient<$Types.GetResult<DiligenceManagerPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one DiligenceManager that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DiligenceManagerFindUniqueOrThrowArgs} args - Arguments to find a DiligenceManager
     * @example
     * // Get one DiligenceManager
     * const diligenceManager = await prisma.diligenceManager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DiligenceManagerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceManagerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DiligenceManagerClient<$Types.GetResult<DiligenceManagerPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first DiligenceManager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceManagerFindFirstArgs} args - Arguments to find a DiligenceManager
     * @example
     * // Get one DiligenceManager
     * const diligenceManager = await prisma.diligenceManager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DiligenceManagerFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DiligenceManagerFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DiligenceManager'> extends True ? Prisma__DiligenceManagerClient<$Types.GetResult<DiligenceManagerPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DiligenceManagerClient<$Types.GetResult<DiligenceManagerPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first DiligenceManager that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceManagerFindFirstOrThrowArgs} args - Arguments to find a DiligenceManager
     * @example
     * // Get one DiligenceManager
     * const diligenceManager = await prisma.diligenceManager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DiligenceManagerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceManagerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DiligenceManagerClient<$Types.GetResult<DiligenceManagerPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more DiligenceManagers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceManagerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiligenceManagers
     * const diligenceManagers = await prisma.diligenceManager.findMany()
     * 
     * // Get first 10 DiligenceManagers
     * const diligenceManagers = await prisma.diligenceManager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diligenceManagerWithIdOnly = await prisma.diligenceManager.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DiligenceManagerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceManagerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DiligenceManagerPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a DiligenceManager.
     * @param {DiligenceManagerCreateArgs} args - Arguments to create a DiligenceManager.
     * @example
     * // Create one DiligenceManager
     * const DiligenceManager = await prisma.diligenceManager.create({
     *   data: {
     *     // ... data to create a DiligenceManager
     *   }
     * })
     * 
    **/
    create<T extends DiligenceManagerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceManagerCreateArgs<ExtArgs>>
    ): Prisma__DiligenceManagerClient<$Types.GetResult<DiligenceManagerPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many DiligenceManagers.
     *     @param {DiligenceManagerCreateManyArgs} args - Arguments to create many DiligenceManagers.
     *     @example
     *     // Create many DiligenceManagers
     *     const diligenceManager = await prisma.diligenceManager.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DiligenceManagerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceManagerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiligenceManager.
     * @param {DiligenceManagerDeleteArgs} args - Arguments to delete one DiligenceManager.
     * @example
     * // Delete one DiligenceManager
     * const DiligenceManager = await prisma.diligenceManager.delete({
     *   where: {
     *     // ... filter to delete one DiligenceManager
     *   }
     * })
     * 
    **/
    delete<T extends DiligenceManagerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceManagerDeleteArgs<ExtArgs>>
    ): Prisma__DiligenceManagerClient<$Types.GetResult<DiligenceManagerPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one DiligenceManager.
     * @param {DiligenceManagerUpdateArgs} args - Arguments to update one DiligenceManager.
     * @example
     * // Update one DiligenceManager
     * const diligenceManager = await prisma.diligenceManager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DiligenceManagerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceManagerUpdateArgs<ExtArgs>>
    ): Prisma__DiligenceManagerClient<$Types.GetResult<DiligenceManagerPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more DiligenceManagers.
     * @param {DiligenceManagerDeleteManyArgs} args - Arguments to filter DiligenceManagers to delete.
     * @example
     * // Delete a few DiligenceManagers
     * const { count } = await prisma.diligenceManager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DiligenceManagerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceManagerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiligenceManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiligenceManagers
     * const diligenceManager = await prisma.diligenceManager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DiligenceManagerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceManagerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiligenceManager.
     * @param {DiligenceManagerUpsertArgs} args - Arguments to update or create a DiligenceManager.
     * @example
     * // Update or create a DiligenceManager
     * const diligenceManager = await prisma.diligenceManager.upsert({
     *   create: {
     *     // ... data to create a DiligenceManager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiligenceManager we want to update
     *   }
     * })
    **/
    upsert<T extends DiligenceManagerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceManagerUpsertArgs<ExtArgs>>
    ): Prisma__DiligenceManagerClient<$Types.GetResult<DiligenceManagerPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of DiligenceManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceManagerCountArgs} args - Arguments to filter DiligenceManagers to count.
     * @example
     * // Count the number of DiligenceManagers
     * const count = await prisma.diligenceManager.count({
     *   where: {
     *     // ... the filter for the DiligenceManagers we want to count
     *   }
     * })
    **/
    count<T extends DiligenceManagerCountArgs>(
      args?: Subset<T, DiligenceManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiligenceManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiligenceManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiligenceManagerAggregateArgs>(args: Subset<T, DiligenceManagerAggregateArgs>): Prisma.PrismaPromise<GetDiligenceManagerAggregateType<T>>

    /**
     * Group by DiligenceManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceManagerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiligenceManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiligenceManagerGroupByArgs['orderBy'] }
        : { orderBy?: DiligenceManagerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiligenceManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiligenceManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DiligenceManager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DiligenceManagerClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    diligenceStaff<T extends DiligenceManager$diligenceStaffArgs<ExtArgs> = {}>(args?: Subset<T, DiligenceManager$diligenceStaffArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DiligenceStaffPayload<ExtArgs>, T, 'findMany', never>| Null>;

    diligenceEnterprise<T extends DiligenceEnterpriseArgs<ExtArgs> = {}>(args?: Subset<T, DiligenceEnterpriseArgs<ExtArgs>>): Prisma__DiligenceEnterpriseClient<$Types.GetResult<DiligenceEnterprisePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DiligenceManager base type for findUnique actions
   */
  export type DiligenceManagerFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceManager
     */
    select?: DiligenceManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceManagerInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceManager to fetch.
     */
    where: DiligenceManagerWhereUniqueInput
  }

  /**
   * DiligenceManager findUnique
   */
  export interface DiligenceManagerFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DiligenceManagerFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DiligenceManager findUniqueOrThrow
   */
  export type DiligenceManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceManager
     */
    select?: DiligenceManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceManagerInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceManager to fetch.
     */
    where: DiligenceManagerWhereUniqueInput
  }


  /**
   * DiligenceManager base type for findFirst actions
   */
  export type DiligenceManagerFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceManager
     */
    select?: DiligenceManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceManagerInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceManager to fetch.
     */
    where?: DiligenceManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceManagers to fetch.
     */
    orderBy?: Enumerable<DiligenceManagerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiligenceManagers.
     */
    cursor?: DiligenceManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiligenceManagers.
     */
    distinct?: Enumerable<DiligenceManagerScalarFieldEnum>
  }

  /**
   * DiligenceManager findFirst
   */
  export interface DiligenceManagerFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DiligenceManagerFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DiligenceManager findFirstOrThrow
   */
  export type DiligenceManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceManager
     */
    select?: DiligenceManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceManagerInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceManager to fetch.
     */
    where?: DiligenceManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceManagers to fetch.
     */
    orderBy?: Enumerable<DiligenceManagerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiligenceManagers.
     */
    cursor?: DiligenceManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiligenceManagers.
     */
    distinct?: Enumerable<DiligenceManagerScalarFieldEnum>
  }


  /**
   * DiligenceManager findMany
   */
  export type DiligenceManagerFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceManager
     */
    select?: DiligenceManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceManagerInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceManagers to fetch.
     */
    where?: DiligenceManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceManagers to fetch.
     */
    orderBy?: Enumerable<DiligenceManagerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiligenceManagers.
     */
    cursor?: DiligenceManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceManagers.
     */
    skip?: number
    distinct?: Enumerable<DiligenceManagerScalarFieldEnum>
  }


  /**
   * DiligenceManager create
   */
  export type DiligenceManagerCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceManager
     */
    select?: DiligenceManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a DiligenceManager.
     */
    data: XOR<DiligenceManagerCreateInput, DiligenceManagerUncheckedCreateInput>
  }


  /**
   * DiligenceManager createMany
   */
  export type DiligenceManagerCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiligenceManagers.
     */
    data: Enumerable<DiligenceManagerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DiligenceManager update
   */
  export type DiligenceManagerUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceManager
     */
    select?: DiligenceManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a DiligenceManager.
     */
    data: XOR<DiligenceManagerUpdateInput, DiligenceManagerUncheckedUpdateInput>
    /**
     * Choose, which DiligenceManager to update.
     */
    where: DiligenceManagerWhereUniqueInput
  }


  /**
   * DiligenceManager updateMany
   */
  export type DiligenceManagerUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiligenceManagers.
     */
    data: XOR<DiligenceManagerUpdateManyMutationInput, DiligenceManagerUncheckedUpdateManyInput>
    /**
     * Filter which DiligenceManagers to update
     */
    where?: DiligenceManagerWhereInput
  }


  /**
   * DiligenceManager upsert
   */
  export type DiligenceManagerUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceManager
     */
    select?: DiligenceManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the DiligenceManager to update in case it exists.
     */
    where: DiligenceManagerWhereUniqueInput
    /**
     * In case the DiligenceManager found by the `where` argument doesn't exist, create a new DiligenceManager with this data.
     */
    create: XOR<DiligenceManagerCreateInput, DiligenceManagerUncheckedCreateInput>
    /**
     * In case the DiligenceManager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiligenceManagerUpdateInput, DiligenceManagerUncheckedUpdateInput>
  }


  /**
   * DiligenceManager delete
   */
  export type DiligenceManagerDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceManager
     */
    select?: DiligenceManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceManagerInclude<ExtArgs> | null
    /**
     * Filter which DiligenceManager to delete.
     */
    where: DiligenceManagerWhereUniqueInput
  }


  /**
   * DiligenceManager deleteMany
   */
  export type DiligenceManagerDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiligenceManagers to delete
     */
    where?: DiligenceManagerWhereInput
  }


  /**
   * DiligenceManager.diligenceStaff
   */
  export type DiligenceManager$diligenceStaffArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceStaff
     */
    select?: DiligenceStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceStaffInclude<ExtArgs> | null
    where?: DiligenceStaffWhereInput
    orderBy?: Enumerable<DiligenceStaffOrderByWithRelationInput>
    cursor?: DiligenceStaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DiligenceStaffScalarFieldEnum>
  }


  /**
   * DiligenceManager without action
   */
  export type DiligenceManagerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceManager
     */
    select?: DiligenceManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceManagerInclude<ExtArgs> | null
  }



  /**
   * Model DiligenceStaff
   */


  export type AggregateDiligenceStaff = {
    _count: DiligenceStaffCountAggregateOutputType | null
    _min: DiligenceStaffMinAggregateOutputType | null
    _max: DiligenceStaffMaxAggregateOutputType | null
  }

  export type DiligenceStaffMinAggregateOutputType = {
    id: string | null
    email: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    diligenceManagerId: string | null
  }

  export type DiligenceStaffMaxAggregateOutputType = {
    id: string | null
    email: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    diligenceManagerId: string | null
  }

  export type DiligenceStaffCountAggregateOutputType = {
    id: number
    email: number
    isDeprecated: number
    createdAt: number
    updatedAt: number
    diligenceManagerId: number
    _all: number
  }


  export type DiligenceStaffMinAggregateInputType = {
    id?: true
    email?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceManagerId?: true
  }

  export type DiligenceStaffMaxAggregateInputType = {
    id?: true
    email?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceManagerId?: true
  }

  export type DiligenceStaffCountAggregateInputType = {
    id?: true
    email?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    diligenceManagerId?: true
    _all?: true
  }

  export type DiligenceStaffAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiligenceStaff to aggregate.
     */
    where?: DiligenceStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceStaffs to fetch.
     */
    orderBy?: Enumerable<DiligenceStaffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiligenceStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiligenceStaffs
    **/
    _count?: true | DiligenceStaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiligenceStaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiligenceStaffMaxAggregateInputType
  }

  export type GetDiligenceStaffAggregateType<T extends DiligenceStaffAggregateArgs> = {
        [P in keyof T & keyof AggregateDiligenceStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiligenceStaff[P]>
      : GetScalarType<T[P], AggregateDiligenceStaff[P]>
  }




  export type DiligenceStaffGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DiligenceStaffWhereInput
    orderBy?: Enumerable<DiligenceStaffOrderByWithAggregationInput>
    by: DiligenceStaffScalarFieldEnum[]
    having?: DiligenceStaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiligenceStaffCountAggregateInputType | true
    _min?: DiligenceStaffMinAggregateInputType
    _max?: DiligenceStaffMaxAggregateInputType
  }


  export type DiligenceStaffGroupByOutputType = {
    id: string
    email: string
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
    diligenceManagerId: string
    _count: DiligenceStaffCountAggregateOutputType | null
    _min: DiligenceStaffMinAggregateOutputType | null
    _max: DiligenceStaffMaxAggregateOutputType | null
  }

  type GetDiligenceStaffGroupByPayload<T extends DiligenceStaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DiligenceStaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiligenceStaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiligenceStaffGroupByOutputType[P]>
            : GetScalarType<T[P], DiligenceStaffGroupByOutputType[P]>
        }
      >
    >


  export type DiligenceStaffSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diligenceManagerId?: boolean
    diligenceManager?: boolean | DiligenceManagerArgs<ExtArgs>
  }, ExtArgs["result"]["diligenceStaff"]>

  export type DiligenceStaffSelectScalar = {
    id?: boolean
    email?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diligenceManagerId?: boolean
  }

  export type DiligenceStaffInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    diligenceManager?: boolean | DiligenceManagerArgs<ExtArgs>
  }


  type DiligenceStaffGetPayload<S extends boolean | null | undefined | DiligenceStaffArgs> = $Types.GetResult<DiligenceStaffPayload, S>

  type DiligenceStaffCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DiligenceStaffFindManyArgs, 'select' | 'include'> & {
      select?: DiligenceStaffCountAggregateInputType | true
    }

  export interface DiligenceStaffDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiligenceStaff'], meta: { name: 'DiligenceStaff' } }
    /**
     * Find zero or one DiligenceStaff that matches the filter.
     * @param {DiligenceStaffFindUniqueArgs} args - Arguments to find a DiligenceStaff
     * @example
     * // Get one DiligenceStaff
     * const diligenceStaff = await prisma.diligenceStaff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DiligenceStaffFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DiligenceStaffFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DiligenceStaff'> extends True ? Prisma__DiligenceStaffClient<$Types.GetResult<DiligenceStaffPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DiligenceStaffClient<$Types.GetResult<DiligenceStaffPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one DiligenceStaff that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DiligenceStaffFindUniqueOrThrowArgs} args - Arguments to find a DiligenceStaff
     * @example
     * // Get one DiligenceStaff
     * const diligenceStaff = await prisma.diligenceStaff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DiligenceStaffFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceStaffFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DiligenceStaffClient<$Types.GetResult<DiligenceStaffPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first DiligenceStaff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceStaffFindFirstArgs} args - Arguments to find a DiligenceStaff
     * @example
     * // Get one DiligenceStaff
     * const diligenceStaff = await prisma.diligenceStaff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DiligenceStaffFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DiligenceStaffFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DiligenceStaff'> extends True ? Prisma__DiligenceStaffClient<$Types.GetResult<DiligenceStaffPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DiligenceStaffClient<$Types.GetResult<DiligenceStaffPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first DiligenceStaff that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceStaffFindFirstOrThrowArgs} args - Arguments to find a DiligenceStaff
     * @example
     * // Get one DiligenceStaff
     * const diligenceStaff = await prisma.diligenceStaff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DiligenceStaffFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceStaffFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DiligenceStaffClient<$Types.GetResult<DiligenceStaffPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more DiligenceStaffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceStaffFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiligenceStaffs
     * const diligenceStaffs = await prisma.diligenceStaff.findMany()
     * 
     * // Get first 10 DiligenceStaffs
     * const diligenceStaffs = await prisma.diligenceStaff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diligenceStaffWithIdOnly = await prisma.diligenceStaff.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DiligenceStaffFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceStaffFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DiligenceStaffPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a DiligenceStaff.
     * @param {DiligenceStaffCreateArgs} args - Arguments to create a DiligenceStaff.
     * @example
     * // Create one DiligenceStaff
     * const DiligenceStaff = await prisma.diligenceStaff.create({
     *   data: {
     *     // ... data to create a DiligenceStaff
     *   }
     * })
     * 
    **/
    create<T extends DiligenceStaffCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceStaffCreateArgs<ExtArgs>>
    ): Prisma__DiligenceStaffClient<$Types.GetResult<DiligenceStaffPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many DiligenceStaffs.
     *     @param {DiligenceStaffCreateManyArgs} args - Arguments to create many DiligenceStaffs.
     *     @example
     *     // Create many DiligenceStaffs
     *     const diligenceStaff = await prisma.diligenceStaff.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DiligenceStaffCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceStaffCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiligenceStaff.
     * @param {DiligenceStaffDeleteArgs} args - Arguments to delete one DiligenceStaff.
     * @example
     * // Delete one DiligenceStaff
     * const DiligenceStaff = await prisma.diligenceStaff.delete({
     *   where: {
     *     // ... filter to delete one DiligenceStaff
     *   }
     * })
     * 
    **/
    delete<T extends DiligenceStaffDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceStaffDeleteArgs<ExtArgs>>
    ): Prisma__DiligenceStaffClient<$Types.GetResult<DiligenceStaffPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one DiligenceStaff.
     * @param {DiligenceStaffUpdateArgs} args - Arguments to update one DiligenceStaff.
     * @example
     * // Update one DiligenceStaff
     * const diligenceStaff = await prisma.diligenceStaff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DiligenceStaffUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceStaffUpdateArgs<ExtArgs>>
    ): Prisma__DiligenceStaffClient<$Types.GetResult<DiligenceStaffPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more DiligenceStaffs.
     * @param {DiligenceStaffDeleteManyArgs} args - Arguments to filter DiligenceStaffs to delete.
     * @example
     * // Delete a few DiligenceStaffs
     * const { count } = await prisma.diligenceStaff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DiligenceStaffDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiligenceStaffDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiligenceStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceStaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiligenceStaffs
     * const diligenceStaff = await prisma.diligenceStaff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DiligenceStaffUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceStaffUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiligenceStaff.
     * @param {DiligenceStaffUpsertArgs} args - Arguments to update or create a DiligenceStaff.
     * @example
     * // Update or create a DiligenceStaff
     * const diligenceStaff = await prisma.diligenceStaff.upsert({
     *   create: {
     *     // ... data to create a DiligenceStaff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiligenceStaff we want to update
     *   }
     * })
    **/
    upsert<T extends DiligenceStaffUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DiligenceStaffUpsertArgs<ExtArgs>>
    ): Prisma__DiligenceStaffClient<$Types.GetResult<DiligenceStaffPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of DiligenceStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceStaffCountArgs} args - Arguments to filter DiligenceStaffs to count.
     * @example
     * // Count the number of DiligenceStaffs
     * const count = await prisma.diligenceStaff.count({
     *   where: {
     *     // ... the filter for the DiligenceStaffs we want to count
     *   }
     * })
    **/
    count<T extends DiligenceStaffCountArgs>(
      args?: Subset<T, DiligenceStaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiligenceStaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiligenceStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceStaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiligenceStaffAggregateArgs>(args: Subset<T, DiligenceStaffAggregateArgs>): Prisma.PrismaPromise<GetDiligenceStaffAggregateType<T>>

    /**
     * Group by DiligenceStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiligenceStaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiligenceStaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiligenceStaffGroupByArgs['orderBy'] }
        : { orderBy?: DiligenceStaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiligenceStaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiligenceStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DiligenceStaff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DiligenceStaffClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    diligenceManager<T extends DiligenceManagerArgs<ExtArgs> = {}>(args?: Subset<T, DiligenceManagerArgs<ExtArgs>>): Prisma__DiligenceManagerClient<$Types.GetResult<DiligenceManagerPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DiligenceStaff base type for findUnique actions
   */
  export type DiligenceStaffFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceStaff
     */
    select?: DiligenceStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceStaffInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceStaff to fetch.
     */
    where: DiligenceStaffWhereUniqueInput
  }

  /**
   * DiligenceStaff findUnique
   */
  export interface DiligenceStaffFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DiligenceStaffFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DiligenceStaff findUniqueOrThrow
   */
  export type DiligenceStaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceStaff
     */
    select?: DiligenceStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceStaffInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceStaff to fetch.
     */
    where: DiligenceStaffWhereUniqueInput
  }


  /**
   * DiligenceStaff base type for findFirst actions
   */
  export type DiligenceStaffFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceStaff
     */
    select?: DiligenceStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceStaffInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceStaff to fetch.
     */
    where?: DiligenceStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceStaffs to fetch.
     */
    orderBy?: Enumerable<DiligenceStaffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiligenceStaffs.
     */
    cursor?: DiligenceStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiligenceStaffs.
     */
    distinct?: Enumerable<DiligenceStaffScalarFieldEnum>
  }

  /**
   * DiligenceStaff findFirst
   */
  export interface DiligenceStaffFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DiligenceStaffFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DiligenceStaff findFirstOrThrow
   */
  export type DiligenceStaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceStaff
     */
    select?: DiligenceStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceStaffInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceStaff to fetch.
     */
    where?: DiligenceStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceStaffs to fetch.
     */
    orderBy?: Enumerable<DiligenceStaffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiligenceStaffs.
     */
    cursor?: DiligenceStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiligenceStaffs.
     */
    distinct?: Enumerable<DiligenceStaffScalarFieldEnum>
  }


  /**
   * DiligenceStaff findMany
   */
  export type DiligenceStaffFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceStaff
     */
    select?: DiligenceStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceStaffInclude<ExtArgs> | null
    /**
     * Filter, which DiligenceStaffs to fetch.
     */
    where?: DiligenceStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiligenceStaffs to fetch.
     */
    orderBy?: Enumerable<DiligenceStaffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiligenceStaffs.
     */
    cursor?: DiligenceStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiligenceStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiligenceStaffs.
     */
    skip?: number
    distinct?: Enumerable<DiligenceStaffScalarFieldEnum>
  }


  /**
   * DiligenceStaff create
   */
  export type DiligenceStaffCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceStaff
     */
    select?: DiligenceStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceStaffInclude<ExtArgs> | null
    /**
     * The data needed to create a DiligenceStaff.
     */
    data: XOR<DiligenceStaffCreateInput, DiligenceStaffUncheckedCreateInput>
  }


  /**
   * DiligenceStaff createMany
   */
  export type DiligenceStaffCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiligenceStaffs.
     */
    data: Enumerable<DiligenceStaffCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DiligenceStaff update
   */
  export type DiligenceStaffUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceStaff
     */
    select?: DiligenceStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceStaffInclude<ExtArgs> | null
    /**
     * The data needed to update a DiligenceStaff.
     */
    data: XOR<DiligenceStaffUpdateInput, DiligenceStaffUncheckedUpdateInput>
    /**
     * Choose, which DiligenceStaff to update.
     */
    where: DiligenceStaffWhereUniqueInput
  }


  /**
   * DiligenceStaff updateMany
   */
  export type DiligenceStaffUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiligenceStaffs.
     */
    data: XOR<DiligenceStaffUpdateManyMutationInput, DiligenceStaffUncheckedUpdateManyInput>
    /**
     * Filter which DiligenceStaffs to update
     */
    where?: DiligenceStaffWhereInput
  }


  /**
   * DiligenceStaff upsert
   */
  export type DiligenceStaffUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceStaff
     */
    select?: DiligenceStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceStaffInclude<ExtArgs> | null
    /**
     * The filter to search for the DiligenceStaff to update in case it exists.
     */
    where: DiligenceStaffWhereUniqueInput
    /**
     * In case the DiligenceStaff found by the `where` argument doesn't exist, create a new DiligenceStaff with this data.
     */
    create: XOR<DiligenceStaffCreateInput, DiligenceStaffUncheckedCreateInput>
    /**
     * In case the DiligenceStaff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiligenceStaffUpdateInput, DiligenceStaffUncheckedUpdateInput>
  }


  /**
   * DiligenceStaff delete
   */
  export type DiligenceStaffDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceStaff
     */
    select?: DiligenceStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceStaffInclude<ExtArgs> | null
    /**
     * Filter which DiligenceStaff to delete.
     */
    where: DiligenceStaffWhereUniqueInput
  }


  /**
   * DiligenceStaff deleteMany
   */
  export type DiligenceStaffDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiligenceStaffs to delete
     */
    where?: DiligenceStaffWhereInput
  }


  /**
   * DiligenceStaff without action
   */
  export type DiligenceStaffArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiligenceStaff
     */
    select?: DiligenceStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiligenceStaffInclude<ExtArgs> | null
  }



  /**
   * Model NigerianBank
   */


  export type AggregateNigerianBank = {
    _count: NigerianBankCountAggregateOutputType | null
    _min: NigerianBankMinAggregateOutputType | null
    _max: NigerianBankMaxAggregateOutputType | null
  }

  export type NigerianBankMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    slug: string | null
    logo: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NigerianBankMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    slug: string | null
    logo: string | null
    isDeprecated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NigerianBankCountAggregateOutputType = {
    id: number
    name: number
    color: number
    slug: number
    logo: number
    isDeprecated: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NigerianBankMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    slug?: true
    logo?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NigerianBankMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    slug?: true
    logo?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NigerianBankCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    slug?: true
    logo?: true
    isDeprecated?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NigerianBankAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which NigerianBank to aggregate.
     */
    where?: NigerianBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NigerianBanks to fetch.
     */
    orderBy?: Enumerable<NigerianBankOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NigerianBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NigerianBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NigerianBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NigerianBanks
    **/
    _count?: true | NigerianBankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NigerianBankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NigerianBankMaxAggregateInputType
  }

  export type GetNigerianBankAggregateType<T extends NigerianBankAggregateArgs> = {
        [P in keyof T & keyof AggregateNigerianBank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNigerianBank[P]>
      : GetScalarType<T[P], AggregateNigerianBank[P]>
  }




  export type NigerianBankGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: NigerianBankWhereInput
    orderBy?: Enumerable<NigerianBankOrderByWithAggregationInput>
    by: NigerianBankScalarFieldEnum[]
    having?: NigerianBankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NigerianBankCountAggregateInputType | true
    _min?: NigerianBankMinAggregateInputType
    _max?: NigerianBankMaxAggregateInputType
  }


  export type NigerianBankGroupByOutputType = {
    id: string
    name: string
    color: string | null
    slug: string
    logo: string
    isDeprecated: boolean
    createdAt: Date
    updatedAt: Date
    _count: NigerianBankCountAggregateOutputType | null
    _min: NigerianBankMinAggregateOutputType | null
    _max: NigerianBankMaxAggregateOutputType | null
  }

  type GetNigerianBankGroupByPayload<T extends NigerianBankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<NigerianBankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NigerianBankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NigerianBankGroupByOutputType[P]>
            : GetScalarType<T[P], NigerianBankGroupByOutputType[P]>
        }
      >
    >


  export type NigerianBankSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    slug?: boolean
    logo?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nigerianBank"]>

  export type NigerianBankSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    slug?: boolean
    logo?: boolean
    isDeprecated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  type NigerianBankGetPayload<S extends boolean | null | undefined | NigerianBankArgs> = $Types.GetResult<NigerianBankPayload, S>

  type NigerianBankCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<NigerianBankFindManyArgs, 'select' | 'include'> & {
      select?: NigerianBankCountAggregateInputType | true
    }

  export interface NigerianBankDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NigerianBank'], meta: { name: 'NigerianBank' } }
    /**
     * Find zero or one NigerianBank that matches the filter.
     * @param {NigerianBankFindUniqueArgs} args - Arguments to find a NigerianBank
     * @example
     * // Get one NigerianBank
     * const nigerianBank = await prisma.nigerianBank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NigerianBankFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NigerianBankFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'NigerianBank'> extends True ? Prisma__NigerianBankClient<$Types.GetResult<NigerianBankPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__NigerianBankClient<$Types.GetResult<NigerianBankPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one NigerianBank that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NigerianBankFindUniqueOrThrowArgs} args - Arguments to find a NigerianBank
     * @example
     * // Get one NigerianBank
     * const nigerianBank = await prisma.nigerianBank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NigerianBankFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NigerianBankFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NigerianBankClient<$Types.GetResult<NigerianBankPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first NigerianBank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NigerianBankFindFirstArgs} args - Arguments to find a NigerianBank
     * @example
     * // Get one NigerianBank
     * const nigerianBank = await prisma.nigerianBank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NigerianBankFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NigerianBankFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'NigerianBank'> extends True ? Prisma__NigerianBankClient<$Types.GetResult<NigerianBankPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__NigerianBankClient<$Types.GetResult<NigerianBankPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first NigerianBank that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NigerianBankFindFirstOrThrowArgs} args - Arguments to find a NigerianBank
     * @example
     * // Get one NigerianBank
     * const nigerianBank = await prisma.nigerianBank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NigerianBankFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NigerianBankFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NigerianBankClient<$Types.GetResult<NigerianBankPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more NigerianBanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NigerianBankFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NigerianBanks
     * const nigerianBanks = await prisma.nigerianBank.findMany()
     * 
     * // Get first 10 NigerianBanks
     * const nigerianBanks = await prisma.nigerianBank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nigerianBankWithIdOnly = await prisma.nigerianBank.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NigerianBankFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NigerianBankFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<NigerianBankPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a NigerianBank.
     * @param {NigerianBankCreateArgs} args - Arguments to create a NigerianBank.
     * @example
     * // Create one NigerianBank
     * const NigerianBank = await prisma.nigerianBank.create({
     *   data: {
     *     // ... data to create a NigerianBank
     *   }
     * })
     * 
    **/
    create<T extends NigerianBankCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NigerianBankCreateArgs<ExtArgs>>
    ): Prisma__NigerianBankClient<$Types.GetResult<NigerianBankPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many NigerianBanks.
     *     @param {NigerianBankCreateManyArgs} args - Arguments to create many NigerianBanks.
     *     @example
     *     // Create many NigerianBanks
     *     const nigerianBank = await prisma.nigerianBank.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NigerianBankCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NigerianBankCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NigerianBank.
     * @param {NigerianBankDeleteArgs} args - Arguments to delete one NigerianBank.
     * @example
     * // Delete one NigerianBank
     * const NigerianBank = await prisma.nigerianBank.delete({
     *   where: {
     *     // ... filter to delete one NigerianBank
     *   }
     * })
     * 
    **/
    delete<T extends NigerianBankDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NigerianBankDeleteArgs<ExtArgs>>
    ): Prisma__NigerianBankClient<$Types.GetResult<NigerianBankPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one NigerianBank.
     * @param {NigerianBankUpdateArgs} args - Arguments to update one NigerianBank.
     * @example
     * // Update one NigerianBank
     * const nigerianBank = await prisma.nigerianBank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NigerianBankUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NigerianBankUpdateArgs<ExtArgs>>
    ): Prisma__NigerianBankClient<$Types.GetResult<NigerianBankPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more NigerianBanks.
     * @param {NigerianBankDeleteManyArgs} args - Arguments to filter NigerianBanks to delete.
     * @example
     * // Delete a few NigerianBanks
     * const { count } = await prisma.nigerianBank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NigerianBankDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NigerianBankDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NigerianBanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NigerianBankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NigerianBanks
     * const nigerianBank = await prisma.nigerianBank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NigerianBankUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NigerianBankUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NigerianBank.
     * @param {NigerianBankUpsertArgs} args - Arguments to update or create a NigerianBank.
     * @example
     * // Update or create a NigerianBank
     * const nigerianBank = await prisma.nigerianBank.upsert({
     *   create: {
     *     // ... data to create a NigerianBank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NigerianBank we want to update
     *   }
     * })
    **/
    upsert<T extends NigerianBankUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NigerianBankUpsertArgs<ExtArgs>>
    ): Prisma__NigerianBankClient<$Types.GetResult<NigerianBankPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of NigerianBanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NigerianBankCountArgs} args - Arguments to filter NigerianBanks to count.
     * @example
     * // Count the number of NigerianBanks
     * const count = await prisma.nigerianBank.count({
     *   where: {
     *     // ... the filter for the NigerianBanks we want to count
     *   }
     * })
    **/
    count<T extends NigerianBankCountArgs>(
      args?: Subset<T, NigerianBankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NigerianBankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NigerianBank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NigerianBankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NigerianBankAggregateArgs>(args: Subset<T, NigerianBankAggregateArgs>): Prisma.PrismaPromise<GetNigerianBankAggregateType<T>>

    /**
     * Group by NigerianBank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NigerianBankGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NigerianBankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NigerianBankGroupByArgs['orderBy'] }
        : { orderBy?: NigerianBankGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NigerianBankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNigerianBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for NigerianBank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NigerianBankClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * NigerianBank base type for findUnique actions
   */
  export type NigerianBankFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NigerianBank
     */
    select?: NigerianBankSelect<ExtArgs> | null
    /**
     * Filter, which NigerianBank to fetch.
     */
    where: NigerianBankWhereUniqueInput
  }

  /**
   * NigerianBank findUnique
   */
  export interface NigerianBankFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends NigerianBankFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NigerianBank findUniqueOrThrow
   */
  export type NigerianBankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NigerianBank
     */
    select?: NigerianBankSelect<ExtArgs> | null
    /**
     * Filter, which NigerianBank to fetch.
     */
    where: NigerianBankWhereUniqueInput
  }


  /**
   * NigerianBank base type for findFirst actions
   */
  export type NigerianBankFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NigerianBank
     */
    select?: NigerianBankSelect<ExtArgs> | null
    /**
     * Filter, which NigerianBank to fetch.
     */
    where?: NigerianBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NigerianBanks to fetch.
     */
    orderBy?: Enumerable<NigerianBankOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NigerianBanks.
     */
    cursor?: NigerianBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NigerianBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NigerianBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NigerianBanks.
     */
    distinct?: Enumerable<NigerianBankScalarFieldEnum>
  }

  /**
   * NigerianBank findFirst
   */
  export interface NigerianBankFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends NigerianBankFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NigerianBank findFirstOrThrow
   */
  export type NigerianBankFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NigerianBank
     */
    select?: NigerianBankSelect<ExtArgs> | null
    /**
     * Filter, which NigerianBank to fetch.
     */
    where?: NigerianBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NigerianBanks to fetch.
     */
    orderBy?: Enumerable<NigerianBankOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NigerianBanks.
     */
    cursor?: NigerianBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NigerianBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NigerianBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NigerianBanks.
     */
    distinct?: Enumerable<NigerianBankScalarFieldEnum>
  }


  /**
   * NigerianBank findMany
   */
  export type NigerianBankFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NigerianBank
     */
    select?: NigerianBankSelect<ExtArgs> | null
    /**
     * Filter, which NigerianBanks to fetch.
     */
    where?: NigerianBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NigerianBanks to fetch.
     */
    orderBy?: Enumerable<NigerianBankOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NigerianBanks.
     */
    cursor?: NigerianBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NigerianBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NigerianBanks.
     */
    skip?: number
    distinct?: Enumerable<NigerianBankScalarFieldEnum>
  }


  /**
   * NigerianBank create
   */
  export type NigerianBankCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NigerianBank
     */
    select?: NigerianBankSelect<ExtArgs> | null
    /**
     * The data needed to create a NigerianBank.
     */
    data: XOR<NigerianBankCreateInput, NigerianBankUncheckedCreateInput>
  }


  /**
   * NigerianBank createMany
   */
  export type NigerianBankCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NigerianBanks.
     */
    data: Enumerable<NigerianBankCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * NigerianBank update
   */
  export type NigerianBankUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NigerianBank
     */
    select?: NigerianBankSelect<ExtArgs> | null
    /**
     * The data needed to update a NigerianBank.
     */
    data: XOR<NigerianBankUpdateInput, NigerianBankUncheckedUpdateInput>
    /**
     * Choose, which NigerianBank to update.
     */
    where: NigerianBankWhereUniqueInput
  }


  /**
   * NigerianBank updateMany
   */
  export type NigerianBankUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NigerianBanks.
     */
    data: XOR<NigerianBankUpdateManyMutationInput, NigerianBankUncheckedUpdateManyInput>
    /**
     * Filter which NigerianBanks to update
     */
    where?: NigerianBankWhereInput
  }


  /**
   * NigerianBank upsert
   */
  export type NigerianBankUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NigerianBank
     */
    select?: NigerianBankSelect<ExtArgs> | null
    /**
     * The filter to search for the NigerianBank to update in case it exists.
     */
    where: NigerianBankWhereUniqueInput
    /**
     * In case the NigerianBank found by the `where` argument doesn't exist, create a new NigerianBank with this data.
     */
    create: XOR<NigerianBankCreateInput, NigerianBankUncheckedCreateInput>
    /**
     * In case the NigerianBank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NigerianBankUpdateInput, NigerianBankUncheckedUpdateInput>
  }


  /**
   * NigerianBank delete
   */
  export type NigerianBankDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NigerianBank
     */
    select?: NigerianBankSelect<ExtArgs> | null
    /**
     * Filter which NigerianBank to delete.
     */
    where: NigerianBankWhereUniqueInput
  }


  /**
   * NigerianBank deleteMany
   */
  export type NigerianBankDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which NigerianBanks to delete
     */
    where?: NigerianBankWhereInput
  }


  /**
   * NigerianBank without action
   */
  export type NigerianBankArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NigerianBank
     */
    select?: NigerianBankSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DiligenceUserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    resetToken: 'resetToken',
    managerId: 'managerId',
    isDeprecated: 'isDeprecated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    diligenceEnterpriseId: 'diligenceEnterpriseId'
  };

  export type DiligenceUserScalarFieldEnum = (typeof DiligenceUserScalarFieldEnum)[keyof typeof DiligenceUserScalarFieldEnum]


  export const DiligenceRequestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    registrationNumber: 'registrationNumber',
    status: 'status',
    createdBy: 'createdBy',
    isDeprecated: 'isDeprecated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    diligenceEnterpriseId: 'diligenceEnterpriseId'
  };

  export type DiligenceRequestScalarFieldEnum = (typeof DiligenceRequestScalarFieldEnum)[keyof typeof DiligenceRequestScalarFieldEnum]


  export const DiligenceRequestDocumentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    description: 'description',
    link: 'link',
    isDeprecated: 'isDeprecated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    diligenceRequestId: 'diligenceRequestId'
  };

  export type DiligenceRequestDocumentScalarFieldEnum = (typeof DiligenceRequestDocumentScalarFieldEnum)[keyof typeof DiligenceRequestDocumentScalarFieldEnum]


  export const DiligenceEnterpriseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    adminEmail: 'adminEmail',
    color: 'color',
    logo: 'logo',
    backdrop: 'backdrop',
    isDeprecated: 'isDeprecated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DiligenceEnterpriseScalarFieldEnum = (typeof DiligenceEnterpriseScalarFieldEnum)[keyof typeof DiligenceEnterpriseScalarFieldEnum]


  export const DiligenceManagerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    managerEmail: 'managerEmail',
    isDeprecated: 'isDeprecated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    diligenceEnterpriseId: 'diligenceEnterpriseId'
  };

  export type DiligenceManagerScalarFieldEnum = (typeof DiligenceManagerScalarFieldEnum)[keyof typeof DiligenceManagerScalarFieldEnum]


  export const DiligenceStaffScalarFieldEnum: {
    id: 'id',
    email: 'email',
    isDeprecated: 'isDeprecated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    diligenceManagerId: 'diligenceManagerId'
  };

  export type DiligenceStaffScalarFieldEnum = (typeof DiligenceStaffScalarFieldEnum)[keyof typeof DiligenceStaffScalarFieldEnum]


  export const NigerianBankScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    slug: 'slug',
    logo: 'logo',
    isDeprecated: 'isDeprecated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NigerianBankScalarFieldEnum = (typeof NigerianBankScalarFieldEnum)[keyof typeof NigerianBankScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Deep Input Types
   */


  export type DiligenceUserWhereInput = {
    AND?: Enumerable<DiligenceUserWhereInput>
    OR?: Enumerable<DiligenceUserWhereInput>
    NOT?: Enumerable<DiligenceUserWhereInput>
    id?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    role?: StringFilter | string
    resetToken?: StringNullableFilter | string | null
    managerId?: StringNullableFilter | string | null
    isDeprecated?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    diligenceEnterpriseId?: StringFilter | string
    diligenceEnterprise?: XOR<DiligenceEnterpriseRelationFilter, DiligenceEnterpriseWhereInput>
  }

  export type DiligenceUserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
    diligenceEnterprise?: DiligenceEnterpriseOrderByWithRelationInput
  }

  export type DiligenceUserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type DiligenceUserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
    _count?: DiligenceUserCountOrderByAggregateInput
    _max?: DiligenceUserMaxOrderByAggregateInput
    _min?: DiligenceUserMinOrderByAggregateInput
  }

  export type DiligenceUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DiligenceUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<DiligenceUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DiligenceUserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    role?: StringWithAggregatesFilter | string
    resetToken?: StringNullableWithAggregatesFilter | string | null
    managerId?: StringNullableWithAggregatesFilter | string | null
    isDeprecated?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    diligenceEnterpriseId?: StringWithAggregatesFilter | string
  }

  export type DiligenceRequestWhereInput = {
    AND?: Enumerable<DiligenceRequestWhereInput>
    OR?: Enumerable<DiligenceRequestWhereInput>
    NOT?: Enumerable<DiligenceRequestWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    registrationNumber?: StringFilter | string
    status?: StringFilter | string
    createdBy?: StringFilter | string
    isDeprecated?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    diligenceEnterpriseId?: StringFilter | string
    diligenceRequestDocument?: DiligenceRequestDocumentListRelationFilter
    diligenceEnterprise?: XOR<DiligenceEnterpriseRelationFilter, DiligenceEnterpriseWhereInput>
  }

  export type DiligenceRequestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    registrationNumber?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
    diligenceRequestDocument?: DiligenceRequestDocumentOrderByRelationAggregateInput
    diligenceEnterprise?: DiligenceEnterpriseOrderByWithRelationInput
  }

  export type DiligenceRequestWhereUniqueInput = {
    id?: string
  }

  export type DiligenceRequestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    registrationNumber?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
    _count?: DiligenceRequestCountOrderByAggregateInput
    _max?: DiligenceRequestMaxOrderByAggregateInput
    _min?: DiligenceRequestMinOrderByAggregateInput
  }

  export type DiligenceRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DiligenceRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<DiligenceRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DiligenceRequestScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    registrationNumber?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    createdBy?: StringWithAggregatesFilter | string
    isDeprecated?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    diligenceEnterpriseId?: StringWithAggregatesFilter | string
  }

  export type DiligenceRequestDocumentWhereInput = {
    AND?: Enumerable<DiligenceRequestDocumentWhereInput>
    OR?: Enumerable<DiligenceRequestDocumentWhereInput>
    NOT?: Enumerable<DiligenceRequestDocumentWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    type?: StringFilter | string
    description?: StringFilter | string
    link?: StringFilter | string
    isDeprecated?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    diligenceRequestId?: StringFilter | string
    diligenceRequest?: XOR<DiligenceRequestRelationFilter, DiligenceRequestWhereInput>
  }

  export type DiligenceRequestDocumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    link?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceRequestId?: SortOrder
    diligenceRequest?: DiligenceRequestOrderByWithRelationInput
  }

  export type DiligenceRequestDocumentWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type DiligenceRequestDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    link?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceRequestId?: SortOrder
    _count?: DiligenceRequestDocumentCountOrderByAggregateInput
    _max?: DiligenceRequestDocumentMaxOrderByAggregateInput
    _min?: DiligenceRequestDocumentMinOrderByAggregateInput
  }

  export type DiligenceRequestDocumentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DiligenceRequestDocumentScalarWhereWithAggregatesInput>
    OR?: Enumerable<DiligenceRequestDocumentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DiligenceRequestDocumentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    link?: StringWithAggregatesFilter | string
    isDeprecated?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    diligenceRequestId?: StringWithAggregatesFilter | string
  }

  export type DiligenceEnterpriseWhereInput = {
    AND?: Enumerable<DiligenceEnterpriseWhereInput>
    OR?: Enumerable<DiligenceEnterpriseWhereInput>
    NOT?: Enumerable<DiligenceEnterpriseWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    address?: StringFilter | string
    adminEmail?: StringFilter | string
    color?: StringNullableFilter | string | null
    logo?: StringNullableFilter | string | null
    backdrop?: StringNullableFilter | string | null
    isDeprecated?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    diligenceManager?: DiligenceManagerListRelationFilter
    diligenceRequest?: DiligenceRequestListRelationFilter
    diligenceUser?: DiligenceUserListRelationFilter
  }

  export type DiligenceEnterpriseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    adminEmail?: SortOrder
    color?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    backdrop?: SortOrderInput | SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceManager?: DiligenceManagerOrderByRelationAggregateInput
    diligenceRequest?: DiligenceRequestOrderByRelationAggregateInput
    diligenceUser?: DiligenceUserOrderByRelationAggregateInput
  }

  export type DiligenceEnterpriseWhereUniqueInput = {
    id?: string
    name?: string
    adminEmail?: string
  }

  export type DiligenceEnterpriseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    adminEmail?: SortOrder
    color?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    backdrop?: SortOrderInput | SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DiligenceEnterpriseCountOrderByAggregateInput
    _max?: DiligenceEnterpriseMaxOrderByAggregateInput
    _min?: DiligenceEnterpriseMinOrderByAggregateInput
  }

  export type DiligenceEnterpriseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DiligenceEnterpriseScalarWhereWithAggregatesInput>
    OR?: Enumerable<DiligenceEnterpriseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DiligenceEnterpriseScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    adminEmail?: StringWithAggregatesFilter | string
    color?: StringNullableWithAggregatesFilter | string | null
    logo?: StringNullableWithAggregatesFilter | string | null
    backdrop?: StringNullableWithAggregatesFilter | string | null
    isDeprecated?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DiligenceManagerWhereInput = {
    AND?: Enumerable<DiligenceManagerWhereInput>
    OR?: Enumerable<DiligenceManagerWhereInput>
    NOT?: Enumerable<DiligenceManagerWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    location?: StringNullableFilter | string | null
    managerEmail?: StringFilter | string
    isDeprecated?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    diligenceEnterpriseId?: StringFilter | string
    diligenceStaff?: DiligenceStaffListRelationFilter
    diligenceEnterprise?: XOR<DiligenceEnterpriseRelationFilter, DiligenceEnterpriseWhereInput>
  }

  export type DiligenceManagerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    managerEmail?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
    diligenceStaff?: DiligenceStaffOrderByRelationAggregateInput
    diligenceEnterprise?: DiligenceEnterpriseOrderByWithRelationInput
  }

  export type DiligenceManagerWhereUniqueInput = {
    id?: string
    managerEmail?: string
  }

  export type DiligenceManagerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    managerEmail?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
    _count?: DiligenceManagerCountOrderByAggregateInput
    _max?: DiligenceManagerMaxOrderByAggregateInput
    _min?: DiligenceManagerMinOrderByAggregateInput
  }

  export type DiligenceManagerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DiligenceManagerScalarWhereWithAggregatesInput>
    OR?: Enumerable<DiligenceManagerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DiligenceManagerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    location?: StringNullableWithAggregatesFilter | string | null
    managerEmail?: StringWithAggregatesFilter | string
    isDeprecated?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    diligenceEnterpriseId?: StringWithAggregatesFilter | string
  }

  export type DiligenceStaffWhereInput = {
    AND?: Enumerable<DiligenceStaffWhereInput>
    OR?: Enumerable<DiligenceStaffWhereInput>
    NOT?: Enumerable<DiligenceStaffWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    isDeprecated?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    diligenceManagerId?: StringFilter | string
    diligenceManager?: XOR<DiligenceManagerRelationFilter, DiligenceManagerWhereInput>
  }

  export type DiligenceStaffOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceManagerId?: SortOrder
    diligenceManager?: DiligenceManagerOrderByWithRelationInput
  }

  export type DiligenceStaffWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type DiligenceStaffOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceManagerId?: SortOrder
    _count?: DiligenceStaffCountOrderByAggregateInput
    _max?: DiligenceStaffMaxOrderByAggregateInput
    _min?: DiligenceStaffMinOrderByAggregateInput
  }

  export type DiligenceStaffScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DiligenceStaffScalarWhereWithAggregatesInput>
    OR?: Enumerable<DiligenceStaffScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DiligenceStaffScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    isDeprecated?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    diligenceManagerId?: StringWithAggregatesFilter | string
  }

  export type NigerianBankWhereInput = {
    AND?: Enumerable<NigerianBankWhereInput>
    OR?: Enumerable<NigerianBankWhereInput>
    NOT?: Enumerable<NigerianBankWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    color?: StringNullableFilter | string | null
    slug?: StringFilter | string
    logo?: StringFilter | string
    isDeprecated?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type NigerianBankOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    slug?: SortOrder
    logo?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NigerianBankWhereUniqueInput = {
    id?: string
  }

  export type NigerianBankOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    slug?: SortOrder
    logo?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NigerianBankCountOrderByAggregateInput
    _max?: NigerianBankMaxOrderByAggregateInput
    _min?: NigerianBankMinOrderByAggregateInput
  }

  export type NigerianBankScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NigerianBankScalarWhereWithAggregatesInput>
    OR?: Enumerable<NigerianBankScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NigerianBankScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    color?: StringNullableWithAggregatesFilter | string | null
    slug?: StringWithAggregatesFilter | string
    logo?: StringWithAggregatesFilter | string
    isDeprecated?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DiligenceUserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: string
    resetToken?: string | null
    managerId?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceEnterprise: DiligenceEnterpriseCreateNestedOneWithoutDiligenceUserInput
  }

  export type DiligenceUserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: string
    resetToken?: string | null
    managerId?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceEnterpriseId: string
  }

  export type DiligenceUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceEnterprise?: DiligenceEnterpriseUpdateOneRequiredWithoutDiligenceUserNestedInput
  }

  export type DiligenceUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceEnterpriseId?: StringFieldUpdateOperationsInput | string
  }

  export type DiligenceUserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: string
    resetToken?: string | null
    managerId?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceEnterpriseId: string
  }

  export type DiligenceUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceEnterpriseId?: StringFieldUpdateOperationsInput | string
  }

  export type DiligenceRequestCreateInput = {
    id?: string
    name: string
    registrationNumber: string
    status: string
    createdBy: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceRequestDocument?: DiligenceRequestDocumentCreateNestedManyWithoutDiligenceRequestInput
    diligenceEnterprise: DiligenceEnterpriseCreateNestedOneWithoutDiligenceRequestInput
  }

  export type DiligenceRequestUncheckedCreateInput = {
    id?: string
    name: string
    registrationNumber: string
    status: string
    createdBy: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceEnterpriseId: string
    diligenceRequestDocument?: DiligenceRequestDocumentUncheckedCreateNestedManyWithoutDiligenceRequestInput
  }

  export type DiligenceRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceRequestDocument?: DiligenceRequestDocumentUpdateManyWithoutDiligenceRequestNestedInput
    diligenceEnterprise?: DiligenceEnterpriseUpdateOneRequiredWithoutDiligenceRequestNestedInput
  }

  export type DiligenceRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceEnterpriseId?: StringFieldUpdateOperationsInput | string
    diligenceRequestDocument?: DiligenceRequestDocumentUncheckedUpdateManyWithoutDiligenceRequestNestedInput
  }

  export type DiligenceRequestCreateManyInput = {
    id?: string
    name: string
    registrationNumber: string
    status: string
    createdBy: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceEnterpriseId: string
  }

  export type DiligenceRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceEnterpriseId?: StringFieldUpdateOperationsInput | string
  }

  export type DiligenceRequestDocumentCreateInput = {
    id?: string
    name: string
    type: string
    description: string
    link: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceRequest: DiligenceRequestCreateNestedOneWithoutDiligenceRequestDocumentInput
  }

  export type DiligenceRequestDocumentUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    description: string
    link: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceRequestId: string
  }

  export type DiligenceRequestDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceRequest?: DiligenceRequestUpdateOneRequiredWithoutDiligenceRequestDocumentNestedInput
  }

  export type DiligenceRequestDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type DiligenceRequestDocumentCreateManyInput = {
    id?: string
    name: string
    type: string
    description: string
    link: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceRequestId: string
  }

  export type DiligenceRequestDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceRequestDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type DiligenceEnterpriseCreateInput = {
    id?: string
    name: string
    address: string
    adminEmail: string
    color?: string | null
    logo?: string | null
    backdrop?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceManager?: DiligenceManagerCreateNestedManyWithoutDiligenceEnterpriseInput
    diligenceRequest?: DiligenceRequestCreateNestedManyWithoutDiligenceEnterpriseInput
    diligenceUser?: DiligenceUserCreateNestedManyWithoutDiligenceEnterpriseInput
  }

  export type DiligenceEnterpriseUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    adminEmail: string
    color?: string | null
    logo?: string | null
    backdrop?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceManager?: DiligenceManagerUncheckedCreateNestedManyWithoutDiligenceEnterpriseInput
    diligenceRequest?: DiligenceRequestUncheckedCreateNestedManyWithoutDiligenceEnterpriseInput
    diligenceUser?: DiligenceUserUncheckedCreateNestedManyWithoutDiligenceEnterpriseInput
  }

  export type DiligenceEnterpriseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceManager?: DiligenceManagerUpdateManyWithoutDiligenceEnterpriseNestedInput
    diligenceRequest?: DiligenceRequestUpdateManyWithoutDiligenceEnterpriseNestedInput
    diligenceUser?: DiligenceUserUpdateManyWithoutDiligenceEnterpriseNestedInput
  }

  export type DiligenceEnterpriseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceManager?: DiligenceManagerUncheckedUpdateManyWithoutDiligenceEnterpriseNestedInput
    diligenceRequest?: DiligenceRequestUncheckedUpdateManyWithoutDiligenceEnterpriseNestedInput
    diligenceUser?: DiligenceUserUncheckedUpdateManyWithoutDiligenceEnterpriseNestedInput
  }

  export type DiligenceEnterpriseCreateManyInput = {
    id?: string
    name: string
    address: string
    adminEmail: string
    color?: string | null
    logo?: string | null
    backdrop?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiligenceEnterpriseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceEnterpriseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceManagerCreateInput = {
    id?: string
    name?: string | null
    location?: string | null
    managerEmail: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceStaff?: DiligenceStaffCreateNestedManyWithoutDiligenceManagerInput
    diligenceEnterprise: DiligenceEnterpriseCreateNestedOneWithoutDiligenceManagerInput
  }

  export type DiligenceManagerUncheckedCreateInput = {
    id?: string
    name?: string | null
    location?: string | null
    managerEmail: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceEnterpriseId: string
    diligenceStaff?: DiligenceStaffUncheckedCreateNestedManyWithoutDiligenceManagerInput
  }

  export type DiligenceManagerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceStaff?: DiligenceStaffUpdateManyWithoutDiligenceManagerNestedInput
    diligenceEnterprise?: DiligenceEnterpriseUpdateOneRequiredWithoutDiligenceManagerNestedInput
  }

  export type DiligenceManagerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceEnterpriseId?: StringFieldUpdateOperationsInput | string
    diligenceStaff?: DiligenceStaffUncheckedUpdateManyWithoutDiligenceManagerNestedInput
  }

  export type DiligenceManagerCreateManyInput = {
    id?: string
    name?: string | null
    location?: string | null
    managerEmail: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceEnterpriseId: string
  }

  export type DiligenceManagerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceManagerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceEnterpriseId?: StringFieldUpdateOperationsInput | string
  }

  export type DiligenceStaffCreateInput = {
    id?: string
    email: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceManager: DiligenceManagerCreateNestedOneWithoutDiligenceStaffInput
  }

  export type DiligenceStaffUncheckedCreateInput = {
    id?: string
    email: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceManagerId: string
  }

  export type DiligenceStaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceManager?: DiligenceManagerUpdateOneRequiredWithoutDiligenceStaffNestedInput
  }

  export type DiligenceStaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceManagerId?: StringFieldUpdateOperationsInput | string
  }

  export type DiligenceStaffCreateManyInput = {
    id?: string
    email: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceManagerId: string
  }

  export type DiligenceStaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceStaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceManagerId?: StringFieldUpdateOperationsInput | string
  }

  export type NigerianBankCreateInput = {
    id?: string
    name: string
    color?: string | null
    slug: string
    logo: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NigerianBankUncheckedCreateInput = {
    id?: string
    name: string
    color?: string | null
    slug: string
    logo: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NigerianBankUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NigerianBankUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NigerianBankCreateManyInput = {
    id?: string
    name: string
    color?: string | null
    slug: string
    logo: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NigerianBankUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NigerianBankUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DiligenceEnterpriseRelationFilter = {
    is?: DiligenceEnterpriseWhereInput | null
    isNot?: DiligenceEnterpriseWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DiligenceUserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    resetToken?: SortOrder
    managerId?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
  }

  export type DiligenceUserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    resetToken?: SortOrder
    managerId?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
  }

  export type DiligenceUserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    resetToken?: SortOrder
    managerId?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DiligenceRequestDocumentListRelationFilter = {
    every?: DiligenceRequestDocumentWhereInput
    some?: DiligenceRequestDocumentWhereInput
    none?: DiligenceRequestDocumentWhereInput
  }

  export type DiligenceRequestDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiligenceRequestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    registrationNumber?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
  }

  export type DiligenceRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    registrationNumber?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
  }

  export type DiligenceRequestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    registrationNumber?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
  }

  export type DiligenceRequestRelationFilter = {
    is?: DiligenceRequestWhereInput | null
    isNot?: DiligenceRequestWhereInput | null
  }

  export type DiligenceRequestDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    link?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceRequestId?: SortOrder
  }

  export type DiligenceRequestDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    link?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceRequestId?: SortOrder
  }

  export type DiligenceRequestDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    link?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceRequestId?: SortOrder
  }

  export type DiligenceManagerListRelationFilter = {
    every?: DiligenceManagerWhereInput
    some?: DiligenceManagerWhereInput
    none?: DiligenceManagerWhereInput
  }

  export type DiligenceRequestListRelationFilter = {
    every?: DiligenceRequestWhereInput
    some?: DiligenceRequestWhereInput
    none?: DiligenceRequestWhereInput
  }

  export type DiligenceUserListRelationFilter = {
    every?: DiligenceUserWhereInput
    some?: DiligenceUserWhereInput
    none?: DiligenceUserWhereInput
  }

  export type DiligenceManagerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiligenceRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiligenceUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiligenceEnterpriseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    adminEmail?: SortOrder
    color?: SortOrder
    logo?: SortOrder
    backdrop?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiligenceEnterpriseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    adminEmail?: SortOrder
    color?: SortOrder
    logo?: SortOrder
    backdrop?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiligenceEnterpriseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    adminEmail?: SortOrder
    color?: SortOrder
    logo?: SortOrder
    backdrop?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiligenceStaffListRelationFilter = {
    every?: DiligenceStaffWhereInput
    some?: DiligenceStaffWhereInput
    none?: DiligenceStaffWhereInput
  }

  export type DiligenceStaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiligenceManagerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    managerEmail?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
  }

  export type DiligenceManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    managerEmail?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
  }

  export type DiligenceManagerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    managerEmail?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceEnterpriseId?: SortOrder
  }

  export type DiligenceManagerRelationFilter = {
    is?: DiligenceManagerWhereInput | null
    isNot?: DiligenceManagerWhereInput | null
  }

  export type DiligenceStaffCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceManagerId?: SortOrder
  }

  export type DiligenceStaffMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceManagerId?: SortOrder
  }

  export type DiligenceStaffMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diligenceManagerId?: SortOrder
  }

  export type NigerianBankCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    slug?: SortOrder
    logo?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NigerianBankMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    slug?: SortOrder
    logo?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NigerianBankMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    slug?: SortOrder
    logo?: SortOrder
    isDeprecated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiligenceEnterpriseCreateNestedOneWithoutDiligenceUserInput = {
    create?: XOR<DiligenceEnterpriseCreateWithoutDiligenceUserInput, DiligenceEnterpriseUncheckedCreateWithoutDiligenceUserInput>
    connectOrCreate?: DiligenceEnterpriseCreateOrConnectWithoutDiligenceUserInput
    connect?: DiligenceEnterpriseWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DiligenceEnterpriseUpdateOneRequiredWithoutDiligenceUserNestedInput = {
    create?: XOR<DiligenceEnterpriseCreateWithoutDiligenceUserInput, DiligenceEnterpriseUncheckedCreateWithoutDiligenceUserInput>
    connectOrCreate?: DiligenceEnterpriseCreateOrConnectWithoutDiligenceUserInput
    upsert?: DiligenceEnterpriseUpsertWithoutDiligenceUserInput
    connect?: DiligenceEnterpriseWhereUniqueInput
    update?: XOR<DiligenceEnterpriseUpdateWithoutDiligenceUserInput, DiligenceEnterpriseUncheckedUpdateWithoutDiligenceUserInput>
  }

  export type DiligenceRequestDocumentCreateNestedManyWithoutDiligenceRequestInput = {
    create?: XOR<Enumerable<DiligenceRequestDocumentCreateWithoutDiligenceRequestInput>, Enumerable<DiligenceRequestDocumentUncheckedCreateWithoutDiligenceRequestInput>>
    connectOrCreate?: Enumerable<DiligenceRequestDocumentCreateOrConnectWithoutDiligenceRequestInput>
    createMany?: DiligenceRequestDocumentCreateManyDiligenceRequestInputEnvelope
    connect?: Enumerable<DiligenceRequestDocumentWhereUniqueInput>
  }

  export type DiligenceEnterpriseCreateNestedOneWithoutDiligenceRequestInput = {
    create?: XOR<DiligenceEnterpriseCreateWithoutDiligenceRequestInput, DiligenceEnterpriseUncheckedCreateWithoutDiligenceRequestInput>
    connectOrCreate?: DiligenceEnterpriseCreateOrConnectWithoutDiligenceRequestInput
    connect?: DiligenceEnterpriseWhereUniqueInput
  }

  export type DiligenceRequestDocumentUncheckedCreateNestedManyWithoutDiligenceRequestInput = {
    create?: XOR<Enumerable<DiligenceRequestDocumentCreateWithoutDiligenceRequestInput>, Enumerable<DiligenceRequestDocumentUncheckedCreateWithoutDiligenceRequestInput>>
    connectOrCreate?: Enumerable<DiligenceRequestDocumentCreateOrConnectWithoutDiligenceRequestInput>
    createMany?: DiligenceRequestDocumentCreateManyDiligenceRequestInputEnvelope
    connect?: Enumerable<DiligenceRequestDocumentWhereUniqueInput>
  }

  export type DiligenceRequestDocumentUpdateManyWithoutDiligenceRequestNestedInput = {
    create?: XOR<Enumerable<DiligenceRequestDocumentCreateWithoutDiligenceRequestInput>, Enumerable<DiligenceRequestDocumentUncheckedCreateWithoutDiligenceRequestInput>>
    connectOrCreate?: Enumerable<DiligenceRequestDocumentCreateOrConnectWithoutDiligenceRequestInput>
    upsert?: Enumerable<DiligenceRequestDocumentUpsertWithWhereUniqueWithoutDiligenceRequestInput>
    createMany?: DiligenceRequestDocumentCreateManyDiligenceRequestInputEnvelope
    set?: Enumerable<DiligenceRequestDocumentWhereUniqueInput>
    disconnect?: Enumerable<DiligenceRequestDocumentWhereUniqueInput>
    delete?: Enumerable<DiligenceRequestDocumentWhereUniqueInput>
    connect?: Enumerable<DiligenceRequestDocumentWhereUniqueInput>
    update?: Enumerable<DiligenceRequestDocumentUpdateWithWhereUniqueWithoutDiligenceRequestInput>
    updateMany?: Enumerable<DiligenceRequestDocumentUpdateManyWithWhereWithoutDiligenceRequestInput>
    deleteMany?: Enumerable<DiligenceRequestDocumentScalarWhereInput>
  }

  export type DiligenceEnterpriseUpdateOneRequiredWithoutDiligenceRequestNestedInput = {
    create?: XOR<DiligenceEnterpriseCreateWithoutDiligenceRequestInput, DiligenceEnterpriseUncheckedCreateWithoutDiligenceRequestInput>
    connectOrCreate?: DiligenceEnterpriseCreateOrConnectWithoutDiligenceRequestInput
    upsert?: DiligenceEnterpriseUpsertWithoutDiligenceRequestInput
    connect?: DiligenceEnterpriseWhereUniqueInput
    update?: XOR<DiligenceEnterpriseUpdateWithoutDiligenceRequestInput, DiligenceEnterpriseUncheckedUpdateWithoutDiligenceRequestInput>
  }

  export type DiligenceRequestDocumentUncheckedUpdateManyWithoutDiligenceRequestNestedInput = {
    create?: XOR<Enumerable<DiligenceRequestDocumentCreateWithoutDiligenceRequestInput>, Enumerable<DiligenceRequestDocumentUncheckedCreateWithoutDiligenceRequestInput>>
    connectOrCreate?: Enumerable<DiligenceRequestDocumentCreateOrConnectWithoutDiligenceRequestInput>
    upsert?: Enumerable<DiligenceRequestDocumentUpsertWithWhereUniqueWithoutDiligenceRequestInput>
    createMany?: DiligenceRequestDocumentCreateManyDiligenceRequestInputEnvelope
    set?: Enumerable<DiligenceRequestDocumentWhereUniqueInput>
    disconnect?: Enumerable<DiligenceRequestDocumentWhereUniqueInput>
    delete?: Enumerable<DiligenceRequestDocumentWhereUniqueInput>
    connect?: Enumerable<DiligenceRequestDocumentWhereUniqueInput>
    update?: Enumerable<DiligenceRequestDocumentUpdateWithWhereUniqueWithoutDiligenceRequestInput>
    updateMany?: Enumerable<DiligenceRequestDocumentUpdateManyWithWhereWithoutDiligenceRequestInput>
    deleteMany?: Enumerable<DiligenceRequestDocumentScalarWhereInput>
  }

  export type DiligenceRequestCreateNestedOneWithoutDiligenceRequestDocumentInput = {
    create?: XOR<DiligenceRequestCreateWithoutDiligenceRequestDocumentInput, DiligenceRequestUncheckedCreateWithoutDiligenceRequestDocumentInput>
    connectOrCreate?: DiligenceRequestCreateOrConnectWithoutDiligenceRequestDocumentInput
    connect?: DiligenceRequestWhereUniqueInput
  }

  export type DiligenceRequestUpdateOneRequiredWithoutDiligenceRequestDocumentNestedInput = {
    create?: XOR<DiligenceRequestCreateWithoutDiligenceRequestDocumentInput, DiligenceRequestUncheckedCreateWithoutDiligenceRequestDocumentInput>
    connectOrCreate?: DiligenceRequestCreateOrConnectWithoutDiligenceRequestDocumentInput
    upsert?: DiligenceRequestUpsertWithoutDiligenceRequestDocumentInput
    connect?: DiligenceRequestWhereUniqueInput
    update?: XOR<DiligenceRequestUpdateWithoutDiligenceRequestDocumentInput, DiligenceRequestUncheckedUpdateWithoutDiligenceRequestDocumentInput>
  }

  export type DiligenceManagerCreateNestedManyWithoutDiligenceEnterpriseInput = {
    create?: XOR<Enumerable<DiligenceManagerCreateWithoutDiligenceEnterpriseInput>, Enumerable<DiligenceManagerUncheckedCreateWithoutDiligenceEnterpriseInput>>
    connectOrCreate?: Enumerable<DiligenceManagerCreateOrConnectWithoutDiligenceEnterpriseInput>
    createMany?: DiligenceManagerCreateManyDiligenceEnterpriseInputEnvelope
    connect?: Enumerable<DiligenceManagerWhereUniqueInput>
  }

  export type DiligenceRequestCreateNestedManyWithoutDiligenceEnterpriseInput = {
    create?: XOR<Enumerable<DiligenceRequestCreateWithoutDiligenceEnterpriseInput>, Enumerable<DiligenceRequestUncheckedCreateWithoutDiligenceEnterpriseInput>>
    connectOrCreate?: Enumerable<DiligenceRequestCreateOrConnectWithoutDiligenceEnterpriseInput>
    createMany?: DiligenceRequestCreateManyDiligenceEnterpriseInputEnvelope
    connect?: Enumerable<DiligenceRequestWhereUniqueInput>
  }

  export type DiligenceUserCreateNestedManyWithoutDiligenceEnterpriseInput = {
    create?: XOR<Enumerable<DiligenceUserCreateWithoutDiligenceEnterpriseInput>, Enumerable<DiligenceUserUncheckedCreateWithoutDiligenceEnterpriseInput>>
    connectOrCreate?: Enumerable<DiligenceUserCreateOrConnectWithoutDiligenceEnterpriseInput>
    createMany?: DiligenceUserCreateManyDiligenceEnterpriseInputEnvelope
    connect?: Enumerable<DiligenceUserWhereUniqueInput>
  }

  export type DiligenceManagerUncheckedCreateNestedManyWithoutDiligenceEnterpriseInput = {
    create?: XOR<Enumerable<DiligenceManagerCreateWithoutDiligenceEnterpriseInput>, Enumerable<DiligenceManagerUncheckedCreateWithoutDiligenceEnterpriseInput>>
    connectOrCreate?: Enumerable<DiligenceManagerCreateOrConnectWithoutDiligenceEnterpriseInput>
    createMany?: DiligenceManagerCreateManyDiligenceEnterpriseInputEnvelope
    connect?: Enumerable<DiligenceManagerWhereUniqueInput>
  }

  export type DiligenceRequestUncheckedCreateNestedManyWithoutDiligenceEnterpriseInput = {
    create?: XOR<Enumerable<DiligenceRequestCreateWithoutDiligenceEnterpriseInput>, Enumerable<DiligenceRequestUncheckedCreateWithoutDiligenceEnterpriseInput>>
    connectOrCreate?: Enumerable<DiligenceRequestCreateOrConnectWithoutDiligenceEnterpriseInput>
    createMany?: DiligenceRequestCreateManyDiligenceEnterpriseInputEnvelope
    connect?: Enumerable<DiligenceRequestWhereUniqueInput>
  }

  export type DiligenceUserUncheckedCreateNestedManyWithoutDiligenceEnterpriseInput = {
    create?: XOR<Enumerable<DiligenceUserCreateWithoutDiligenceEnterpriseInput>, Enumerable<DiligenceUserUncheckedCreateWithoutDiligenceEnterpriseInput>>
    connectOrCreate?: Enumerable<DiligenceUserCreateOrConnectWithoutDiligenceEnterpriseInput>
    createMany?: DiligenceUserCreateManyDiligenceEnterpriseInputEnvelope
    connect?: Enumerable<DiligenceUserWhereUniqueInput>
  }

  export type DiligenceManagerUpdateManyWithoutDiligenceEnterpriseNestedInput = {
    create?: XOR<Enumerable<DiligenceManagerCreateWithoutDiligenceEnterpriseInput>, Enumerable<DiligenceManagerUncheckedCreateWithoutDiligenceEnterpriseInput>>
    connectOrCreate?: Enumerable<DiligenceManagerCreateOrConnectWithoutDiligenceEnterpriseInput>
    upsert?: Enumerable<DiligenceManagerUpsertWithWhereUniqueWithoutDiligenceEnterpriseInput>
    createMany?: DiligenceManagerCreateManyDiligenceEnterpriseInputEnvelope
    set?: Enumerable<DiligenceManagerWhereUniqueInput>
    disconnect?: Enumerable<DiligenceManagerWhereUniqueInput>
    delete?: Enumerable<DiligenceManagerWhereUniqueInput>
    connect?: Enumerable<DiligenceManagerWhereUniqueInput>
    update?: Enumerable<DiligenceManagerUpdateWithWhereUniqueWithoutDiligenceEnterpriseInput>
    updateMany?: Enumerable<DiligenceManagerUpdateManyWithWhereWithoutDiligenceEnterpriseInput>
    deleteMany?: Enumerable<DiligenceManagerScalarWhereInput>
  }

  export type DiligenceRequestUpdateManyWithoutDiligenceEnterpriseNestedInput = {
    create?: XOR<Enumerable<DiligenceRequestCreateWithoutDiligenceEnterpriseInput>, Enumerable<DiligenceRequestUncheckedCreateWithoutDiligenceEnterpriseInput>>
    connectOrCreate?: Enumerable<DiligenceRequestCreateOrConnectWithoutDiligenceEnterpriseInput>
    upsert?: Enumerable<DiligenceRequestUpsertWithWhereUniqueWithoutDiligenceEnterpriseInput>
    createMany?: DiligenceRequestCreateManyDiligenceEnterpriseInputEnvelope
    set?: Enumerable<DiligenceRequestWhereUniqueInput>
    disconnect?: Enumerable<DiligenceRequestWhereUniqueInput>
    delete?: Enumerable<DiligenceRequestWhereUniqueInput>
    connect?: Enumerable<DiligenceRequestWhereUniqueInput>
    update?: Enumerable<DiligenceRequestUpdateWithWhereUniqueWithoutDiligenceEnterpriseInput>
    updateMany?: Enumerable<DiligenceRequestUpdateManyWithWhereWithoutDiligenceEnterpriseInput>
    deleteMany?: Enumerable<DiligenceRequestScalarWhereInput>
  }

  export type DiligenceUserUpdateManyWithoutDiligenceEnterpriseNestedInput = {
    create?: XOR<Enumerable<DiligenceUserCreateWithoutDiligenceEnterpriseInput>, Enumerable<DiligenceUserUncheckedCreateWithoutDiligenceEnterpriseInput>>
    connectOrCreate?: Enumerable<DiligenceUserCreateOrConnectWithoutDiligenceEnterpriseInput>
    upsert?: Enumerable<DiligenceUserUpsertWithWhereUniqueWithoutDiligenceEnterpriseInput>
    createMany?: DiligenceUserCreateManyDiligenceEnterpriseInputEnvelope
    set?: Enumerable<DiligenceUserWhereUniqueInput>
    disconnect?: Enumerable<DiligenceUserWhereUniqueInput>
    delete?: Enumerable<DiligenceUserWhereUniqueInput>
    connect?: Enumerable<DiligenceUserWhereUniqueInput>
    update?: Enumerable<DiligenceUserUpdateWithWhereUniqueWithoutDiligenceEnterpriseInput>
    updateMany?: Enumerable<DiligenceUserUpdateManyWithWhereWithoutDiligenceEnterpriseInput>
    deleteMany?: Enumerable<DiligenceUserScalarWhereInput>
  }

  export type DiligenceManagerUncheckedUpdateManyWithoutDiligenceEnterpriseNestedInput = {
    create?: XOR<Enumerable<DiligenceManagerCreateWithoutDiligenceEnterpriseInput>, Enumerable<DiligenceManagerUncheckedCreateWithoutDiligenceEnterpriseInput>>
    connectOrCreate?: Enumerable<DiligenceManagerCreateOrConnectWithoutDiligenceEnterpriseInput>
    upsert?: Enumerable<DiligenceManagerUpsertWithWhereUniqueWithoutDiligenceEnterpriseInput>
    createMany?: DiligenceManagerCreateManyDiligenceEnterpriseInputEnvelope
    set?: Enumerable<DiligenceManagerWhereUniqueInput>
    disconnect?: Enumerable<DiligenceManagerWhereUniqueInput>
    delete?: Enumerable<DiligenceManagerWhereUniqueInput>
    connect?: Enumerable<DiligenceManagerWhereUniqueInput>
    update?: Enumerable<DiligenceManagerUpdateWithWhereUniqueWithoutDiligenceEnterpriseInput>
    updateMany?: Enumerable<DiligenceManagerUpdateManyWithWhereWithoutDiligenceEnterpriseInput>
    deleteMany?: Enumerable<DiligenceManagerScalarWhereInput>
  }

  export type DiligenceRequestUncheckedUpdateManyWithoutDiligenceEnterpriseNestedInput = {
    create?: XOR<Enumerable<DiligenceRequestCreateWithoutDiligenceEnterpriseInput>, Enumerable<DiligenceRequestUncheckedCreateWithoutDiligenceEnterpriseInput>>
    connectOrCreate?: Enumerable<DiligenceRequestCreateOrConnectWithoutDiligenceEnterpriseInput>
    upsert?: Enumerable<DiligenceRequestUpsertWithWhereUniqueWithoutDiligenceEnterpriseInput>
    createMany?: DiligenceRequestCreateManyDiligenceEnterpriseInputEnvelope
    set?: Enumerable<DiligenceRequestWhereUniqueInput>
    disconnect?: Enumerable<DiligenceRequestWhereUniqueInput>
    delete?: Enumerable<DiligenceRequestWhereUniqueInput>
    connect?: Enumerable<DiligenceRequestWhereUniqueInput>
    update?: Enumerable<DiligenceRequestUpdateWithWhereUniqueWithoutDiligenceEnterpriseInput>
    updateMany?: Enumerable<DiligenceRequestUpdateManyWithWhereWithoutDiligenceEnterpriseInput>
    deleteMany?: Enumerable<DiligenceRequestScalarWhereInput>
  }

  export type DiligenceUserUncheckedUpdateManyWithoutDiligenceEnterpriseNestedInput = {
    create?: XOR<Enumerable<DiligenceUserCreateWithoutDiligenceEnterpriseInput>, Enumerable<DiligenceUserUncheckedCreateWithoutDiligenceEnterpriseInput>>
    connectOrCreate?: Enumerable<DiligenceUserCreateOrConnectWithoutDiligenceEnterpriseInput>
    upsert?: Enumerable<DiligenceUserUpsertWithWhereUniqueWithoutDiligenceEnterpriseInput>
    createMany?: DiligenceUserCreateManyDiligenceEnterpriseInputEnvelope
    set?: Enumerable<DiligenceUserWhereUniqueInput>
    disconnect?: Enumerable<DiligenceUserWhereUniqueInput>
    delete?: Enumerable<DiligenceUserWhereUniqueInput>
    connect?: Enumerable<DiligenceUserWhereUniqueInput>
    update?: Enumerable<DiligenceUserUpdateWithWhereUniqueWithoutDiligenceEnterpriseInput>
    updateMany?: Enumerable<DiligenceUserUpdateManyWithWhereWithoutDiligenceEnterpriseInput>
    deleteMany?: Enumerable<DiligenceUserScalarWhereInput>
  }

  export type DiligenceStaffCreateNestedManyWithoutDiligenceManagerInput = {
    create?: XOR<Enumerable<DiligenceStaffCreateWithoutDiligenceManagerInput>, Enumerable<DiligenceStaffUncheckedCreateWithoutDiligenceManagerInput>>
    connectOrCreate?: Enumerable<DiligenceStaffCreateOrConnectWithoutDiligenceManagerInput>
    createMany?: DiligenceStaffCreateManyDiligenceManagerInputEnvelope
    connect?: Enumerable<DiligenceStaffWhereUniqueInput>
  }

  export type DiligenceEnterpriseCreateNestedOneWithoutDiligenceManagerInput = {
    create?: XOR<DiligenceEnterpriseCreateWithoutDiligenceManagerInput, DiligenceEnterpriseUncheckedCreateWithoutDiligenceManagerInput>
    connectOrCreate?: DiligenceEnterpriseCreateOrConnectWithoutDiligenceManagerInput
    connect?: DiligenceEnterpriseWhereUniqueInput
  }

  export type DiligenceStaffUncheckedCreateNestedManyWithoutDiligenceManagerInput = {
    create?: XOR<Enumerable<DiligenceStaffCreateWithoutDiligenceManagerInput>, Enumerable<DiligenceStaffUncheckedCreateWithoutDiligenceManagerInput>>
    connectOrCreate?: Enumerable<DiligenceStaffCreateOrConnectWithoutDiligenceManagerInput>
    createMany?: DiligenceStaffCreateManyDiligenceManagerInputEnvelope
    connect?: Enumerable<DiligenceStaffWhereUniqueInput>
  }

  export type DiligenceStaffUpdateManyWithoutDiligenceManagerNestedInput = {
    create?: XOR<Enumerable<DiligenceStaffCreateWithoutDiligenceManagerInput>, Enumerable<DiligenceStaffUncheckedCreateWithoutDiligenceManagerInput>>
    connectOrCreate?: Enumerable<DiligenceStaffCreateOrConnectWithoutDiligenceManagerInput>
    upsert?: Enumerable<DiligenceStaffUpsertWithWhereUniqueWithoutDiligenceManagerInput>
    createMany?: DiligenceStaffCreateManyDiligenceManagerInputEnvelope
    set?: Enumerable<DiligenceStaffWhereUniqueInput>
    disconnect?: Enumerable<DiligenceStaffWhereUniqueInput>
    delete?: Enumerable<DiligenceStaffWhereUniqueInput>
    connect?: Enumerable<DiligenceStaffWhereUniqueInput>
    update?: Enumerable<DiligenceStaffUpdateWithWhereUniqueWithoutDiligenceManagerInput>
    updateMany?: Enumerable<DiligenceStaffUpdateManyWithWhereWithoutDiligenceManagerInput>
    deleteMany?: Enumerable<DiligenceStaffScalarWhereInput>
  }

  export type DiligenceEnterpriseUpdateOneRequiredWithoutDiligenceManagerNestedInput = {
    create?: XOR<DiligenceEnterpriseCreateWithoutDiligenceManagerInput, DiligenceEnterpriseUncheckedCreateWithoutDiligenceManagerInput>
    connectOrCreate?: DiligenceEnterpriseCreateOrConnectWithoutDiligenceManagerInput
    upsert?: DiligenceEnterpriseUpsertWithoutDiligenceManagerInput
    connect?: DiligenceEnterpriseWhereUniqueInput
    update?: XOR<DiligenceEnterpriseUpdateWithoutDiligenceManagerInput, DiligenceEnterpriseUncheckedUpdateWithoutDiligenceManagerInput>
  }

  export type DiligenceStaffUncheckedUpdateManyWithoutDiligenceManagerNestedInput = {
    create?: XOR<Enumerable<DiligenceStaffCreateWithoutDiligenceManagerInput>, Enumerable<DiligenceStaffUncheckedCreateWithoutDiligenceManagerInput>>
    connectOrCreate?: Enumerable<DiligenceStaffCreateOrConnectWithoutDiligenceManagerInput>
    upsert?: Enumerable<DiligenceStaffUpsertWithWhereUniqueWithoutDiligenceManagerInput>
    createMany?: DiligenceStaffCreateManyDiligenceManagerInputEnvelope
    set?: Enumerable<DiligenceStaffWhereUniqueInput>
    disconnect?: Enumerable<DiligenceStaffWhereUniqueInput>
    delete?: Enumerable<DiligenceStaffWhereUniqueInput>
    connect?: Enumerable<DiligenceStaffWhereUniqueInput>
    update?: Enumerable<DiligenceStaffUpdateWithWhereUniqueWithoutDiligenceManagerInput>
    updateMany?: Enumerable<DiligenceStaffUpdateManyWithWhereWithoutDiligenceManagerInput>
    deleteMany?: Enumerable<DiligenceStaffScalarWhereInput>
  }

  export type DiligenceManagerCreateNestedOneWithoutDiligenceStaffInput = {
    create?: XOR<DiligenceManagerCreateWithoutDiligenceStaffInput, DiligenceManagerUncheckedCreateWithoutDiligenceStaffInput>
    connectOrCreate?: DiligenceManagerCreateOrConnectWithoutDiligenceStaffInput
    connect?: DiligenceManagerWhereUniqueInput
  }

  export type DiligenceManagerUpdateOneRequiredWithoutDiligenceStaffNestedInput = {
    create?: XOR<DiligenceManagerCreateWithoutDiligenceStaffInput, DiligenceManagerUncheckedCreateWithoutDiligenceStaffInput>
    connectOrCreate?: DiligenceManagerCreateOrConnectWithoutDiligenceStaffInput
    upsert?: DiligenceManagerUpsertWithoutDiligenceStaffInput
    connect?: DiligenceManagerWhereUniqueInput
    update?: XOR<DiligenceManagerUpdateWithoutDiligenceStaffInput, DiligenceManagerUncheckedUpdateWithoutDiligenceStaffInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DiligenceEnterpriseCreateWithoutDiligenceUserInput = {
    id?: string
    name: string
    address: string
    adminEmail: string
    color?: string | null
    logo?: string | null
    backdrop?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceManager?: DiligenceManagerCreateNestedManyWithoutDiligenceEnterpriseInput
    diligenceRequest?: DiligenceRequestCreateNestedManyWithoutDiligenceEnterpriseInput
  }

  export type DiligenceEnterpriseUncheckedCreateWithoutDiligenceUserInput = {
    id?: string
    name: string
    address: string
    adminEmail: string
    color?: string | null
    logo?: string | null
    backdrop?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceManager?: DiligenceManagerUncheckedCreateNestedManyWithoutDiligenceEnterpriseInput
    diligenceRequest?: DiligenceRequestUncheckedCreateNestedManyWithoutDiligenceEnterpriseInput
  }

  export type DiligenceEnterpriseCreateOrConnectWithoutDiligenceUserInput = {
    where: DiligenceEnterpriseWhereUniqueInput
    create: XOR<DiligenceEnterpriseCreateWithoutDiligenceUserInput, DiligenceEnterpriseUncheckedCreateWithoutDiligenceUserInput>
  }

  export type DiligenceEnterpriseUpsertWithoutDiligenceUserInput = {
    update: XOR<DiligenceEnterpriseUpdateWithoutDiligenceUserInput, DiligenceEnterpriseUncheckedUpdateWithoutDiligenceUserInput>
    create: XOR<DiligenceEnterpriseCreateWithoutDiligenceUserInput, DiligenceEnterpriseUncheckedCreateWithoutDiligenceUserInput>
  }

  export type DiligenceEnterpriseUpdateWithoutDiligenceUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceManager?: DiligenceManagerUpdateManyWithoutDiligenceEnterpriseNestedInput
    diligenceRequest?: DiligenceRequestUpdateManyWithoutDiligenceEnterpriseNestedInput
  }

  export type DiligenceEnterpriseUncheckedUpdateWithoutDiligenceUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceManager?: DiligenceManagerUncheckedUpdateManyWithoutDiligenceEnterpriseNestedInput
    diligenceRequest?: DiligenceRequestUncheckedUpdateManyWithoutDiligenceEnterpriseNestedInput
  }

  export type DiligenceRequestDocumentCreateWithoutDiligenceRequestInput = {
    id?: string
    name: string
    type: string
    description: string
    link: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiligenceRequestDocumentUncheckedCreateWithoutDiligenceRequestInput = {
    id?: string
    name: string
    type: string
    description: string
    link: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiligenceRequestDocumentCreateOrConnectWithoutDiligenceRequestInput = {
    where: DiligenceRequestDocumentWhereUniqueInput
    create: XOR<DiligenceRequestDocumentCreateWithoutDiligenceRequestInput, DiligenceRequestDocumentUncheckedCreateWithoutDiligenceRequestInput>
  }

  export type DiligenceRequestDocumentCreateManyDiligenceRequestInputEnvelope = {
    data: Enumerable<DiligenceRequestDocumentCreateManyDiligenceRequestInput>
    skipDuplicates?: boolean
  }

  export type DiligenceEnterpriseCreateWithoutDiligenceRequestInput = {
    id?: string
    name: string
    address: string
    adminEmail: string
    color?: string | null
    logo?: string | null
    backdrop?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceManager?: DiligenceManagerCreateNestedManyWithoutDiligenceEnterpriseInput
    diligenceUser?: DiligenceUserCreateNestedManyWithoutDiligenceEnterpriseInput
  }

  export type DiligenceEnterpriseUncheckedCreateWithoutDiligenceRequestInput = {
    id?: string
    name: string
    address: string
    adminEmail: string
    color?: string | null
    logo?: string | null
    backdrop?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceManager?: DiligenceManagerUncheckedCreateNestedManyWithoutDiligenceEnterpriseInput
    diligenceUser?: DiligenceUserUncheckedCreateNestedManyWithoutDiligenceEnterpriseInput
  }

  export type DiligenceEnterpriseCreateOrConnectWithoutDiligenceRequestInput = {
    where: DiligenceEnterpriseWhereUniqueInput
    create: XOR<DiligenceEnterpriseCreateWithoutDiligenceRequestInput, DiligenceEnterpriseUncheckedCreateWithoutDiligenceRequestInput>
  }

  export type DiligenceRequestDocumentUpsertWithWhereUniqueWithoutDiligenceRequestInput = {
    where: DiligenceRequestDocumentWhereUniqueInput
    update: XOR<DiligenceRequestDocumentUpdateWithoutDiligenceRequestInput, DiligenceRequestDocumentUncheckedUpdateWithoutDiligenceRequestInput>
    create: XOR<DiligenceRequestDocumentCreateWithoutDiligenceRequestInput, DiligenceRequestDocumentUncheckedCreateWithoutDiligenceRequestInput>
  }

  export type DiligenceRequestDocumentUpdateWithWhereUniqueWithoutDiligenceRequestInput = {
    where: DiligenceRequestDocumentWhereUniqueInput
    data: XOR<DiligenceRequestDocumentUpdateWithoutDiligenceRequestInput, DiligenceRequestDocumentUncheckedUpdateWithoutDiligenceRequestInput>
  }

  export type DiligenceRequestDocumentUpdateManyWithWhereWithoutDiligenceRequestInput = {
    where: DiligenceRequestDocumentScalarWhereInput
    data: XOR<DiligenceRequestDocumentUpdateManyMutationInput, DiligenceRequestDocumentUncheckedUpdateManyWithoutDiligenceRequestDocumentInput>
  }

  export type DiligenceRequestDocumentScalarWhereInput = {
    AND?: Enumerable<DiligenceRequestDocumentScalarWhereInput>
    OR?: Enumerable<DiligenceRequestDocumentScalarWhereInput>
    NOT?: Enumerable<DiligenceRequestDocumentScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    type?: StringFilter | string
    description?: StringFilter | string
    link?: StringFilter | string
    isDeprecated?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    diligenceRequestId?: StringFilter | string
  }

  export type DiligenceEnterpriseUpsertWithoutDiligenceRequestInput = {
    update: XOR<DiligenceEnterpriseUpdateWithoutDiligenceRequestInput, DiligenceEnterpriseUncheckedUpdateWithoutDiligenceRequestInput>
    create: XOR<DiligenceEnterpriseCreateWithoutDiligenceRequestInput, DiligenceEnterpriseUncheckedCreateWithoutDiligenceRequestInput>
  }

  export type DiligenceEnterpriseUpdateWithoutDiligenceRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceManager?: DiligenceManagerUpdateManyWithoutDiligenceEnterpriseNestedInput
    diligenceUser?: DiligenceUserUpdateManyWithoutDiligenceEnterpriseNestedInput
  }

  export type DiligenceEnterpriseUncheckedUpdateWithoutDiligenceRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceManager?: DiligenceManagerUncheckedUpdateManyWithoutDiligenceEnterpriseNestedInput
    diligenceUser?: DiligenceUserUncheckedUpdateManyWithoutDiligenceEnterpriseNestedInput
  }

  export type DiligenceRequestCreateWithoutDiligenceRequestDocumentInput = {
    id?: string
    name: string
    registrationNumber: string
    status: string
    createdBy: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceEnterprise: DiligenceEnterpriseCreateNestedOneWithoutDiligenceRequestInput
  }

  export type DiligenceRequestUncheckedCreateWithoutDiligenceRequestDocumentInput = {
    id?: string
    name: string
    registrationNumber: string
    status: string
    createdBy: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceEnterpriseId: string
  }

  export type DiligenceRequestCreateOrConnectWithoutDiligenceRequestDocumentInput = {
    where: DiligenceRequestWhereUniqueInput
    create: XOR<DiligenceRequestCreateWithoutDiligenceRequestDocumentInput, DiligenceRequestUncheckedCreateWithoutDiligenceRequestDocumentInput>
  }

  export type DiligenceRequestUpsertWithoutDiligenceRequestDocumentInput = {
    update: XOR<DiligenceRequestUpdateWithoutDiligenceRequestDocumentInput, DiligenceRequestUncheckedUpdateWithoutDiligenceRequestDocumentInput>
    create: XOR<DiligenceRequestCreateWithoutDiligenceRequestDocumentInput, DiligenceRequestUncheckedCreateWithoutDiligenceRequestDocumentInput>
  }

  export type DiligenceRequestUpdateWithoutDiligenceRequestDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceEnterprise?: DiligenceEnterpriseUpdateOneRequiredWithoutDiligenceRequestNestedInput
  }

  export type DiligenceRequestUncheckedUpdateWithoutDiligenceRequestDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceEnterpriseId?: StringFieldUpdateOperationsInput | string
  }

  export type DiligenceManagerCreateWithoutDiligenceEnterpriseInput = {
    id?: string
    name?: string | null
    location?: string | null
    managerEmail: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceStaff?: DiligenceStaffCreateNestedManyWithoutDiligenceManagerInput
  }

  export type DiligenceManagerUncheckedCreateWithoutDiligenceEnterpriseInput = {
    id?: string
    name?: string | null
    location?: string | null
    managerEmail: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceStaff?: DiligenceStaffUncheckedCreateNestedManyWithoutDiligenceManagerInput
  }

  export type DiligenceManagerCreateOrConnectWithoutDiligenceEnterpriseInput = {
    where: DiligenceManagerWhereUniqueInput
    create: XOR<DiligenceManagerCreateWithoutDiligenceEnterpriseInput, DiligenceManagerUncheckedCreateWithoutDiligenceEnterpriseInput>
  }

  export type DiligenceManagerCreateManyDiligenceEnterpriseInputEnvelope = {
    data: Enumerable<DiligenceManagerCreateManyDiligenceEnterpriseInput>
    skipDuplicates?: boolean
  }

  export type DiligenceRequestCreateWithoutDiligenceEnterpriseInput = {
    id?: string
    name: string
    registrationNumber: string
    status: string
    createdBy: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceRequestDocument?: DiligenceRequestDocumentCreateNestedManyWithoutDiligenceRequestInput
  }

  export type DiligenceRequestUncheckedCreateWithoutDiligenceEnterpriseInput = {
    id?: string
    name: string
    registrationNumber: string
    status: string
    createdBy: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceRequestDocument?: DiligenceRequestDocumentUncheckedCreateNestedManyWithoutDiligenceRequestInput
  }

  export type DiligenceRequestCreateOrConnectWithoutDiligenceEnterpriseInput = {
    where: DiligenceRequestWhereUniqueInput
    create: XOR<DiligenceRequestCreateWithoutDiligenceEnterpriseInput, DiligenceRequestUncheckedCreateWithoutDiligenceEnterpriseInput>
  }

  export type DiligenceRequestCreateManyDiligenceEnterpriseInputEnvelope = {
    data: Enumerable<DiligenceRequestCreateManyDiligenceEnterpriseInput>
    skipDuplicates?: boolean
  }

  export type DiligenceUserCreateWithoutDiligenceEnterpriseInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: string
    resetToken?: string | null
    managerId?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiligenceUserUncheckedCreateWithoutDiligenceEnterpriseInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: string
    resetToken?: string | null
    managerId?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiligenceUserCreateOrConnectWithoutDiligenceEnterpriseInput = {
    where: DiligenceUserWhereUniqueInput
    create: XOR<DiligenceUserCreateWithoutDiligenceEnterpriseInput, DiligenceUserUncheckedCreateWithoutDiligenceEnterpriseInput>
  }

  export type DiligenceUserCreateManyDiligenceEnterpriseInputEnvelope = {
    data: Enumerable<DiligenceUserCreateManyDiligenceEnterpriseInput>
    skipDuplicates?: boolean
  }

  export type DiligenceManagerUpsertWithWhereUniqueWithoutDiligenceEnterpriseInput = {
    where: DiligenceManagerWhereUniqueInput
    update: XOR<DiligenceManagerUpdateWithoutDiligenceEnterpriseInput, DiligenceManagerUncheckedUpdateWithoutDiligenceEnterpriseInput>
    create: XOR<DiligenceManagerCreateWithoutDiligenceEnterpriseInput, DiligenceManagerUncheckedCreateWithoutDiligenceEnterpriseInput>
  }

  export type DiligenceManagerUpdateWithWhereUniqueWithoutDiligenceEnterpriseInput = {
    where: DiligenceManagerWhereUniqueInput
    data: XOR<DiligenceManagerUpdateWithoutDiligenceEnterpriseInput, DiligenceManagerUncheckedUpdateWithoutDiligenceEnterpriseInput>
  }

  export type DiligenceManagerUpdateManyWithWhereWithoutDiligenceEnterpriseInput = {
    where: DiligenceManagerScalarWhereInput
    data: XOR<DiligenceManagerUpdateManyMutationInput, DiligenceManagerUncheckedUpdateManyWithoutDiligenceManagerInput>
  }

  export type DiligenceManagerScalarWhereInput = {
    AND?: Enumerable<DiligenceManagerScalarWhereInput>
    OR?: Enumerable<DiligenceManagerScalarWhereInput>
    NOT?: Enumerable<DiligenceManagerScalarWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    location?: StringNullableFilter | string | null
    managerEmail?: StringFilter | string
    isDeprecated?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    diligenceEnterpriseId?: StringFilter | string
  }

  export type DiligenceRequestUpsertWithWhereUniqueWithoutDiligenceEnterpriseInput = {
    where: DiligenceRequestWhereUniqueInput
    update: XOR<DiligenceRequestUpdateWithoutDiligenceEnterpriseInput, DiligenceRequestUncheckedUpdateWithoutDiligenceEnterpriseInput>
    create: XOR<DiligenceRequestCreateWithoutDiligenceEnterpriseInput, DiligenceRequestUncheckedCreateWithoutDiligenceEnterpriseInput>
  }

  export type DiligenceRequestUpdateWithWhereUniqueWithoutDiligenceEnterpriseInput = {
    where: DiligenceRequestWhereUniqueInput
    data: XOR<DiligenceRequestUpdateWithoutDiligenceEnterpriseInput, DiligenceRequestUncheckedUpdateWithoutDiligenceEnterpriseInput>
  }

  export type DiligenceRequestUpdateManyWithWhereWithoutDiligenceEnterpriseInput = {
    where: DiligenceRequestScalarWhereInput
    data: XOR<DiligenceRequestUpdateManyMutationInput, DiligenceRequestUncheckedUpdateManyWithoutDiligenceRequestInput>
  }

  export type DiligenceRequestScalarWhereInput = {
    AND?: Enumerable<DiligenceRequestScalarWhereInput>
    OR?: Enumerable<DiligenceRequestScalarWhereInput>
    NOT?: Enumerable<DiligenceRequestScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    registrationNumber?: StringFilter | string
    status?: StringFilter | string
    createdBy?: StringFilter | string
    isDeprecated?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    diligenceEnterpriseId?: StringFilter | string
  }

  export type DiligenceUserUpsertWithWhereUniqueWithoutDiligenceEnterpriseInput = {
    where: DiligenceUserWhereUniqueInput
    update: XOR<DiligenceUserUpdateWithoutDiligenceEnterpriseInput, DiligenceUserUncheckedUpdateWithoutDiligenceEnterpriseInput>
    create: XOR<DiligenceUserCreateWithoutDiligenceEnterpriseInput, DiligenceUserUncheckedCreateWithoutDiligenceEnterpriseInput>
  }

  export type DiligenceUserUpdateWithWhereUniqueWithoutDiligenceEnterpriseInput = {
    where: DiligenceUserWhereUniqueInput
    data: XOR<DiligenceUserUpdateWithoutDiligenceEnterpriseInput, DiligenceUserUncheckedUpdateWithoutDiligenceEnterpriseInput>
  }

  export type DiligenceUserUpdateManyWithWhereWithoutDiligenceEnterpriseInput = {
    where: DiligenceUserScalarWhereInput
    data: XOR<DiligenceUserUpdateManyMutationInput, DiligenceUserUncheckedUpdateManyWithoutDiligenceUserInput>
  }

  export type DiligenceUserScalarWhereInput = {
    AND?: Enumerable<DiligenceUserScalarWhereInput>
    OR?: Enumerable<DiligenceUserScalarWhereInput>
    NOT?: Enumerable<DiligenceUserScalarWhereInput>
    id?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    role?: StringFilter | string
    resetToken?: StringNullableFilter | string | null
    managerId?: StringNullableFilter | string | null
    isDeprecated?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    diligenceEnterpriseId?: StringFilter | string
  }

  export type DiligenceStaffCreateWithoutDiligenceManagerInput = {
    id?: string
    email: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiligenceStaffUncheckedCreateWithoutDiligenceManagerInput = {
    id?: string
    email: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiligenceStaffCreateOrConnectWithoutDiligenceManagerInput = {
    where: DiligenceStaffWhereUniqueInput
    create: XOR<DiligenceStaffCreateWithoutDiligenceManagerInput, DiligenceStaffUncheckedCreateWithoutDiligenceManagerInput>
  }

  export type DiligenceStaffCreateManyDiligenceManagerInputEnvelope = {
    data: Enumerable<DiligenceStaffCreateManyDiligenceManagerInput>
    skipDuplicates?: boolean
  }

  export type DiligenceEnterpriseCreateWithoutDiligenceManagerInput = {
    id?: string
    name: string
    address: string
    adminEmail: string
    color?: string | null
    logo?: string | null
    backdrop?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceRequest?: DiligenceRequestCreateNestedManyWithoutDiligenceEnterpriseInput
    diligenceUser?: DiligenceUserCreateNestedManyWithoutDiligenceEnterpriseInput
  }

  export type DiligenceEnterpriseUncheckedCreateWithoutDiligenceManagerInput = {
    id?: string
    name: string
    address: string
    adminEmail: string
    color?: string | null
    logo?: string | null
    backdrop?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceRequest?: DiligenceRequestUncheckedCreateNestedManyWithoutDiligenceEnterpriseInput
    diligenceUser?: DiligenceUserUncheckedCreateNestedManyWithoutDiligenceEnterpriseInput
  }

  export type DiligenceEnterpriseCreateOrConnectWithoutDiligenceManagerInput = {
    where: DiligenceEnterpriseWhereUniqueInput
    create: XOR<DiligenceEnterpriseCreateWithoutDiligenceManagerInput, DiligenceEnterpriseUncheckedCreateWithoutDiligenceManagerInput>
  }

  export type DiligenceStaffUpsertWithWhereUniqueWithoutDiligenceManagerInput = {
    where: DiligenceStaffWhereUniqueInput
    update: XOR<DiligenceStaffUpdateWithoutDiligenceManagerInput, DiligenceStaffUncheckedUpdateWithoutDiligenceManagerInput>
    create: XOR<DiligenceStaffCreateWithoutDiligenceManagerInput, DiligenceStaffUncheckedCreateWithoutDiligenceManagerInput>
  }

  export type DiligenceStaffUpdateWithWhereUniqueWithoutDiligenceManagerInput = {
    where: DiligenceStaffWhereUniqueInput
    data: XOR<DiligenceStaffUpdateWithoutDiligenceManagerInput, DiligenceStaffUncheckedUpdateWithoutDiligenceManagerInput>
  }

  export type DiligenceStaffUpdateManyWithWhereWithoutDiligenceManagerInput = {
    where: DiligenceStaffScalarWhereInput
    data: XOR<DiligenceStaffUpdateManyMutationInput, DiligenceStaffUncheckedUpdateManyWithoutDiligenceStaffInput>
  }

  export type DiligenceStaffScalarWhereInput = {
    AND?: Enumerable<DiligenceStaffScalarWhereInput>
    OR?: Enumerable<DiligenceStaffScalarWhereInput>
    NOT?: Enumerable<DiligenceStaffScalarWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    isDeprecated?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    diligenceManagerId?: StringFilter | string
  }

  export type DiligenceEnterpriseUpsertWithoutDiligenceManagerInput = {
    update: XOR<DiligenceEnterpriseUpdateWithoutDiligenceManagerInput, DiligenceEnterpriseUncheckedUpdateWithoutDiligenceManagerInput>
    create: XOR<DiligenceEnterpriseCreateWithoutDiligenceManagerInput, DiligenceEnterpriseUncheckedCreateWithoutDiligenceManagerInput>
  }

  export type DiligenceEnterpriseUpdateWithoutDiligenceManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceRequest?: DiligenceRequestUpdateManyWithoutDiligenceEnterpriseNestedInput
    diligenceUser?: DiligenceUserUpdateManyWithoutDiligenceEnterpriseNestedInput
  }

  export type DiligenceEnterpriseUncheckedUpdateWithoutDiligenceManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceRequest?: DiligenceRequestUncheckedUpdateManyWithoutDiligenceEnterpriseNestedInput
    diligenceUser?: DiligenceUserUncheckedUpdateManyWithoutDiligenceEnterpriseNestedInput
  }

  export type DiligenceManagerCreateWithoutDiligenceStaffInput = {
    id?: string
    name?: string | null
    location?: string | null
    managerEmail: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceEnterprise: DiligenceEnterpriseCreateNestedOneWithoutDiligenceManagerInput
  }

  export type DiligenceManagerUncheckedCreateWithoutDiligenceStaffInput = {
    id?: string
    name?: string | null
    location?: string | null
    managerEmail: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diligenceEnterpriseId: string
  }

  export type DiligenceManagerCreateOrConnectWithoutDiligenceStaffInput = {
    where: DiligenceManagerWhereUniqueInput
    create: XOR<DiligenceManagerCreateWithoutDiligenceStaffInput, DiligenceManagerUncheckedCreateWithoutDiligenceStaffInput>
  }

  export type DiligenceManagerUpsertWithoutDiligenceStaffInput = {
    update: XOR<DiligenceManagerUpdateWithoutDiligenceStaffInput, DiligenceManagerUncheckedUpdateWithoutDiligenceStaffInput>
    create: XOR<DiligenceManagerCreateWithoutDiligenceStaffInput, DiligenceManagerUncheckedCreateWithoutDiligenceStaffInput>
  }

  export type DiligenceManagerUpdateWithoutDiligenceStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceEnterprise?: DiligenceEnterpriseUpdateOneRequiredWithoutDiligenceManagerNestedInput
  }

  export type DiligenceManagerUncheckedUpdateWithoutDiligenceStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceEnterpriseId?: StringFieldUpdateOperationsInput | string
  }

  export type DiligenceRequestDocumentCreateManyDiligenceRequestInput = {
    id?: string
    name: string
    type: string
    description: string
    link: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiligenceRequestDocumentUpdateWithoutDiligenceRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceRequestDocumentUncheckedUpdateWithoutDiligenceRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceRequestDocumentUncheckedUpdateManyWithoutDiligenceRequestDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceManagerCreateManyDiligenceEnterpriseInput = {
    id?: string
    name?: string | null
    location?: string | null
    managerEmail: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiligenceRequestCreateManyDiligenceEnterpriseInput = {
    id?: string
    name: string
    registrationNumber: string
    status: string
    createdBy: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiligenceUserCreateManyDiligenceEnterpriseInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: string
    resetToken?: string | null
    managerId?: string | null
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiligenceManagerUpdateWithoutDiligenceEnterpriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceStaff?: DiligenceStaffUpdateManyWithoutDiligenceManagerNestedInput
  }

  export type DiligenceManagerUncheckedUpdateWithoutDiligenceEnterpriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceStaff?: DiligenceStaffUncheckedUpdateManyWithoutDiligenceManagerNestedInput
  }

  export type DiligenceManagerUncheckedUpdateManyWithoutDiligenceManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    managerEmail?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceRequestUpdateWithoutDiligenceEnterpriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceRequestDocument?: DiligenceRequestDocumentUpdateManyWithoutDiligenceRequestNestedInput
  }

  export type DiligenceRequestUncheckedUpdateWithoutDiligenceEnterpriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diligenceRequestDocument?: DiligenceRequestDocumentUncheckedUpdateManyWithoutDiligenceRequestNestedInput
  }

  export type DiligenceRequestUncheckedUpdateManyWithoutDiligenceRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceUserUpdateWithoutDiligenceEnterpriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceUserUncheckedUpdateWithoutDiligenceEnterpriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceUserUncheckedUpdateManyWithoutDiligenceUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceStaffCreateManyDiligenceManagerInput = {
    id?: string
    email: string
    isDeprecated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiligenceStaffUpdateWithoutDiligenceManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceStaffUncheckedUpdateWithoutDiligenceManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiligenceStaffUncheckedUpdateManyWithoutDiligenceStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDeprecated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}