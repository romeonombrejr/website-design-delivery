
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Website
 * 
 */
export type Website = $Result.DefaultSelection<Prisma.$WebsitePayload>
/**
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model PageSection
 * 
 */
export type PageSection = $Result.DefaultSelection<Prisma.$PageSectionPayload>
/**
 * Model Element
 * 
 */
export type Element = $Result.DefaultSelection<Prisma.$ElementPayload>
/**
 * Model SectionElement
 * 
 */
export type SectionElement = $Result.DefaultSelection<Prisma.$SectionElementPayload>
/**
 * Model ElementChild
 * 
 */
export type ElementChild = $Result.DefaultSelection<Prisma.$ElementChildPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Websites
 * const websites = await prisma.website.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Websites
   * const websites = await prisma.website.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.website`: Exposes CRUD operations for the **Website** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Websites
    * const websites = await prisma.website.findMany()
    * ```
    */
  get website(): Prisma.WebsiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageSection`: Exposes CRUD operations for the **PageSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageSections
    * const pageSections = await prisma.pageSection.findMany()
    * ```
    */
  get pageSection(): Prisma.PageSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.element`: Exposes CRUD operations for the **Element** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Elements
    * const elements = await prisma.element.findMany()
    * ```
    */
  get element(): Prisma.ElementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sectionElement`: Exposes CRUD operations for the **SectionElement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SectionElements
    * const sectionElements = await prisma.sectionElement.findMany()
    * ```
    */
  get sectionElement(): Prisma.SectionElementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.elementChild`: Exposes CRUD operations for the **ElementChild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ElementChildren
    * const elementChildren = await prisma.elementChild.findMany()
    * ```
    */
  get elementChild(): Prisma.ElementChildDelegate<ExtArgs, ClientOptions>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Website: 'Website',
    Page: 'Page',
    Section: 'Section',
    PageSection: 'PageSection',
    Element: 'Element',
    SectionElement: 'SectionElement',
    ElementChild: 'ElementChild'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "website" | "page" | "section" | "pageSection" | "element" | "sectionElement" | "elementChild"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Website: {
        payload: Prisma.$WebsitePayload<ExtArgs>
        fields: Prisma.WebsiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebsiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebsiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findFirst: {
            args: Prisma.WebsiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebsiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findMany: {
            args: Prisma.WebsiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          create: {
            args: Prisma.WebsiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          createMany: {
            args: Prisma.WebsiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebsiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          delete: {
            args: Prisma.WebsiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          update: {
            args: Prisma.WebsiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          deleteMany: {
            args: Prisma.WebsiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebsiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebsiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          upsert: {
            args: Prisma.WebsiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          aggregate: {
            args: Prisma.WebsiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsite>
          }
          groupBy: {
            args: Prisma.WebsiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebsiteCountArgs<ExtArgs>
            result: $Utils.Optional<WebsiteCountAggregateOutputType> | number
          }
        }
      }
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      PageSection: {
        payload: Prisma.$PageSectionPayload<ExtArgs>
        fields: Prisma.PageSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSectionPayload>
          }
          findFirst: {
            args: Prisma.PageSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSectionPayload>
          }
          findMany: {
            args: Prisma.PageSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSectionPayload>[]
          }
          create: {
            args: Prisma.PageSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSectionPayload>
          }
          createMany: {
            args: Prisma.PageSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSectionPayload>[]
          }
          delete: {
            args: Prisma.PageSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSectionPayload>
          }
          update: {
            args: Prisma.PageSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSectionPayload>
          }
          deleteMany: {
            args: Prisma.PageSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSectionPayload>[]
          }
          upsert: {
            args: Prisma.PageSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSectionPayload>
          }
          aggregate: {
            args: Prisma.PageSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageSection>
          }
          groupBy: {
            args: Prisma.PageSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageSectionCountArgs<ExtArgs>
            result: $Utils.Optional<PageSectionCountAggregateOutputType> | number
          }
        }
      }
      Element: {
        payload: Prisma.$ElementPayload<ExtArgs>
        fields: Prisma.ElementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>
          }
          findFirst: {
            args: Prisma.ElementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>
          }
          findMany: {
            args: Prisma.ElementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>[]
          }
          create: {
            args: Prisma.ElementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>
          }
          createMany: {
            args: Prisma.ElementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ElementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>[]
          }
          delete: {
            args: Prisma.ElementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>
          }
          update: {
            args: Prisma.ElementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>
          }
          deleteMany: {
            args: Prisma.ElementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ElementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>[]
          }
          upsert: {
            args: Prisma.ElementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>
          }
          aggregate: {
            args: Prisma.ElementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElement>
          }
          groupBy: {
            args: Prisma.ElementGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElementGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElementCountArgs<ExtArgs>
            result: $Utils.Optional<ElementCountAggregateOutputType> | number
          }
        }
      }
      SectionElement: {
        payload: Prisma.$SectionElementPayload<ExtArgs>
        fields: Prisma.SectionElementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionElementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionElementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionElementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionElementPayload>
          }
          findFirst: {
            args: Prisma.SectionElementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionElementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionElementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionElementPayload>
          }
          findMany: {
            args: Prisma.SectionElementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionElementPayload>[]
          }
          create: {
            args: Prisma.SectionElementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionElementPayload>
          }
          createMany: {
            args: Prisma.SectionElementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionElementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionElementPayload>[]
          }
          delete: {
            args: Prisma.SectionElementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionElementPayload>
          }
          update: {
            args: Prisma.SectionElementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionElementPayload>
          }
          deleteMany: {
            args: Prisma.SectionElementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionElementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionElementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionElementPayload>[]
          }
          upsert: {
            args: Prisma.SectionElementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionElementPayload>
          }
          aggregate: {
            args: Prisma.SectionElementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSectionElement>
          }
          groupBy: {
            args: Prisma.SectionElementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionElementGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionElementCountArgs<ExtArgs>
            result: $Utils.Optional<SectionElementCountAggregateOutputType> | number
          }
        }
      }
      ElementChild: {
        payload: Prisma.$ElementChildPayload<ExtArgs>
        fields: Prisma.ElementChildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElementChildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementChildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElementChildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementChildPayload>
          }
          findFirst: {
            args: Prisma.ElementChildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementChildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElementChildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementChildPayload>
          }
          findMany: {
            args: Prisma.ElementChildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementChildPayload>[]
          }
          create: {
            args: Prisma.ElementChildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementChildPayload>
          }
          createMany: {
            args: Prisma.ElementChildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ElementChildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementChildPayload>[]
          }
          delete: {
            args: Prisma.ElementChildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementChildPayload>
          }
          update: {
            args: Prisma.ElementChildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementChildPayload>
          }
          deleteMany: {
            args: Prisma.ElementChildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElementChildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ElementChildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementChildPayload>[]
          }
          upsert: {
            args: Prisma.ElementChildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementChildPayload>
          }
          aggregate: {
            args: Prisma.ElementChildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElementChild>
          }
          groupBy: {
            args: Prisma.ElementChildGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElementChildGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElementChildCountArgs<ExtArgs>
            result: $Utils.Optional<ElementChildCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    website?: WebsiteOmit
    page?: PageOmit
    section?: SectionOmit
    pageSection?: PageSectionOmit
    element?: ElementOmit
    sectionElement?: SectionElementOmit
    elementChild?: ElementChildOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type WebsiteCountOutputType
   */

  export type WebsiteCountOutputType = {
    pages: number
  }

  export type WebsiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | WebsiteCountOutputTypeCountPagesArgs
  }

  // Custom InputTypes
  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteCountOutputType
     */
    select?: WebsiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
  }


  /**
   * Count Type PageCountOutputType
   */

  export type PageCountOutputType = {
    sections: number
  }

  export type PageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | PageCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     */
    select?: PageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageSectionWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    pages: number
    elements: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | SectionCountOutputTypeCountPagesArgs
    elements?: boolean | SectionCountOutputTypeCountElementsArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageSectionWhereInput
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionElementWhereInput
  }


  /**
   * Count Type ElementCountOutputType
   */

  export type ElementCountOutputType = {
    sections: number
    children: number
    parents: number
  }

  export type ElementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | ElementCountOutputTypeCountSectionsArgs
    children?: boolean | ElementCountOutputTypeCountChildrenArgs
    parents?: boolean | ElementCountOutputTypeCountParentsArgs
  }

  // Custom InputTypes
  /**
   * ElementCountOutputType without action
   */
  export type ElementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementCountOutputType
     */
    select?: ElementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ElementCountOutputType without action
   */
  export type ElementCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionElementWhereInput
  }

  /**
   * ElementCountOutputType without action
   */
  export type ElementCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElementChildWhereInput
  }

  /**
   * ElementCountOutputType without action
   */
  export type ElementCountOutputTypeCountParentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElementChildWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Website
   */

  export type AggregateWebsite = {
    _count: WebsiteCountAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  export type WebsiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebsiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebsiteCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebsiteMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebsiteMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebsiteCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebsiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Website to aggregate.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Websites
    **/
    _count?: true | WebsiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteMaxAggregateInputType
  }

  export type GetWebsiteAggregateType<T extends WebsiteAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsite[P]>
      : GetScalarType<T[P], AggregateWebsite[P]>
  }




  export type WebsiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteWhereInput
    orderBy?: WebsiteOrderByWithAggregationInput | WebsiteOrderByWithAggregationInput[]
    by: WebsiteScalarFieldEnum[] | WebsiteScalarFieldEnum
    having?: WebsiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteCountAggregateInputType | true
    _min?: WebsiteMinAggregateInputType
    _max?: WebsiteMaxAggregateInputType
  }

  export type WebsiteGroupByOutputType = {
    id: string
    name: string
    domain: string | null
    createdAt: Date
    updatedAt: Date
    _count: WebsiteCountAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  type GetWebsiteGroupByPayload<T extends WebsiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pages?: boolean | Website$pagesArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WebsiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain" | "createdAt" | "updatedAt", ExtArgs["result"]["website"]>
  export type WebsiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | Website$pagesArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WebsiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WebsiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WebsitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Website"
    objects: {
      pages: Prisma.$PagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      domain: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["website"]>
    composites: {}
  }

  type WebsiteGetPayload<S extends boolean | null | undefined | WebsiteDefaultArgs> = $Result.GetResult<Prisma.$WebsitePayload, S>

  type WebsiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebsiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsiteCountAggregateInputType | true
    }

  export interface WebsiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Website'], meta: { name: 'Website' } }
    /**
     * Find zero or one Website that matches the filter.
     * @param {WebsiteFindUniqueArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebsiteFindUniqueArgs>(args: SelectSubset<T, WebsiteFindUniqueArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Website that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebsiteFindUniqueOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebsiteFindUniqueOrThrowArgs>(args: SelectSubset<T, WebsiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Website that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebsiteFindFirstArgs>(args?: SelectSubset<T, WebsiteFindFirstArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Website that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebsiteFindFirstOrThrowArgs>(args?: SelectSubset<T, WebsiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Websites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Websites
     * const websites = await prisma.website.findMany()
     * 
     * // Get first 10 Websites
     * const websites = await prisma.website.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteWithIdOnly = await prisma.website.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebsiteFindManyArgs>(args?: SelectSubset<T, WebsiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Website.
     * @param {WebsiteCreateArgs} args - Arguments to create a Website.
     * @example
     * // Create one Website
     * const Website = await prisma.website.create({
     *   data: {
     *     // ... data to create a Website
     *   }
     * })
     * 
     */
    create<T extends WebsiteCreateArgs>(args: SelectSubset<T, WebsiteCreateArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Websites.
     * @param {WebsiteCreateManyArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebsiteCreateManyArgs>(args?: SelectSubset<T, WebsiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Websites and returns the data saved in the database.
     * @param {WebsiteCreateManyAndReturnArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebsiteCreateManyAndReturnArgs>(args?: SelectSubset<T, WebsiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Website.
     * @param {WebsiteDeleteArgs} args - Arguments to delete one Website.
     * @example
     * // Delete one Website
     * const Website = await prisma.website.delete({
     *   where: {
     *     // ... filter to delete one Website
     *   }
     * })
     * 
     */
    delete<T extends WebsiteDeleteArgs>(args: SelectSubset<T, WebsiteDeleteArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Website.
     * @param {WebsiteUpdateArgs} args - Arguments to update one Website.
     * @example
     * // Update one Website
     * const website = await prisma.website.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebsiteUpdateArgs>(args: SelectSubset<T, WebsiteUpdateArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Websites.
     * @param {WebsiteDeleteManyArgs} args - Arguments to filter Websites to delete.
     * @example
     * // Delete a few Websites
     * const { count } = await prisma.website.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebsiteDeleteManyArgs>(args?: SelectSubset<T, WebsiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebsiteUpdateManyArgs>(args: SelectSubset<T, WebsiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites and returns the data updated in the database.
     * @param {WebsiteUpdateManyAndReturnArgs} args - Arguments to update many Websites.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebsiteUpdateManyAndReturnArgs>(args: SelectSubset<T, WebsiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Website.
     * @param {WebsiteUpsertArgs} args - Arguments to update or create a Website.
     * @example
     * // Update or create a Website
     * const website = await prisma.website.upsert({
     *   create: {
     *     // ... data to create a Website
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Website we want to update
     *   }
     * })
     */
    upsert<T extends WebsiteUpsertArgs>(args: SelectSubset<T, WebsiteUpsertArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteCountArgs} args - Arguments to filter Websites to count.
     * @example
     * // Count the number of Websites
     * const count = await prisma.website.count({
     *   where: {
     *     // ... the filter for the Websites we want to count
     *   }
     * })
    **/
    count<T extends WebsiteCountArgs>(
      args?: Subset<T, WebsiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebsiteAggregateArgs>(args: Subset<T, WebsiteAggregateArgs>): Prisma.PrismaPromise<GetWebsiteAggregateType<T>>

    /**
     * Group by Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteGroupByArgs} args - Group by arguments.
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
      T extends WebsiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, WebsiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Website model
   */
  readonly fields: WebsiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Website.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebsiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pages<T extends Website$pagesArgs<ExtArgs> = {}>(args?: Subset<T, Website$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Website model
   */ 
  interface WebsiteFieldRefs {
    readonly id: FieldRef<"Website", 'String'>
    readonly name: FieldRef<"Website", 'String'>
    readonly domain: FieldRef<"Website", 'String'>
    readonly createdAt: FieldRef<"Website", 'DateTime'>
    readonly updatedAt: FieldRef<"Website", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Website findUnique
   */
  export type WebsiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website findUniqueOrThrow
   */
  export type WebsiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website findFirst
   */
  export type WebsiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website findFirstOrThrow
   */
  export type WebsiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website findMany
   */
  export type WebsiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Websites to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website create
   */
  export type WebsiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Website.
     */
    data: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
  }

  /**
   * Website createMany
   */
  export type WebsiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Websites.
     */
    data: WebsiteCreateManyInput | WebsiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Website createManyAndReturn
   */
  export type WebsiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * The data used to create many Websites.
     */
    data: WebsiteCreateManyInput | WebsiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Website update
   */
  export type WebsiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Website.
     */
    data: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
    /**
     * Choose, which Website to update.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website updateMany
   */
  export type WebsiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Websites.
     */
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to update.
     */
    limit?: number
  }

  /**
   * Website updateManyAndReturn
   */
  export type WebsiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * The data used to update Websites.
     */
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to update.
     */
    limit?: number
  }

  /**
   * Website upsert
   */
  export type WebsiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Website to update in case it exists.
     */
    where: WebsiteWhereUniqueInput
    /**
     * In case the Website found by the `where` argument doesn't exist, create a new Website with this data.
     */
    create: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
    /**
     * In case the Website was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
  }

  /**
   * Website delete
   */
  export type WebsiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter which Website to delete.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website deleteMany
   */
  export type WebsiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Websites to delete
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to delete.
     */
    limit?: number
  }

  /**
   * Website.pages
   */
  export type Website$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    where?: PageWhereInput
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    cursor?: PageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Website without action
   */
  export type WebsiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
  }


  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    websiteId: string | null
  }

  export type PageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    websiteId: string | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    websiteId: number
    _all: number
  }


  export type PageMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    websiteId?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    websiteId?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    websiteId?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    websiteId: string
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    websiteId?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
    sections?: boolean | Page$sectionsArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    websiteId?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    websiteId?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    websiteId?: boolean
  }

  export type PageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt" | "websiteId", ExtArgs["result"]["page"]>
  export type PageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
    sections?: boolean | Page$sectionsArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type PageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }

  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {
      website: Prisma.$WebsitePayload<ExtArgs>
      sections: Prisma.$PageSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
      websiteId: string
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageFindManyArgs>(args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCreateManyArgs>(args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {PageCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(args?: SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageDeleteManyArgs>(args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageUpdateManyArgs>(args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages and returns the data updated in the database.
     * @param {PageUpdateManyAndReturnArgs} args - Arguments to update many Pages.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(args: SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
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
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    website<T extends WebsiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebsiteDefaultArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sections<T extends Page$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Page$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Page model
   */ 
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'String'>
    readonly name: FieldRef<"Page", 'String'>
    readonly slug: FieldRef<"Page", 'String'>
    readonly createdAt: FieldRef<"Page", 'DateTime'>
    readonly updatedAt: FieldRef<"Page", 'DateTime'>
    readonly websiteId: FieldRef<"Page", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page createManyAndReturn
   */
  export type PageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page updateManyAndReturn
   */
  export type PageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }

  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to delete.
     */
    limit?: number
  }

  /**
   * Page.sections
   */
  export type Page$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionInclude<ExtArgs> | null
    where?: PageSectionWhereInput
    orderBy?: PageSectionOrderByWithRelationInput | PageSectionOrderByWithRelationInput[]
    cursor?: PageSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageSectionScalarFieldEnum | PageSectionScalarFieldEnum[]
  }

  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SectionMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pages?: boolean | Section$pagesArgs<ExtArgs>
    elements?: boolean | Section$elementsArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | Section$pagesArgs<ExtArgs>
    elements?: boolean | Section$elementsArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      pages: Prisma.$PageSectionPayload<ExtArgs>[]
      elements: Prisma.$SectionElementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pages<T extends Section$pagesArgs<ExtArgs> = {}>(args?: Subset<T, Section$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    elements<T extends Section$elementsArgs<ExtArgs> = {}>(args?: Subset<T, Section$elementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Section model
   */ 
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly name: FieldRef<"Section", 'String'>
    readonly createdAt: FieldRef<"Section", 'DateTime'>
    readonly updatedAt: FieldRef<"Section", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.pages
   */
  export type Section$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionInclude<ExtArgs> | null
    where?: PageSectionWhereInput
    orderBy?: PageSectionOrderByWithRelationInput | PageSectionOrderByWithRelationInput[]
    cursor?: PageSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageSectionScalarFieldEnum | PageSectionScalarFieldEnum[]
  }

  /**
   * Section.elements
   */
  export type Section$elementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementInclude<ExtArgs> | null
    where?: SectionElementWhereInput
    orderBy?: SectionElementOrderByWithRelationInput | SectionElementOrderByWithRelationInput[]
    cursor?: SectionElementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionElementScalarFieldEnum | SectionElementScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model PageSection
   */

  export type AggregatePageSection = {
    _count: PageSectionCountAggregateOutputType | null
    _avg: PageSectionAvgAggregateOutputType | null
    _sum: PageSectionSumAggregateOutputType | null
    _min: PageSectionMinAggregateOutputType | null
    _max: PageSectionMaxAggregateOutputType | null
  }

  export type PageSectionAvgAggregateOutputType = {
    position: number | null
  }

  export type PageSectionSumAggregateOutputType = {
    position: number | null
  }

  export type PageSectionMinAggregateOutputType = {
    pageId: string | null
    sectionId: string | null
    position: number | null
  }

  export type PageSectionMaxAggregateOutputType = {
    pageId: string | null
    sectionId: string | null
    position: number | null
  }

  export type PageSectionCountAggregateOutputType = {
    pageId: number
    sectionId: number
    position: number
    _all: number
  }


  export type PageSectionAvgAggregateInputType = {
    position?: true
  }

  export type PageSectionSumAggregateInputType = {
    position?: true
  }

  export type PageSectionMinAggregateInputType = {
    pageId?: true
    sectionId?: true
    position?: true
  }

  export type PageSectionMaxAggregateInputType = {
    pageId?: true
    sectionId?: true
    position?: true
  }

  export type PageSectionCountAggregateInputType = {
    pageId?: true
    sectionId?: true
    position?: true
    _all?: true
  }

  export type PageSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageSection to aggregate.
     */
    where?: PageSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageSections to fetch.
     */
    orderBy?: PageSectionOrderByWithRelationInput | PageSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageSections
    **/
    _count?: true | PageSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageSectionMaxAggregateInputType
  }

  export type GetPageSectionAggregateType<T extends PageSectionAggregateArgs> = {
        [P in keyof T & keyof AggregatePageSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageSection[P]>
      : GetScalarType<T[P], AggregatePageSection[P]>
  }




  export type PageSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageSectionWhereInput
    orderBy?: PageSectionOrderByWithAggregationInput | PageSectionOrderByWithAggregationInput[]
    by: PageSectionScalarFieldEnum[] | PageSectionScalarFieldEnum
    having?: PageSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageSectionCountAggregateInputType | true
    _avg?: PageSectionAvgAggregateInputType
    _sum?: PageSectionSumAggregateInputType
    _min?: PageSectionMinAggregateInputType
    _max?: PageSectionMaxAggregateInputType
  }

  export type PageSectionGroupByOutputType = {
    pageId: string
    sectionId: string
    position: number
    _count: PageSectionCountAggregateOutputType | null
    _avg: PageSectionAvgAggregateOutputType | null
    _sum: PageSectionSumAggregateOutputType | null
    _min: PageSectionMinAggregateOutputType | null
    _max: PageSectionMaxAggregateOutputType | null
  }

  type GetPageSectionGroupByPayload<T extends PageSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageSectionGroupByOutputType[P]>
            : GetScalarType<T[P], PageSectionGroupByOutputType[P]>
        }
      >
    >


  export type PageSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pageId?: boolean
    sectionId?: boolean
    position?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageSection"]>

  export type PageSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pageId?: boolean
    sectionId?: boolean
    position?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageSection"]>

  export type PageSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pageId?: boolean
    sectionId?: boolean
    position?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageSection"]>

  export type PageSectionSelectScalar = {
    pageId?: boolean
    sectionId?: boolean
    position?: boolean
  }

  export type PageSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pageId" | "sectionId" | "position", ExtArgs["result"]["pageSection"]>
  export type PageSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type PageSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type PageSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $PageSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageSection"
    objects: {
      page: Prisma.$PagePayload<ExtArgs>
      section: Prisma.$SectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pageId: string
      sectionId: string
      position: number
    }, ExtArgs["result"]["pageSection"]>
    composites: {}
  }

  type PageSectionGetPayload<S extends boolean | null | undefined | PageSectionDefaultArgs> = $Result.GetResult<Prisma.$PageSectionPayload, S>

  type PageSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageSectionCountAggregateInputType | true
    }

  export interface PageSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageSection'], meta: { name: 'PageSection' } }
    /**
     * Find zero or one PageSection that matches the filter.
     * @param {PageSectionFindUniqueArgs} args - Arguments to find a PageSection
     * @example
     * // Get one PageSection
     * const pageSection = await prisma.pageSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageSectionFindUniqueArgs>(args: SelectSubset<T, PageSectionFindUniqueArgs<ExtArgs>>): Prisma__PageSectionClient<$Result.GetResult<Prisma.$PageSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageSectionFindUniqueOrThrowArgs} args - Arguments to find a PageSection
     * @example
     * // Get one PageSection
     * const pageSection = await prisma.pageSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, PageSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageSectionClient<$Result.GetResult<Prisma.$PageSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSectionFindFirstArgs} args - Arguments to find a PageSection
     * @example
     * // Get one PageSection
     * const pageSection = await prisma.pageSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageSectionFindFirstArgs>(args?: SelectSubset<T, PageSectionFindFirstArgs<ExtArgs>>): Prisma__PageSectionClient<$Result.GetResult<Prisma.$PageSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSectionFindFirstOrThrowArgs} args - Arguments to find a PageSection
     * @example
     * // Get one PageSection
     * const pageSection = await prisma.pageSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, PageSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageSectionClient<$Result.GetResult<Prisma.$PageSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageSections
     * const pageSections = await prisma.pageSection.findMany()
     * 
     * // Get first 10 PageSections
     * const pageSections = await prisma.pageSection.findMany({ take: 10 })
     * 
     * // Only select the `pageId`
     * const pageSectionWithPageIdOnly = await prisma.pageSection.findMany({ select: { pageId: true } })
     * 
     */
    findMany<T extends PageSectionFindManyArgs>(args?: SelectSubset<T, PageSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageSection.
     * @param {PageSectionCreateArgs} args - Arguments to create a PageSection.
     * @example
     * // Create one PageSection
     * const PageSection = await prisma.pageSection.create({
     *   data: {
     *     // ... data to create a PageSection
     *   }
     * })
     * 
     */
    create<T extends PageSectionCreateArgs>(args: SelectSubset<T, PageSectionCreateArgs<ExtArgs>>): Prisma__PageSectionClient<$Result.GetResult<Prisma.$PageSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageSections.
     * @param {PageSectionCreateManyArgs} args - Arguments to create many PageSections.
     * @example
     * // Create many PageSections
     * const pageSection = await prisma.pageSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageSectionCreateManyArgs>(args?: SelectSubset<T, PageSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageSections and returns the data saved in the database.
     * @param {PageSectionCreateManyAndReturnArgs} args - Arguments to create many PageSections.
     * @example
     * // Create many PageSections
     * const pageSection = await prisma.pageSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageSections and only return the `pageId`
     * const pageSectionWithPageIdOnly = await prisma.pageSection.createManyAndReturn({
     *   select: { pageId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, PageSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageSection.
     * @param {PageSectionDeleteArgs} args - Arguments to delete one PageSection.
     * @example
     * // Delete one PageSection
     * const PageSection = await prisma.pageSection.delete({
     *   where: {
     *     // ... filter to delete one PageSection
     *   }
     * })
     * 
     */
    delete<T extends PageSectionDeleteArgs>(args: SelectSubset<T, PageSectionDeleteArgs<ExtArgs>>): Prisma__PageSectionClient<$Result.GetResult<Prisma.$PageSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageSection.
     * @param {PageSectionUpdateArgs} args - Arguments to update one PageSection.
     * @example
     * // Update one PageSection
     * const pageSection = await prisma.pageSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageSectionUpdateArgs>(args: SelectSubset<T, PageSectionUpdateArgs<ExtArgs>>): Prisma__PageSectionClient<$Result.GetResult<Prisma.$PageSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageSections.
     * @param {PageSectionDeleteManyArgs} args - Arguments to filter PageSections to delete.
     * @example
     * // Delete a few PageSections
     * const { count } = await prisma.pageSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageSectionDeleteManyArgs>(args?: SelectSubset<T, PageSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageSections
     * const pageSection = await prisma.pageSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageSectionUpdateManyArgs>(args: SelectSubset<T, PageSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageSections and returns the data updated in the database.
     * @param {PageSectionUpdateManyAndReturnArgs} args - Arguments to update many PageSections.
     * @example
     * // Update many PageSections
     * const pageSection = await prisma.pageSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageSections and only return the `pageId`
     * const pageSectionWithPageIdOnly = await prisma.pageSection.updateManyAndReturn({
     *   select: { pageId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, PageSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageSection.
     * @param {PageSectionUpsertArgs} args - Arguments to update or create a PageSection.
     * @example
     * // Update or create a PageSection
     * const pageSection = await prisma.pageSection.upsert({
     *   create: {
     *     // ... data to create a PageSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageSection we want to update
     *   }
     * })
     */
    upsert<T extends PageSectionUpsertArgs>(args: SelectSubset<T, PageSectionUpsertArgs<ExtArgs>>): Prisma__PageSectionClient<$Result.GetResult<Prisma.$PageSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSectionCountArgs} args - Arguments to filter PageSections to count.
     * @example
     * // Count the number of PageSections
     * const count = await prisma.pageSection.count({
     *   where: {
     *     // ... the filter for the PageSections we want to count
     *   }
     * })
    **/
    count<T extends PageSectionCountArgs>(
      args?: Subset<T, PageSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageSectionAggregateArgs>(args: Subset<T, PageSectionAggregateArgs>): Prisma.PrismaPromise<GetPageSectionAggregateType<T>>

    /**
     * Group by PageSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSectionGroupByArgs} args - Group by arguments.
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
      T extends PageSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageSectionGroupByArgs['orderBy'] }
        : { orderBy?: PageSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PageSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageSection model
   */
  readonly fields: PageSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends PageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageDefaultArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PageSection model
   */ 
  interface PageSectionFieldRefs {
    readonly pageId: FieldRef<"PageSection", 'String'>
    readonly sectionId: FieldRef<"PageSection", 'String'>
    readonly position: FieldRef<"PageSection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PageSection findUnique
   */
  export type PageSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionInclude<ExtArgs> | null
    /**
     * Filter, which PageSection to fetch.
     */
    where: PageSectionWhereUniqueInput
  }

  /**
   * PageSection findUniqueOrThrow
   */
  export type PageSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionInclude<ExtArgs> | null
    /**
     * Filter, which PageSection to fetch.
     */
    where: PageSectionWhereUniqueInput
  }

  /**
   * PageSection findFirst
   */
  export type PageSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionInclude<ExtArgs> | null
    /**
     * Filter, which PageSection to fetch.
     */
    where?: PageSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageSections to fetch.
     */
    orderBy?: PageSectionOrderByWithRelationInput | PageSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageSections.
     */
    cursor?: PageSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageSections.
     */
    distinct?: PageSectionScalarFieldEnum | PageSectionScalarFieldEnum[]
  }

  /**
   * PageSection findFirstOrThrow
   */
  export type PageSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionInclude<ExtArgs> | null
    /**
     * Filter, which PageSection to fetch.
     */
    where?: PageSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageSections to fetch.
     */
    orderBy?: PageSectionOrderByWithRelationInput | PageSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageSections.
     */
    cursor?: PageSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageSections.
     */
    distinct?: PageSectionScalarFieldEnum | PageSectionScalarFieldEnum[]
  }

  /**
   * PageSection findMany
   */
  export type PageSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionInclude<ExtArgs> | null
    /**
     * Filter, which PageSections to fetch.
     */
    where?: PageSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageSections to fetch.
     */
    orderBy?: PageSectionOrderByWithRelationInput | PageSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageSections.
     */
    cursor?: PageSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageSections.
     */
    skip?: number
    distinct?: PageSectionScalarFieldEnum | PageSectionScalarFieldEnum[]
  }

  /**
   * PageSection create
   */
  export type PageSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a PageSection.
     */
    data: XOR<PageSectionCreateInput, PageSectionUncheckedCreateInput>
  }

  /**
   * PageSection createMany
   */
  export type PageSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageSections.
     */
    data: PageSectionCreateManyInput | PageSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageSection createManyAndReturn
   */
  export type PageSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * The data used to create many PageSections.
     */
    data: PageSectionCreateManyInput | PageSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageSection update
   */
  export type PageSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a PageSection.
     */
    data: XOR<PageSectionUpdateInput, PageSectionUncheckedUpdateInput>
    /**
     * Choose, which PageSection to update.
     */
    where: PageSectionWhereUniqueInput
  }

  /**
   * PageSection updateMany
   */
  export type PageSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageSections.
     */
    data: XOR<PageSectionUpdateManyMutationInput, PageSectionUncheckedUpdateManyInput>
    /**
     * Filter which PageSections to update
     */
    where?: PageSectionWhereInput
    /**
     * Limit how many PageSections to update.
     */
    limit?: number
  }

  /**
   * PageSection updateManyAndReturn
   */
  export type PageSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * The data used to update PageSections.
     */
    data: XOR<PageSectionUpdateManyMutationInput, PageSectionUncheckedUpdateManyInput>
    /**
     * Filter which PageSections to update
     */
    where?: PageSectionWhereInput
    /**
     * Limit how many PageSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageSection upsert
   */
  export type PageSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the PageSection to update in case it exists.
     */
    where: PageSectionWhereUniqueInput
    /**
     * In case the PageSection found by the `where` argument doesn't exist, create a new PageSection with this data.
     */
    create: XOR<PageSectionCreateInput, PageSectionUncheckedCreateInput>
    /**
     * In case the PageSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageSectionUpdateInput, PageSectionUncheckedUpdateInput>
  }

  /**
   * PageSection delete
   */
  export type PageSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionInclude<ExtArgs> | null
    /**
     * Filter which PageSection to delete.
     */
    where: PageSectionWhereUniqueInput
  }

  /**
   * PageSection deleteMany
   */
  export type PageSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageSections to delete
     */
    where?: PageSectionWhereInput
    /**
     * Limit how many PageSections to delete.
     */
    limit?: number
  }

  /**
   * PageSection without action
   */
  export type PageSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSection
     */
    select?: PageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageSection
     */
    omit?: PageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageSectionInclude<ExtArgs> | null
  }


  /**
   * Model Element
   */

  export type AggregateElement = {
    _count: ElementCountAggregateOutputType | null
    _min: ElementMinAggregateOutputType | null
    _max: ElementMaxAggregateOutputType | null
  }

  export type ElementMinAggregateOutputType = {
    id: string | null
    tag: string | null
    key: string | null
    className: string | null
    content: string | null
    src: string | null
    alt: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ElementMaxAggregateOutputType = {
    id: string | null
    tag: string | null
    key: string | null
    className: string | null
    content: string | null
    src: string | null
    alt: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ElementCountAggregateOutputType = {
    id: number
    tag: number
    key: number
    className: number
    content: number
    src: number
    alt: number
    link: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ElementMinAggregateInputType = {
    id?: true
    tag?: true
    key?: true
    className?: true
    content?: true
    src?: true
    alt?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ElementMaxAggregateInputType = {
    id?: true
    tag?: true
    key?: true
    className?: true
    content?: true
    src?: true
    alt?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ElementCountAggregateInputType = {
    id?: true
    tag?: true
    key?: true
    className?: true
    content?: true
    src?: true
    alt?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ElementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Element to aggregate.
     */
    where?: ElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elements to fetch.
     */
    orderBy?: ElementOrderByWithRelationInput | ElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Elements
    **/
    _count?: true | ElementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElementMaxAggregateInputType
  }

  export type GetElementAggregateType<T extends ElementAggregateArgs> = {
        [P in keyof T & keyof AggregateElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElement[P]>
      : GetScalarType<T[P], AggregateElement[P]>
  }




  export type ElementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElementWhereInput
    orderBy?: ElementOrderByWithAggregationInput | ElementOrderByWithAggregationInput[]
    by: ElementScalarFieldEnum[] | ElementScalarFieldEnum
    having?: ElementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElementCountAggregateInputType | true
    _min?: ElementMinAggregateInputType
    _max?: ElementMaxAggregateInputType
  }

  export type ElementGroupByOutputType = {
    id: string
    tag: string
    key: string | null
    className: string | null
    content: string | null
    src: string | null
    alt: string | null
    link: string | null
    createdAt: Date
    updatedAt: Date
    _count: ElementCountAggregateOutputType | null
    _min: ElementMinAggregateOutputType | null
    _max: ElementMaxAggregateOutputType | null
  }

  type GetElementGroupByPayload<T extends ElementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElementGroupByOutputType[P]>
            : GetScalarType<T[P], ElementGroupByOutputType[P]>
        }
      >
    >


  export type ElementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag?: boolean
    key?: boolean
    className?: boolean
    content?: boolean
    src?: boolean
    alt?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sections?: boolean | Element$sectionsArgs<ExtArgs>
    children?: boolean | Element$childrenArgs<ExtArgs>
    parents?: boolean | Element$parentsArgs<ExtArgs>
    _count?: boolean | ElementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["element"]>

  export type ElementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag?: boolean
    key?: boolean
    className?: boolean
    content?: boolean
    src?: boolean
    alt?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["element"]>

  export type ElementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag?: boolean
    key?: boolean
    className?: boolean
    content?: boolean
    src?: boolean
    alt?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["element"]>

  export type ElementSelectScalar = {
    id?: boolean
    tag?: boolean
    key?: boolean
    className?: boolean
    content?: boolean
    src?: boolean
    alt?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ElementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tag" | "key" | "className" | "content" | "src" | "alt" | "link" | "createdAt" | "updatedAt", ExtArgs["result"]["element"]>
  export type ElementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | Element$sectionsArgs<ExtArgs>
    children?: boolean | Element$childrenArgs<ExtArgs>
    parents?: boolean | Element$parentsArgs<ExtArgs>
    _count?: boolean | ElementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ElementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ElementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ElementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Element"
    objects: {
      sections: Prisma.$SectionElementPayload<ExtArgs>[]
      children: Prisma.$ElementChildPayload<ExtArgs>[]
      parents: Prisma.$ElementChildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tag: string
      key: string | null
      className: string | null
      content: string | null
      src: string | null
      alt: string | null
      link: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["element"]>
    composites: {}
  }

  type ElementGetPayload<S extends boolean | null | undefined | ElementDefaultArgs> = $Result.GetResult<Prisma.$ElementPayload, S>

  type ElementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElementCountAggregateInputType | true
    }

  export interface ElementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Element'], meta: { name: 'Element' } }
    /**
     * Find zero or one Element that matches the filter.
     * @param {ElementFindUniqueArgs} args - Arguments to find a Element
     * @example
     * // Get one Element
     * const element = await prisma.element.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElementFindUniqueArgs>(args: SelectSubset<T, ElementFindUniqueArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Element that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElementFindUniqueOrThrowArgs} args - Arguments to find a Element
     * @example
     * // Get one Element
     * const element = await prisma.element.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElementFindUniqueOrThrowArgs>(args: SelectSubset<T, ElementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Element that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementFindFirstArgs} args - Arguments to find a Element
     * @example
     * // Get one Element
     * const element = await prisma.element.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElementFindFirstArgs>(args?: SelectSubset<T, ElementFindFirstArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Element that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementFindFirstOrThrowArgs} args - Arguments to find a Element
     * @example
     * // Get one Element
     * const element = await prisma.element.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElementFindFirstOrThrowArgs>(args?: SelectSubset<T, ElementFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Elements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elements
     * const elements = await prisma.element.findMany()
     * 
     * // Get first 10 Elements
     * const elements = await prisma.element.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const elementWithIdOnly = await prisma.element.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ElementFindManyArgs>(args?: SelectSubset<T, ElementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Element.
     * @param {ElementCreateArgs} args - Arguments to create a Element.
     * @example
     * // Create one Element
     * const Element = await prisma.element.create({
     *   data: {
     *     // ... data to create a Element
     *   }
     * })
     * 
     */
    create<T extends ElementCreateArgs>(args: SelectSubset<T, ElementCreateArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Elements.
     * @param {ElementCreateManyArgs} args - Arguments to create many Elements.
     * @example
     * // Create many Elements
     * const element = await prisma.element.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElementCreateManyArgs>(args?: SelectSubset<T, ElementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Elements and returns the data saved in the database.
     * @param {ElementCreateManyAndReturnArgs} args - Arguments to create many Elements.
     * @example
     * // Create many Elements
     * const element = await prisma.element.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Elements and only return the `id`
     * const elementWithIdOnly = await prisma.element.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ElementCreateManyAndReturnArgs>(args?: SelectSubset<T, ElementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Element.
     * @param {ElementDeleteArgs} args - Arguments to delete one Element.
     * @example
     * // Delete one Element
     * const Element = await prisma.element.delete({
     *   where: {
     *     // ... filter to delete one Element
     *   }
     * })
     * 
     */
    delete<T extends ElementDeleteArgs>(args: SelectSubset<T, ElementDeleteArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Element.
     * @param {ElementUpdateArgs} args - Arguments to update one Element.
     * @example
     * // Update one Element
     * const element = await prisma.element.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElementUpdateArgs>(args: SelectSubset<T, ElementUpdateArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Elements.
     * @param {ElementDeleteManyArgs} args - Arguments to filter Elements to delete.
     * @example
     * // Delete a few Elements
     * const { count } = await prisma.element.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElementDeleteManyArgs>(args?: SelectSubset<T, ElementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elements
     * const element = await prisma.element.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElementUpdateManyArgs>(args: SelectSubset<T, ElementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elements and returns the data updated in the database.
     * @param {ElementUpdateManyAndReturnArgs} args - Arguments to update many Elements.
     * @example
     * // Update many Elements
     * const element = await prisma.element.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Elements and only return the `id`
     * const elementWithIdOnly = await prisma.element.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ElementUpdateManyAndReturnArgs>(args: SelectSubset<T, ElementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Element.
     * @param {ElementUpsertArgs} args - Arguments to update or create a Element.
     * @example
     * // Update or create a Element
     * const element = await prisma.element.upsert({
     *   create: {
     *     // ... data to create a Element
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Element we want to update
     *   }
     * })
     */
    upsert<T extends ElementUpsertArgs>(args: SelectSubset<T, ElementUpsertArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Elements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementCountArgs} args - Arguments to filter Elements to count.
     * @example
     * // Count the number of Elements
     * const count = await prisma.element.count({
     *   where: {
     *     // ... the filter for the Elements we want to count
     *   }
     * })
    **/
    count<T extends ElementCountArgs>(
      args?: Subset<T, ElementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Element.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ElementAggregateArgs>(args: Subset<T, ElementAggregateArgs>): Prisma.PrismaPromise<GetElementAggregateType<T>>

    /**
     * Group by Element.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementGroupByArgs} args - Group by arguments.
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
      T extends ElementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElementGroupByArgs['orderBy'] }
        : { orderBy?: ElementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ElementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Element model
   */
  readonly fields: ElementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Element.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends Element$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Element$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    children<T extends Element$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Element$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parents<T extends Element$parentsArgs<ExtArgs> = {}>(args?: Subset<T, Element$parentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Element model
   */ 
  interface ElementFieldRefs {
    readonly id: FieldRef<"Element", 'String'>
    readonly tag: FieldRef<"Element", 'String'>
    readonly key: FieldRef<"Element", 'String'>
    readonly className: FieldRef<"Element", 'String'>
    readonly content: FieldRef<"Element", 'String'>
    readonly src: FieldRef<"Element", 'String'>
    readonly alt: FieldRef<"Element", 'String'>
    readonly link: FieldRef<"Element", 'String'>
    readonly createdAt: FieldRef<"Element", 'DateTime'>
    readonly updatedAt: FieldRef<"Element", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Element findUnique
   */
  export type ElementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * Filter, which Element to fetch.
     */
    where: ElementWhereUniqueInput
  }

  /**
   * Element findUniqueOrThrow
   */
  export type ElementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * Filter, which Element to fetch.
     */
    where: ElementWhereUniqueInput
  }

  /**
   * Element findFirst
   */
  export type ElementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * Filter, which Element to fetch.
     */
    where?: ElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elements to fetch.
     */
    orderBy?: ElementOrderByWithRelationInput | ElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elements.
     */
    cursor?: ElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elements.
     */
    distinct?: ElementScalarFieldEnum | ElementScalarFieldEnum[]
  }

  /**
   * Element findFirstOrThrow
   */
  export type ElementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * Filter, which Element to fetch.
     */
    where?: ElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elements to fetch.
     */
    orderBy?: ElementOrderByWithRelationInput | ElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elements.
     */
    cursor?: ElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elements.
     */
    distinct?: ElementScalarFieldEnum | ElementScalarFieldEnum[]
  }

  /**
   * Element findMany
   */
  export type ElementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * Filter, which Elements to fetch.
     */
    where?: ElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elements to fetch.
     */
    orderBy?: ElementOrderByWithRelationInput | ElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Elements.
     */
    cursor?: ElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elements.
     */
    skip?: number
    distinct?: ElementScalarFieldEnum | ElementScalarFieldEnum[]
  }

  /**
   * Element create
   */
  export type ElementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * The data needed to create a Element.
     */
    data: XOR<ElementCreateInput, ElementUncheckedCreateInput>
  }

  /**
   * Element createMany
   */
  export type ElementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Elements.
     */
    data: ElementCreateManyInput | ElementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Element createManyAndReturn
   */
  export type ElementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * The data used to create many Elements.
     */
    data: ElementCreateManyInput | ElementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Element update
   */
  export type ElementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * The data needed to update a Element.
     */
    data: XOR<ElementUpdateInput, ElementUncheckedUpdateInput>
    /**
     * Choose, which Element to update.
     */
    where: ElementWhereUniqueInput
  }

  /**
   * Element updateMany
   */
  export type ElementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Elements.
     */
    data: XOR<ElementUpdateManyMutationInput, ElementUncheckedUpdateManyInput>
    /**
     * Filter which Elements to update
     */
    where?: ElementWhereInput
    /**
     * Limit how many Elements to update.
     */
    limit?: number
  }

  /**
   * Element updateManyAndReturn
   */
  export type ElementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * The data used to update Elements.
     */
    data: XOR<ElementUpdateManyMutationInput, ElementUncheckedUpdateManyInput>
    /**
     * Filter which Elements to update
     */
    where?: ElementWhereInput
    /**
     * Limit how many Elements to update.
     */
    limit?: number
  }

  /**
   * Element upsert
   */
  export type ElementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * The filter to search for the Element to update in case it exists.
     */
    where: ElementWhereUniqueInput
    /**
     * In case the Element found by the `where` argument doesn't exist, create a new Element with this data.
     */
    create: XOR<ElementCreateInput, ElementUncheckedCreateInput>
    /**
     * In case the Element was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElementUpdateInput, ElementUncheckedUpdateInput>
  }

  /**
   * Element delete
   */
  export type ElementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
    /**
     * Filter which Element to delete.
     */
    where: ElementWhereUniqueInput
  }

  /**
   * Element deleteMany
   */
  export type ElementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Elements to delete
     */
    where?: ElementWhereInput
    /**
     * Limit how many Elements to delete.
     */
    limit?: number
  }

  /**
   * Element.sections
   */
  export type Element$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementInclude<ExtArgs> | null
    where?: SectionElementWhereInput
    orderBy?: SectionElementOrderByWithRelationInput | SectionElementOrderByWithRelationInput[]
    cursor?: SectionElementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionElementScalarFieldEnum | SectionElementScalarFieldEnum[]
  }

  /**
   * Element.children
   */
  export type Element$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildInclude<ExtArgs> | null
    where?: ElementChildWhereInput
    orderBy?: ElementChildOrderByWithRelationInput | ElementChildOrderByWithRelationInput[]
    cursor?: ElementChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElementChildScalarFieldEnum | ElementChildScalarFieldEnum[]
  }

  /**
   * Element.parents
   */
  export type Element$parentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildInclude<ExtArgs> | null
    where?: ElementChildWhereInput
    orderBy?: ElementChildOrderByWithRelationInput | ElementChildOrderByWithRelationInput[]
    cursor?: ElementChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElementChildScalarFieldEnum | ElementChildScalarFieldEnum[]
  }

  /**
   * Element without action
   */
  export type ElementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null
  }


  /**
   * Model SectionElement
   */

  export type AggregateSectionElement = {
    _count: SectionElementCountAggregateOutputType | null
    _avg: SectionElementAvgAggregateOutputType | null
    _sum: SectionElementSumAggregateOutputType | null
    _min: SectionElementMinAggregateOutputType | null
    _max: SectionElementMaxAggregateOutputType | null
  }

  export type SectionElementAvgAggregateOutputType = {
    position: number | null
  }

  export type SectionElementSumAggregateOutputType = {
    position: number | null
  }

  export type SectionElementMinAggregateOutputType = {
    sectionId: string | null
    elementId: string | null
    position: number | null
  }

  export type SectionElementMaxAggregateOutputType = {
    sectionId: string | null
    elementId: string | null
    position: number | null
  }

  export type SectionElementCountAggregateOutputType = {
    sectionId: number
    elementId: number
    position: number
    _all: number
  }


  export type SectionElementAvgAggregateInputType = {
    position?: true
  }

  export type SectionElementSumAggregateInputType = {
    position?: true
  }

  export type SectionElementMinAggregateInputType = {
    sectionId?: true
    elementId?: true
    position?: true
  }

  export type SectionElementMaxAggregateInputType = {
    sectionId?: true
    elementId?: true
    position?: true
  }

  export type SectionElementCountAggregateInputType = {
    sectionId?: true
    elementId?: true
    position?: true
    _all?: true
  }

  export type SectionElementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionElement to aggregate.
     */
    where?: SectionElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionElements to fetch.
     */
    orderBy?: SectionElementOrderByWithRelationInput | SectionElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SectionElements
    **/
    _count?: true | SectionElementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionElementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionElementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionElementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionElementMaxAggregateInputType
  }

  export type GetSectionElementAggregateType<T extends SectionElementAggregateArgs> = {
        [P in keyof T & keyof AggregateSectionElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSectionElement[P]>
      : GetScalarType<T[P], AggregateSectionElement[P]>
  }




  export type SectionElementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionElementWhereInput
    orderBy?: SectionElementOrderByWithAggregationInput | SectionElementOrderByWithAggregationInput[]
    by: SectionElementScalarFieldEnum[] | SectionElementScalarFieldEnum
    having?: SectionElementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionElementCountAggregateInputType | true
    _avg?: SectionElementAvgAggregateInputType
    _sum?: SectionElementSumAggregateInputType
    _min?: SectionElementMinAggregateInputType
    _max?: SectionElementMaxAggregateInputType
  }

  export type SectionElementGroupByOutputType = {
    sectionId: string
    elementId: string
    position: number
    _count: SectionElementCountAggregateOutputType | null
    _avg: SectionElementAvgAggregateOutputType | null
    _sum: SectionElementSumAggregateOutputType | null
    _min: SectionElementMinAggregateOutputType | null
    _max: SectionElementMaxAggregateOutputType | null
  }

  type GetSectionElementGroupByPayload<T extends SectionElementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionElementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionElementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionElementGroupByOutputType[P]>
            : GetScalarType<T[P], SectionElementGroupByOutputType[P]>
        }
      >
    >


  export type SectionElementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    elementId?: boolean
    position?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    element?: boolean | ElementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionElement"]>

  export type SectionElementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    elementId?: boolean
    position?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    element?: boolean | ElementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionElement"]>

  export type SectionElementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    elementId?: boolean
    position?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    element?: boolean | ElementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionElement"]>

  export type SectionElementSelectScalar = {
    sectionId?: boolean
    elementId?: boolean
    position?: boolean
  }

  export type SectionElementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sectionId" | "elementId" | "position", ExtArgs["result"]["sectionElement"]>
  export type SectionElementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    element?: boolean | ElementDefaultArgs<ExtArgs>
  }
  export type SectionElementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    element?: boolean | ElementDefaultArgs<ExtArgs>
  }
  export type SectionElementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    element?: boolean | ElementDefaultArgs<ExtArgs>
  }

  export type $SectionElementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SectionElement"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
      element: Prisma.$ElementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sectionId: string
      elementId: string
      position: number
    }, ExtArgs["result"]["sectionElement"]>
    composites: {}
  }

  type SectionElementGetPayload<S extends boolean | null | undefined | SectionElementDefaultArgs> = $Result.GetResult<Prisma.$SectionElementPayload, S>

  type SectionElementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionElementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionElementCountAggregateInputType | true
    }

  export interface SectionElementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SectionElement'], meta: { name: 'SectionElement' } }
    /**
     * Find zero or one SectionElement that matches the filter.
     * @param {SectionElementFindUniqueArgs} args - Arguments to find a SectionElement
     * @example
     * // Get one SectionElement
     * const sectionElement = await prisma.sectionElement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionElementFindUniqueArgs>(args: SelectSubset<T, SectionElementFindUniqueArgs<ExtArgs>>): Prisma__SectionElementClient<$Result.GetResult<Prisma.$SectionElementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SectionElement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionElementFindUniqueOrThrowArgs} args - Arguments to find a SectionElement
     * @example
     * // Get one SectionElement
     * const sectionElement = await prisma.sectionElement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionElementFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionElementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionElementClient<$Result.GetResult<Prisma.$SectionElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionElement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionElementFindFirstArgs} args - Arguments to find a SectionElement
     * @example
     * // Get one SectionElement
     * const sectionElement = await prisma.sectionElement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionElementFindFirstArgs>(args?: SelectSubset<T, SectionElementFindFirstArgs<ExtArgs>>): Prisma__SectionElementClient<$Result.GetResult<Prisma.$SectionElementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionElement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionElementFindFirstOrThrowArgs} args - Arguments to find a SectionElement
     * @example
     * // Get one SectionElement
     * const sectionElement = await prisma.sectionElement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionElementFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionElementFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionElementClient<$Result.GetResult<Prisma.$SectionElementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SectionElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionElementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SectionElements
     * const sectionElements = await prisma.sectionElement.findMany()
     * 
     * // Get first 10 SectionElements
     * const sectionElements = await prisma.sectionElement.findMany({ take: 10 })
     * 
     * // Only select the `sectionId`
     * const sectionElementWithSectionIdOnly = await prisma.sectionElement.findMany({ select: { sectionId: true } })
     * 
     */
    findMany<T extends SectionElementFindManyArgs>(args?: SelectSubset<T, SectionElementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SectionElement.
     * @param {SectionElementCreateArgs} args - Arguments to create a SectionElement.
     * @example
     * // Create one SectionElement
     * const SectionElement = await prisma.sectionElement.create({
     *   data: {
     *     // ... data to create a SectionElement
     *   }
     * })
     * 
     */
    create<T extends SectionElementCreateArgs>(args: SelectSubset<T, SectionElementCreateArgs<ExtArgs>>): Prisma__SectionElementClient<$Result.GetResult<Prisma.$SectionElementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SectionElements.
     * @param {SectionElementCreateManyArgs} args - Arguments to create many SectionElements.
     * @example
     * // Create many SectionElements
     * const sectionElement = await prisma.sectionElement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionElementCreateManyArgs>(args?: SelectSubset<T, SectionElementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SectionElements and returns the data saved in the database.
     * @param {SectionElementCreateManyAndReturnArgs} args - Arguments to create many SectionElements.
     * @example
     * // Create many SectionElements
     * const sectionElement = await prisma.sectionElement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SectionElements and only return the `sectionId`
     * const sectionElementWithSectionIdOnly = await prisma.sectionElement.createManyAndReturn({
     *   select: { sectionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionElementCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionElementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionElementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SectionElement.
     * @param {SectionElementDeleteArgs} args - Arguments to delete one SectionElement.
     * @example
     * // Delete one SectionElement
     * const SectionElement = await prisma.sectionElement.delete({
     *   where: {
     *     // ... filter to delete one SectionElement
     *   }
     * })
     * 
     */
    delete<T extends SectionElementDeleteArgs>(args: SelectSubset<T, SectionElementDeleteArgs<ExtArgs>>): Prisma__SectionElementClient<$Result.GetResult<Prisma.$SectionElementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SectionElement.
     * @param {SectionElementUpdateArgs} args - Arguments to update one SectionElement.
     * @example
     * // Update one SectionElement
     * const sectionElement = await prisma.sectionElement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionElementUpdateArgs>(args: SelectSubset<T, SectionElementUpdateArgs<ExtArgs>>): Prisma__SectionElementClient<$Result.GetResult<Prisma.$SectionElementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SectionElements.
     * @param {SectionElementDeleteManyArgs} args - Arguments to filter SectionElements to delete.
     * @example
     * // Delete a few SectionElements
     * const { count } = await prisma.sectionElement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionElementDeleteManyArgs>(args?: SelectSubset<T, SectionElementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SectionElements
     * const sectionElement = await prisma.sectionElement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionElementUpdateManyArgs>(args: SelectSubset<T, SectionElementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionElements and returns the data updated in the database.
     * @param {SectionElementUpdateManyAndReturnArgs} args - Arguments to update many SectionElements.
     * @example
     * // Update many SectionElements
     * const sectionElement = await prisma.sectionElement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SectionElements and only return the `sectionId`
     * const sectionElementWithSectionIdOnly = await prisma.sectionElement.updateManyAndReturn({
     *   select: { sectionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionElementUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionElementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionElementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SectionElement.
     * @param {SectionElementUpsertArgs} args - Arguments to update or create a SectionElement.
     * @example
     * // Update or create a SectionElement
     * const sectionElement = await prisma.sectionElement.upsert({
     *   create: {
     *     // ... data to create a SectionElement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SectionElement we want to update
     *   }
     * })
     */
    upsert<T extends SectionElementUpsertArgs>(args: SelectSubset<T, SectionElementUpsertArgs<ExtArgs>>): Prisma__SectionElementClient<$Result.GetResult<Prisma.$SectionElementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SectionElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionElementCountArgs} args - Arguments to filter SectionElements to count.
     * @example
     * // Count the number of SectionElements
     * const count = await prisma.sectionElement.count({
     *   where: {
     *     // ... the filter for the SectionElements we want to count
     *   }
     * })
    **/
    count<T extends SectionElementCountArgs>(
      args?: Subset<T, SectionElementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionElementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SectionElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionElementAggregateArgs>(args: Subset<T, SectionElementAggregateArgs>): Prisma.PrismaPromise<GetSectionElementAggregateType<T>>

    /**
     * Group by SectionElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionElementGroupByArgs} args - Group by arguments.
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
      T extends SectionElementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionElementGroupByArgs['orderBy'] }
        : { orderBy?: SectionElementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SectionElementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionElementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SectionElement model
   */
  readonly fields: SectionElementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SectionElement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionElementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    element<T extends ElementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElementDefaultArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SectionElement model
   */ 
  interface SectionElementFieldRefs {
    readonly sectionId: FieldRef<"SectionElement", 'String'>
    readonly elementId: FieldRef<"SectionElement", 'String'>
    readonly position: FieldRef<"SectionElement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SectionElement findUnique
   */
  export type SectionElementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementInclude<ExtArgs> | null
    /**
     * Filter, which SectionElement to fetch.
     */
    where: SectionElementWhereUniqueInput
  }

  /**
   * SectionElement findUniqueOrThrow
   */
  export type SectionElementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementInclude<ExtArgs> | null
    /**
     * Filter, which SectionElement to fetch.
     */
    where: SectionElementWhereUniqueInput
  }

  /**
   * SectionElement findFirst
   */
  export type SectionElementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementInclude<ExtArgs> | null
    /**
     * Filter, which SectionElement to fetch.
     */
    where?: SectionElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionElements to fetch.
     */
    orderBy?: SectionElementOrderByWithRelationInput | SectionElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionElements.
     */
    cursor?: SectionElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionElements.
     */
    distinct?: SectionElementScalarFieldEnum | SectionElementScalarFieldEnum[]
  }

  /**
   * SectionElement findFirstOrThrow
   */
  export type SectionElementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementInclude<ExtArgs> | null
    /**
     * Filter, which SectionElement to fetch.
     */
    where?: SectionElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionElements to fetch.
     */
    orderBy?: SectionElementOrderByWithRelationInput | SectionElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionElements.
     */
    cursor?: SectionElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionElements.
     */
    distinct?: SectionElementScalarFieldEnum | SectionElementScalarFieldEnum[]
  }

  /**
   * SectionElement findMany
   */
  export type SectionElementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementInclude<ExtArgs> | null
    /**
     * Filter, which SectionElements to fetch.
     */
    where?: SectionElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionElements to fetch.
     */
    orderBy?: SectionElementOrderByWithRelationInput | SectionElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SectionElements.
     */
    cursor?: SectionElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionElements.
     */
    skip?: number
    distinct?: SectionElementScalarFieldEnum | SectionElementScalarFieldEnum[]
  }

  /**
   * SectionElement create
   */
  export type SectionElementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementInclude<ExtArgs> | null
    /**
     * The data needed to create a SectionElement.
     */
    data: XOR<SectionElementCreateInput, SectionElementUncheckedCreateInput>
  }

  /**
   * SectionElement createMany
   */
  export type SectionElementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SectionElements.
     */
    data: SectionElementCreateManyInput | SectionElementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SectionElement createManyAndReturn
   */
  export type SectionElementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * The data used to create many SectionElements.
     */
    data: SectionElementCreateManyInput | SectionElementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionElement update
   */
  export type SectionElementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementInclude<ExtArgs> | null
    /**
     * The data needed to update a SectionElement.
     */
    data: XOR<SectionElementUpdateInput, SectionElementUncheckedUpdateInput>
    /**
     * Choose, which SectionElement to update.
     */
    where: SectionElementWhereUniqueInput
  }

  /**
   * SectionElement updateMany
   */
  export type SectionElementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SectionElements.
     */
    data: XOR<SectionElementUpdateManyMutationInput, SectionElementUncheckedUpdateManyInput>
    /**
     * Filter which SectionElements to update
     */
    where?: SectionElementWhereInput
    /**
     * Limit how many SectionElements to update.
     */
    limit?: number
  }

  /**
   * SectionElement updateManyAndReturn
   */
  export type SectionElementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * The data used to update SectionElements.
     */
    data: XOR<SectionElementUpdateManyMutationInput, SectionElementUncheckedUpdateManyInput>
    /**
     * Filter which SectionElements to update
     */
    where?: SectionElementWhereInput
    /**
     * Limit how many SectionElements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionElement upsert
   */
  export type SectionElementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementInclude<ExtArgs> | null
    /**
     * The filter to search for the SectionElement to update in case it exists.
     */
    where: SectionElementWhereUniqueInput
    /**
     * In case the SectionElement found by the `where` argument doesn't exist, create a new SectionElement with this data.
     */
    create: XOR<SectionElementCreateInput, SectionElementUncheckedCreateInput>
    /**
     * In case the SectionElement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionElementUpdateInput, SectionElementUncheckedUpdateInput>
  }

  /**
   * SectionElement delete
   */
  export type SectionElementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementInclude<ExtArgs> | null
    /**
     * Filter which SectionElement to delete.
     */
    where: SectionElementWhereUniqueInput
  }

  /**
   * SectionElement deleteMany
   */
  export type SectionElementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionElements to delete
     */
    where?: SectionElementWhereInput
    /**
     * Limit how many SectionElements to delete.
     */
    limit?: number
  }

  /**
   * SectionElement without action
   */
  export type SectionElementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionElement
     */
    select?: SectionElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionElement
     */
    omit?: SectionElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionElementInclude<ExtArgs> | null
  }


  /**
   * Model ElementChild
   */

  export type AggregateElementChild = {
    _count: ElementChildCountAggregateOutputType | null
    _avg: ElementChildAvgAggregateOutputType | null
    _sum: ElementChildSumAggregateOutputType | null
    _min: ElementChildMinAggregateOutputType | null
    _max: ElementChildMaxAggregateOutputType | null
  }

  export type ElementChildAvgAggregateOutputType = {
    position: number | null
  }

  export type ElementChildSumAggregateOutputType = {
    position: number | null
  }

  export type ElementChildMinAggregateOutputType = {
    parentId: string | null
    childId: string | null
    position: number | null
  }

  export type ElementChildMaxAggregateOutputType = {
    parentId: string | null
    childId: string | null
    position: number | null
  }

  export type ElementChildCountAggregateOutputType = {
    parentId: number
    childId: number
    position: number
    _all: number
  }


  export type ElementChildAvgAggregateInputType = {
    position?: true
  }

  export type ElementChildSumAggregateInputType = {
    position?: true
  }

  export type ElementChildMinAggregateInputType = {
    parentId?: true
    childId?: true
    position?: true
  }

  export type ElementChildMaxAggregateInputType = {
    parentId?: true
    childId?: true
    position?: true
  }

  export type ElementChildCountAggregateInputType = {
    parentId?: true
    childId?: true
    position?: true
    _all?: true
  }

  export type ElementChildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElementChild to aggregate.
     */
    where?: ElementChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElementChildren to fetch.
     */
    orderBy?: ElementChildOrderByWithRelationInput | ElementChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElementChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElementChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElementChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ElementChildren
    **/
    _count?: true | ElementChildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElementChildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElementChildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElementChildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElementChildMaxAggregateInputType
  }

  export type GetElementChildAggregateType<T extends ElementChildAggregateArgs> = {
        [P in keyof T & keyof AggregateElementChild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElementChild[P]>
      : GetScalarType<T[P], AggregateElementChild[P]>
  }




  export type ElementChildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElementChildWhereInput
    orderBy?: ElementChildOrderByWithAggregationInput | ElementChildOrderByWithAggregationInput[]
    by: ElementChildScalarFieldEnum[] | ElementChildScalarFieldEnum
    having?: ElementChildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElementChildCountAggregateInputType | true
    _avg?: ElementChildAvgAggregateInputType
    _sum?: ElementChildSumAggregateInputType
    _min?: ElementChildMinAggregateInputType
    _max?: ElementChildMaxAggregateInputType
  }

  export type ElementChildGroupByOutputType = {
    parentId: string
    childId: string
    position: number
    _count: ElementChildCountAggregateOutputType | null
    _avg: ElementChildAvgAggregateOutputType | null
    _sum: ElementChildSumAggregateOutputType | null
    _min: ElementChildMinAggregateOutputType | null
    _max: ElementChildMaxAggregateOutputType | null
  }

  type GetElementChildGroupByPayload<T extends ElementChildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElementChildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElementChildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElementChildGroupByOutputType[P]>
            : GetScalarType<T[P], ElementChildGroupByOutputType[P]>
        }
      >
    >


  export type ElementChildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parentId?: boolean
    childId?: boolean
    position?: boolean
    parent?: boolean | ElementDefaultArgs<ExtArgs>
    child?: boolean | ElementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elementChild"]>

  export type ElementChildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parentId?: boolean
    childId?: boolean
    position?: boolean
    parent?: boolean | ElementDefaultArgs<ExtArgs>
    child?: boolean | ElementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elementChild"]>

  export type ElementChildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parentId?: boolean
    childId?: boolean
    position?: boolean
    parent?: boolean | ElementDefaultArgs<ExtArgs>
    child?: boolean | ElementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elementChild"]>

  export type ElementChildSelectScalar = {
    parentId?: boolean
    childId?: boolean
    position?: boolean
  }

  export type ElementChildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"parentId" | "childId" | "position", ExtArgs["result"]["elementChild"]>
  export type ElementChildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ElementDefaultArgs<ExtArgs>
    child?: boolean | ElementDefaultArgs<ExtArgs>
  }
  export type ElementChildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ElementDefaultArgs<ExtArgs>
    child?: boolean | ElementDefaultArgs<ExtArgs>
  }
  export type ElementChildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ElementDefaultArgs<ExtArgs>
    child?: boolean | ElementDefaultArgs<ExtArgs>
  }

  export type $ElementChildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ElementChild"
    objects: {
      parent: Prisma.$ElementPayload<ExtArgs>
      child: Prisma.$ElementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      parentId: string
      childId: string
      position: number
    }, ExtArgs["result"]["elementChild"]>
    composites: {}
  }

  type ElementChildGetPayload<S extends boolean | null | undefined | ElementChildDefaultArgs> = $Result.GetResult<Prisma.$ElementChildPayload, S>

  type ElementChildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElementChildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElementChildCountAggregateInputType | true
    }

  export interface ElementChildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ElementChild'], meta: { name: 'ElementChild' } }
    /**
     * Find zero or one ElementChild that matches the filter.
     * @param {ElementChildFindUniqueArgs} args - Arguments to find a ElementChild
     * @example
     * // Get one ElementChild
     * const elementChild = await prisma.elementChild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElementChildFindUniqueArgs>(args: SelectSubset<T, ElementChildFindUniqueArgs<ExtArgs>>): Prisma__ElementChildClient<$Result.GetResult<Prisma.$ElementChildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ElementChild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElementChildFindUniqueOrThrowArgs} args - Arguments to find a ElementChild
     * @example
     * // Get one ElementChild
     * const elementChild = await prisma.elementChild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElementChildFindUniqueOrThrowArgs>(args: SelectSubset<T, ElementChildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElementChildClient<$Result.GetResult<Prisma.$ElementChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElementChild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementChildFindFirstArgs} args - Arguments to find a ElementChild
     * @example
     * // Get one ElementChild
     * const elementChild = await prisma.elementChild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElementChildFindFirstArgs>(args?: SelectSubset<T, ElementChildFindFirstArgs<ExtArgs>>): Prisma__ElementChildClient<$Result.GetResult<Prisma.$ElementChildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElementChild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementChildFindFirstOrThrowArgs} args - Arguments to find a ElementChild
     * @example
     * // Get one ElementChild
     * const elementChild = await prisma.elementChild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElementChildFindFirstOrThrowArgs>(args?: SelectSubset<T, ElementChildFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElementChildClient<$Result.GetResult<Prisma.$ElementChildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ElementChildren that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementChildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ElementChildren
     * const elementChildren = await prisma.elementChild.findMany()
     * 
     * // Get first 10 ElementChildren
     * const elementChildren = await prisma.elementChild.findMany({ take: 10 })
     * 
     * // Only select the `parentId`
     * const elementChildWithParentIdOnly = await prisma.elementChild.findMany({ select: { parentId: true } })
     * 
     */
    findMany<T extends ElementChildFindManyArgs>(args?: SelectSubset<T, ElementChildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ElementChild.
     * @param {ElementChildCreateArgs} args - Arguments to create a ElementChild.
     * @example
     * // Create one ElementChild
     * const ElementChild = await prisma.elementChild.create({
     *   data: {
     *     // ... data to create a ElementChild
     *   }
     * })
     * 
     */
    create<T extends ElementChildCreateArgs>(args: SelectSubset<T, ElementChildCreateArgs<ExtArgs>>): Prisma__ElementChildClient<$Result.GetResult<Prisma.$ElementChildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ElementChildren.
     * @param {ElementChildCreateManyArgs} args - Arguments to create many ElementChildren.
     * @example
     * // Create many ElementChildren
     * const elementChild = await prisma.elementChild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElementChildCreateManyArgs>(args?: SelectSubset<T, ElementChildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ElementChildren and returns the data saved in the database.
     * @param {ElementChildCreateManyAndReturnArgs} args - Arguments to create many ElementChildren.
     * @example
     * // Create many ElementChildren
     * const elementChild = await prisma.elementChild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ElementChildren and only return the `parentId`
     * const elementChildWithParentIdOnly = await prisma.elementChild.createManyAndReturn({
     *   select: { parentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ElementChildCreateManyAndReturnArgs>(args?: SelectSubset<T, ElementChildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementChildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ElementChild.
     * @param {ElementChildDeleteArgs} args - Arguments to delete one ElementChild.
     * @example
     * // Delete one ElementChild
     * const ElementChild = await prisma.elementChild.delete({
     *   where: {
     *     // ... filter to delete one ElementChild
     *   }
     * })
     * 
     */
    delete<T extends ElementChildDeleteArgs>(args: SelectSubset<T, ElementChildDeleteArgs<ExtArgs>>): Prisma__ElementChildClient<$Result.GetResult<Prisma.$ElementChildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ElementChild.
     * @param {ElementChildUpdateArgs} args - Arguments to update one ElementChild.
     * @example
     * // Update one ElementChild
     * const elementChild = await prisma.elementChild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElementChildUpdateArgs>(args: SelectSubset<T, ElementChildUpdateArgs<ExtArgs>>): Prisma__ElementChildClient<$Result.GetResult<Prisma.$ElementChildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ElementChildren.
     * @param {ElementChildDeleteManyArgs} args - Arguments to filter ElementChildren to delete.
     * @example
     * // Delete a few ElementChildren
     * const { count } = await prisma.elementChild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElementChildDeleteManyArgs>(args?: SelectSubset<T, ElementChildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ElementChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementChildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ElementChildren
     * const elementChild = await prisma.elementChild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElementChildUpdateManyArgs>(args: SelectSubset<T, ElementChildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ElementChildren and returns the data updated in the database.
     * @param {ElementChildUpdateManyAndReturnArgs} args - Arguments to update many ElementChildren.
     * @example
     * // Update many ElementChildren
     * const elementChild = await prisma.elementChild.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ElementChildren and only return the `parentId`
     * const elementChildWithParentIdOnly = await prisma.elementChild.updateManyAndReturn({
     *   select: { parentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ElementChildUpdateManyAndReturnArgs>(args: SelectSubset<T, ElementChildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementChildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ElementChild.
     * @param {ElementChildUpsertArgs} args - Arguments to update or create a ElementChild.
     * @example
     * // Update or create a ElementChild
     * const elementChild = await prisma.elementChild.upsert({
     *   create: {
     *     // ... data to create a ElementChild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ElementChild we want to update
     *   }
     * })
     */
    upsert<T extends ElementChildUpsertArgs>(args: SelectSubset<T, ElementChildUpsertArgs<ExtArgs>>): Prisma__ElementChildClient<$Result.GetResult<Prisma.$ElementChildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ElementChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementChildCountArgs} args - Arguments to filter ElementChildren to count.
     * @example
     * // Count the number of ElementChildren
     * const count = await prisma.elementChild.count({
     *   where: {
     *     // ... the filter for the ElementChildren we want to count
     *   }
     * })
    **/
    count<T extends ElementChildCountArgs>(
      args?: Subset<T, ElementChildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElementChildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ElementChild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementChildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ElementChildAggregateArgs>(args: Subset<T, ElementChildAggregateArgs>): Prisma.PrismaPromise<GetElementChildAggregateType<T>>

    /**
     * Group by ElementChild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementChildGroupByArgs} args - Group by arguments.
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
      T extends ElementChildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElementChildGroupByArgs['orderBy'] }
        : { orderBy?: ElementChildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ElementChildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElementChildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ElementChild model
   */
  readonly fields: ElementChildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ElementChild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElementChildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends ElementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElementDefaultArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    child<T extends ElementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElementDefaultArgs<ExtArgs>>): Prisma__ElementClient<$Result.GetResult<Prisma.$ElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ElementChild model
   */ 
  interface ElementChildFieldRefs {
    readonly parentId: FieldRef<"ElementChild", 'String'>
    readonly childId: FieldRef<"ElementChild", 'String'>
    readonly position: FieldRef<"ElementChild", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ElementChild findUnique
   */
  export type ElementChildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildInclude<ExtArgs> | null
    /**
     * Filter, which ElementChild to fetch.
     */
    where: ElementChildWhereUniqueInput
  }

  /**
   * ElementChild findUniqueOrThrow
   */
  export type ElementChildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildInclude<ExtArgs> | null
    /**
     * Filter, which ElementChild to fetch.
     */
    where: ElementChildWhereUniqueInput
  }

  /**
   * ElementChild findFirst
   */
  export type ElementChildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildInclude<ExtArgs> | null
    /**
     * Filter, which ElementChild to fetch.
     */
    where?: ElementChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElementChildren to fetch.
     */
    orderBy?: ElementChildOrderByWithRelationInput | ElementChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElementChildren.
     */
    cursor?: ElementChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElementChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElementChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElementChildren.
     */
    distinct?: ElementChildScalarFieldEnum | ElementChildScalarFieldEnum[]
  }

  /**
   * ElementChild findFirstOrThrow
   */
  export type ElementChildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildInclude<ExtArgs> | null
    /**
     * Filter, which ElementChild to fetch.
     */
    where?: ElementChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElementChildren to fetch.
     */
    orderBy?: ElementChildOrderByWithRelationInput | ElementChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElementChildren.
     */
    cursor?: ElementChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElementChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElementChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElementChildren.
     */
    distinct?: ElementChildScalarFieldEnum | ElementChildScalarFieldEnum[]
  }

  /**
   * ElementChild findMany
   */
  export type ElementChildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildInclude<ExtArgs> | null
    /**
     * Filter, which ElementChildren to fetch.
     */
    where?: ElementChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElementChildren to fetch.
     */
    orderBy?: ElementChildOrderByWithRelationInput | ElementChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ElementChildren.
     */
    cursor?: ElementChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElementChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElementChildren.
     */
    skip?: number
    distinct?: ElementChildScalarFieldEnum | ElementChildScalarFieldEnum[]
  }

  /**
   * ElementChild create
   */
  export type ElementChildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildInclude<ExtArgs> | null
    /**
     * The data needed to create a ElementChild.
     */
    data: XOR<ElementChildCreateInput, ElementChildUncheckedCreateInput>
  }

  /**
   * ElementChild createMany
   */
  export type ElementChildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ElementChildren.
     */
    data: ElementChildCreateManyInput | ElementChildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ElementChild createManyAndReturn
   */
  export type ElementChildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * The data used to create many ElementChildren.
     */
    data: ElementChildCreateManyInput | ElementChildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ElementChild update
   */
  export type ElementChildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildInclude<ExtArgs> | null
    /**
     * The data needed to update a ElementChild.
     */
    data: XOR<ElementChildUpdateInput, ElementChildUncheckedUpdateInput>
    /**
     * Choose, which ElementChild to update.
     */
    where: ElementChildWhereUniqueInput
  }

  /**
   * ElementChild updateMany
   */
  export type ElementChildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ElementChildren.
     */
    data: XOR<ElementChildUpdateManyMutationInput, ElementChildUncheckedUpdateManyInput>
    /**
     * Filter which ElementChildren to update
     */
    where?: ElementChildWhereInput
    /**
     * Limit how many ElementChildren to update.
     */
    limit?: number
  }

  /**
   * ElementChild updateManyAndReturn
   */
  export type ElementChildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * The data used to update ElementChildren.
     */
    data: XOR<ElementChildUpdateManyMutationInput, ElementChildUncheckedUpdateManyInput>
    /**
     * Filter which ElementChildren to update
     */
    where?: ElementChildWhereInput
    /**
     * Limit how many ElementChildren to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ElementChild upsert
   */
  export type ElementChildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildInclude<ExtArgs> | null
    /**
     * The filter to search for the ElementChild to update in case it exists.
     */
    where: ElementChildWhereUniqueInput
    /**
     * In case the ElementChild found by the `where` argument doesn't exist, create a new ElementChild with this data.
     */
    create: XOR<ElementChildCreateInput, ElementChildUncheckedCreateInput>
    /**
     * In case the ElementChild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElementChildUpdateInput, ElementChildUncheckedUpdateInput>
  }

  /**
   * ElementChild delete
   */
  export type ElementChildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildInclude<ExtArgs> | null
    /**
     * Filter which ElementChild to delete.
     */
    where: ElementChildWhereUniqueInput
  }

  /**
   * ElementChild deleteMany
   */
  export type ElementChildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElementChildren to delete
     */
    where?: ElementChildWhereInput
    /**
     * Limit how many ElementChildren to delete.
     */
    limit?: number
  }

  /**
   * ElementChild without action
   */
  export type ElementChildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementChild
     */
    select?: ElementChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElementChild
     */
    omit?: ElementChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementChildInclude<ExtArgs> | null
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


  export const WebsiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebsiteScalarFieldEnum = (typeof WebsiteScalarFieldEnum)[keyof typeof WebsiteScalarFieldEnum]


  export const PageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    websiteId: 'websiteId'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const PageSectionScalarFieldEnum: {
    pageId: 'pageId',
    sectionId: 'sectionId',
    position: 'position'
  };

  export type PageSectionScalarFieldEnum = (typeof PageSectionScalarFieldEnum)[keyof typeof PageSectionScalarFieldEnum]


  export const ElementScalarFieldEnum: {
    id: 'id',
    tag: 'tag',
    key: 'key',
    className: 'className',
    content: 'content',
    src: 'src',
    alt: 'alt',
    link: 'link',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ElementScalarFieldEnum = (typeof ElementScalarFieldEnum)[keyof typeof ElementScalarFieldEnum]


  export const SectionElementScalarFieldEnum: {
    sectionId: 'sectionId',
    elementId: 'elementId',
    position: 'position'
  };

  export type SectionElementScalarFieldEnum = (typeof SectionElementScalarFieldEnum)[keyof typeof SectionElementScalarFieldEnum]


  export const ElementChildScalarFieldEnum: {
    parentId: 'parentId',
    childId: 'childId',
    position: 'position'
  };

  export type ElementChildScalarFieldEnum = (typeof ElementChildScalarFieldEnum)[keyof typeof ElementChildScalarFieldEnum]


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
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WebsiteWhereInput = {
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    id?: StringFilter<"Website"> | string
    name?: StringFilter<"Website"> | string
    domain?: StringNullableFilter<"Website"> | string | null
    createdAt?: DateTimeFilter<"Website"> | Date | string
    updatedAt?: DateTimeFilter<"Website"> | Date | string
    pages?: PageListRelationFilter
  }

  export type WebsiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pages?: PageOrderByRelationAggregateInput
  }

  export type WebsiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    domain?: string
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    createdAt?: DateTimeFilter<"Website"> | Date | string
    updatedAt?: DateTimeFilter<"Website"> | Date | string
    pages?: PageListRelationFilter
  }, "id" | "name" | "domain">

  export type WebsiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WebsiteCountOrderByAggregateInput
    _max?: WebsiteMaxOrderByAggregateInput
    _min?: WebsiteMinOrderByAggregateInput
  }

  export type WebsiteScalarWhereWithAggregatesInput = {
    AND?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    OR?: WebsiteScalarWhereWithAggregatesInput[]
    NOT?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Website"> | string
    name?: StringWithAggregatesFilter<"Website"> | string
    domain?: StringNullableWithAggregatesFilter<"Website"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Website"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Website"> | Date | string
  }

  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: StringFilter<"Page"> | string
    name?: StringFilter<"Page"> | string
    slug?: StringFilter<"Page"> | string
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    websiteId?: StringFilter<"Page"> | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
    sections?: PageSectionListRelationFilter
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    websiteId?: SortOrder
    website?: WebsiteOrderByWithRelationInput
    sections?: PageSectionOrderByRelationAggregateInput
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    websiteId_name?: PageWebsiteIdNameCompoundUniqueInput
    websiteId_slug?: PageWebsiteIdSlugCompoundUniqueInput
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    name?: StringFilter<"Page"> | string
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    websiteId?: StringFilter<"Page"> | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
    sections?: PageSectionListRelationFilter
  }, "id" | "slug" | "websiteId_name" | "websiteId_slug">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    websiteId?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page"> | string
    name?: StringWithAggregatesFilter<"Page"> | string
    slug?: StringWithAggregatesFilter<"Page"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
    websiteId?: StringWithAggregatesFilter<"Page"> | string
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    name?: StringFilter<"Section"> | string
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    pages?: PageSectionListRelationFilter
    elements?: SectionElementListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pages?: PageSectionOrderByRelationAggregateInput
    elements?: SectionElementOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    name?: StringFilter<"Section"> | string
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    pages?: PageSectionListRelationFilter
    elements?: SectionElementListRelationFilter
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    name?: StringWithAggregatesFilter<"Section"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
  }

  export type PageSectionWhereInput = {
    AND?: PageSectionWhereInput | PageSectionWhereInput[]
    OR?: PageSectionWhereInput[]
    NOT?: PageSectionWhereInput | PageSectionWhereInput[]
    pageId?: StringFilter<"PageSection"> | string
    sectionId?: StringFilter<"PageSection"> | string
    position?: IntFilter<"PageSection"> | number
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }

  export type PageSectionOrderByWithRelationInput = {
    pageId?: SortOrder
    sectionId?: SortOrder
    position?: SortOrder
    page?: PageOrderByWithRelationInput
    section?: SectionOrderByWithRelationInput
  }

  export type PageSectionWhereUniqueInput = Prisma.AtLeast<{
    pageId_sectionId?: PageSectionPageIdSectionIdCompoundUniqueInput
    AND?: PageSectionWhereInput | PageSectionWhereInput[]
    OR?: PageSectionWhereInput[]
    NOT?: PageSectionWhereInput | PageSectionWhereInput[]
    pageId?: StringFilter<"PageSection"> | string
    sectionId?: StringFilter<"PageSection"> | string
    position?: IntFilter<"PageSection"> | number
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }, "pageId_sectionId">

  export type PageSectionOrderByWithAggregationInput = {
    pageId?: SortOrder
    sectionId?: SortOrder
    position?: SortOrder
    _count?: PageSectionCountOrderByAggregateInput
    _avg?: PageSectionAvgOrderByAggregateInput
    _max?: PageSectionMaxOrderByAggregateInput
    _min?: PageSectionMinOrderByAggregateInput
    _sum?: PageSectionSumOrderByAggregateInput
  }

  export type PageSectionScalarWhereWithAggregatesInput = {
    AND?: PageSectionScalarWhereWithAggregatesInput | PageSectionScalarWhereWithAggregatesInput[]
    OR?: PageSectionScalarWhereWithAggregatesInput[]
    NOT?: PageSectionScalarWhereWithAggregatesInput | PageSectionScalarWhereWithAggregatesInput[]
    pageId?: StringWithAggregatesFilter<"PageSection"> | string
    sectionId?: StringWithAggregatesFilter<"PageSection"> | string
    position?: IntWithAggregatesFilter<"PageSection"> | number
  }

  export type ElementWhereInput = {
    AND?: ElementWhereInput | ElementWhereInput[]
    OR?: ElementWhereInput[]
    NOT?: ElementWhereInput | ElementWhereInput[]
    id?: StringFilter<"Element"> | string
    tag?: StringFilter<"Element"> | string
    key?: StringNullableFilter<"Element"> | string | null
    className?: StringNullableFilter<"Element"> | string | null
    content?: StringNullableFilter<"Element"> | string | null
    src?: StringNullableFilter<"Element"> | string | null
    alt?: StringNullableFilter<"Element"> | string | null
    link?: StringNullableFilter<"Element"> | string | null
    createdAt?: DateTimeFilter<"Element"> | Date | string
    updatedAt?: DateTimeFilter<"Element"> | Date | string
    sections?: SectionElementListRelationFilter
    children?: ElementChildListRelationFilter
    parents?: ElementChildListRelationFilter
  }

  export type ElementOrderByWithRelationInput = {
    id?: SortOrder
    tag?: SortOrder
    key?: SortOrderInput | SortOrder
    className?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    src?: SortOrderInput | SortOrder
    alt?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sections?: SectionElementOrderByRelationAggregateInput
    children?: ElementChildOrderByRelationAggregateInput
    parents?: ElementChildOrderByRelationAggregateInput
  }

  export type ElementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ElementWhereInput | ElementWhereInput[]
    OR?: ElementWhereInput[]
    NOT?: ElementWhereInput | ElementWhereInput[]
    tag?: StringFilter<"Element"> | string
    key?: StringNullableFilter<"Element"> | string | null
    className?: StringNullableFilter<"Element"> | string | null
    content?: StringNullableFilter<"Element"> | string | null
    src?: StringNullableFilter<"Element"> | string | null
    alt?: StringNullableFilter<"Element"> | string | null
    link?: StringNullableFilter<"Element"> | string | null
    createdAt?: DateTimeFilter<"Element"> | Date | string
    updatedAt?: DateTimeFilter<"Element"> | Date | string
    sections?: SectionElementListRelationFilter
    children?: ElementChildListRelationFilter
    parents?: ElementChildListRelationFilter
  }, "id">

  export type ElementOrderByWithAggregationInput = {
    id?: SortOrder
    tag?: SortOrder
    key?: SortOrderInput | SortOrder
    className?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    src?: SortOrderInput | SortOrder
    alt?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ElementCountOrderByAggregateInput
    _max?: ElementMaxOrderByAggregateInput
    _min?: ElementMinOrderByAggregateInput
  }

  export type ElementScalarWhereWithAggregatesInput = {
    AND?: ElementScalarWhereWithAggregatesInput | ElementScalarWhereWithAggregatesInput[]
    OR?: ElementScalarWhereWithAggregatesInput[]
    NOT?: ElementScalarWhereWithAggregatesInput | ElementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Element"> | string
    tag?: StringWithAggregatesFilter<"Element"> | string
    key?: StringNullableWithAggregatesFilter<"Element"> | string | null
    className?: StringNullableWithAggregatesFilter<"Element"> | string | null
    content?: StringNullableWithAggregatesFilter<"Element"> | string | null
    src?: StringNullableWithAggregatesFilter<"Element"> | string | null
    alt?: StringNullableWithAggregatesFilter<"Element"> | string | null
    link?: StringNullableWithAggregatesFilter<"Element"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Element"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Element"> | Date | string
  }

  export type SectionElementWhereInput = {
    AND?: SectionElementWhereInput | SectionElementWhereInput[]
    OR?: SectionElementWhereInput[]
    NOT?: SectionElementWhereInput | SectionElementWhereInput[]
    sectionId?: StringFilter<"SectionElement"> | string
    elementId?: StringFilter<"SectionElement"> | string
    position?: IntFilter<"SectionElement"> | number
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    element?: XOR<ElementScalarRelationFilter, ElementWhereInput>
  }

  export type SectionElementOrderByWithRelationInput = {
    sectionId?: SortOrder
    elementId?: SortOrder
    position?: SortOrder
    section?: SectionOrderByWithRelationInput
    element?: ElementOrderByWithRelationInput
  }

  export type SectionElementWhereUniqueInput = Prisma.AtLeast<{
    sectionId_elementId?: SectionElementSectionIdElementIdCompoundUniqueInput
    AND?: SectionElementWhereInput | SectionElementWhereInput[]
    OR?: SectionElementWhereInput[]
    NOT?: SectionElementWhereInput | SectionElementWhereInput[]
    sectionId?: StringFilter<"SectionElement"> | string
    elementId?: StringFilter<"SectionElement"> | string
    position?: IntFilter<"SectionElement"> | number
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    element?: XOR<ElementScalarRelationFilter, ElementWhereInput>
  }, "sectionId_elementId">

  export type SectionElementOrderByWithAggregationInput = {
    sectionId?: SortOrder
    elementId?: SortOrder
    position?: SortOrder
    _count?: SectionElementCountOrderByAggregateInput
    _avg?: SectionElementAvgOrderByAggregateInput
    _max?: SectionElementMaxOrderByAggregateInput
    _min?: SectionElementMinOrderByAggregateInput
    _sum?: SectionElementSumOrderByAggregateInput
  }

  export type SectionElementScalarWhereWithAggregatesInput = {
    AND?: SectionElementScalarWhereWithAggregatesInput | SectionElementScalarWhereWithAggregatesInput[]
    OR?: SectionElementScalarWhereWithAggregatesInput[]
    NOT?: SectionElementScalarWhereWithAggregatesInput | SectionElementScalarWhereWithAggregatesInput[]
    sectionId?: StringWithAggregatesFilter<"SectionElement"> | string
    elementId?: StringWithAggregatesFilter<"SectionElement"> | string
    position?: IntWithAggregatesFilter<"SectionElement"> | number
  }

  export type ElementChildWhereInput = {
    AND?: ElementChildWhereInput | ElementChildWhereInput[]
    OR?: ElementChildWhereInput[]
    NOT?: ElementChildWhereInput | ElementChildWhereInput[]
    parentId?: StringFilter<"ElementChild"> | string
    childId?: StringFilter<"ElementChild"> | string
    position?: IntFilter<"ElementChild"> | number
    parent?: XOR<ElementScalarRelationFilter, ElementWhereInput>
    child?: XOR<ElementScalarRelationFilter, ElementWhereInput>
  }

  export type ElementChildOrderByWithRelationInput = {
    parentId?: SortOrder
    childId?: SortOrder
    position?: SortOrder
    parent?: ElementOrderByWithRelationInput
    child?: ElementOrderByWithRelationInput
  }

  export type ElementChildWhereUniqueInput = Prisma.AtLeast<{
    parentId_childId?: ElementChildParentIdChildIdCompoundUniqueInput
    AND?: ElementChildWhereInput | ElementChildWhereInput[]
    OR?: ElementChildWhereInput[]
    NOT?: ElementChildWhereInput | ElementChildWhereInput[]
    parentId?: StringFilter<"ElementChild"> | string
    childId?: StringFilter<"ElementChild"> | string
    position?: IntFilter<"ElementChild"> | number
    parent?: XOR<ElementScalarRelationFilter, ElementWhereInput>
    child?: XOR<ElementScalarRelationFilter, ElementWhereInput>
  }, "parentId_childId">

  export type ElementChildOrderByWithAggregationInput = {
    parentId?: SortOrder
    childId?: SortOrder
    position?: SortOrder
    _count?: ElementChildCountOrderByAggregateInput
    _avg?: ElementChildAvgOrderByAggregateInput
    _max?: ElementChildMaxOrderByAggregateInput
    _min?: ElementChildMinOrderByAggregateInput
    _sum?: ElementChildSumOrderByAggregateInput
  }

  export type ElementChildScalarWhereWithAggregatesInput = {
    AND?: ElementChildScalarWhereWithAggregatesInput | ElementChildScalarWhereWithAggregatesInput[]
    OR?: ElementChildScalarWhereWithAggregatesInput[]
    NOT?: ElementChildScalarWhereWithAggregatesInput | ElementChildScalarWhereWithAggregatesInput[]
    parentId?: StringWithAggregatesFilter<"ElementChild"> | string
    childId?: StringWithAggregatesFilter<"ElementChild"> | string
    position?: IntWithAggregatesFilter<"ElementChild"> | number
  }

  export type WebsiteCreateInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteCreateManyInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    website: WebsiteCreateNestedOneWithoutPagesInput
    sections?: PageSectionCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    websiteId: string
    sections?: PageSectionUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    website?: WebsiteUpdateOneRequiredWithoutPagesNestedInput
    sections?: PageSectionUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websiteId?: StringFieldUpdateOperationsInput | string
    sections?: PageSectionUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    websiteId: string
  }

  export type PageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websiteId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageSectionCreateNestedManyWithoutSectionInput
    elements?: SectionElementCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageSectionUncheckedCreateNestedManyWithoutSectionInput
    elements?: SectionElementUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageSectionUpdateManyWithoutSectionNestedInput
    elements?: SectionElementUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageSectionUncheckedUpdateManyWithoutSectionNestedInput
    elements?: SectionElementUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageSectionCreateInput = {
    position: number
    page: PageCreateNestedOneWithoutSectionsInput
    section: SectionCreateNestedOneWithoutPagesInput
  }

  export type PageSectionUncheckedCreateInput = {
    pageId: string
    sectionId: string
    position: number
  }

  export type PageSectionUpdateInput = {
    position?: IntFieldUpdateOperationsInput | number
    page?: PageUpdateOneRequiredWithoutSectionsNestedInput
    section?: SectionUpdateOneRequiredWithoutPagesNestedInput
  }

  export type PageSectionUncheckedUpdateInput = {
    pageId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type PageSectionCreateManyInput = {
    pageId: string
    sectionId: string
    position: number
  }

  export type PageSectionUpdateManyMutationInput = {
    position?: IntFieldUpdateOperationsInput | number
  }

  export type PageSectionUncheckedUpdateManyInput = {
    pageId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ElementCreateInput = {
    id?: string
    tag: string
    key?: string | null
    className?: string | null
    content?: string | null
    src?: string | null
    alt?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionElementCreateNestedManyWithoutElementInput
    children?: ElementChildCreateNestedManyWithoutParentInput
    parents?: ElementChildCreateNestedManyWithoutChildInput
  }

  export type ElementUncheckedCreateInput = {
    id?: string
    tag: string
    key?: string | null
    className?: string | null
    content?: string | null
    src?: string | null
    alt?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionElementUncheckedCreateNestedManyWithoutElementInput
    children?: ElementChildUncheckedCreateNestedManyWithoutParentInput
    parents?: ElementChildUncheckedCreateNestedManyWithoutChildInput
  }

  export type ElementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    src?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionElementUpdateManyWithoutElementNestedInput
    children?: ElementChildUpdateManyWithoutParentNestedInput
    parents?: ElementChildUpdateManyWithoutChildNestedInput
  }

  export type ElementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    src?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionElementUncheckedUpdateManyWithoutElementNestedInput
    children?: ElementChildUncheckedUpdateManyWithoutParentNestedInput
    parents?: ElementChildUncheckedUpdateManyWithoutChildNestedInput
  }

  export type ElementCreateManyInput = {
    id?: string
    tag: string
    key?: string | null
    className?: string | null
    content?: string | null
    src?: string | null
    alt?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ElementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    src?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    src?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionElementCreateInput = {
    position: number
    section: SectionCreateNestedOneWithoutElementsInput
    element: ElementCreateNestedOneWithoutSectionsInput
  }

  export type SectionElementUncheckedCreateInput = {
    sectionId: string
    elementId: string
    position: number
  }

  export type SectionElementUpdateInput = {
    position?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutElementsNestedInput
    element?: ElementUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionElementUncheckedUpdateInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    elementId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type SectionElementCreateManyInput = {
    sectionId: string
    elementId: string
    position: number
  }

  export type SectionElementUpdateManyMutationInput = {
    position?: IntFieldUpdateOperationsInput | number
  }

  export type SectionElementUncheckedUpdateManyInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    elementId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ElementChildCreateInput = {
    position: number
    parent: ElementCreateNestedOneWithoutChildrenInput
    child: ElementCreateNestedOneWithoutParentsInput
  }

  export type ElementChildUncheckedCreateInput = {
    parentId: string
    childId: string
    position: number
  }

  export type ElementChildUpdateInput = {
    position?: IntFieldUpdateOperationsInput | number
    parent?: ElementUpdateOneRequiredWithoutChildrenNestedInput
    child?: ElementUpdateOneRequiredWithoutParentsNestedInput
  }

  export type ElementChildUncheckedUpdateInput = {
    parentId?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ElementChildCreateManyInput = {
    parentId: string
    childId: string
    position: number
  }

  export type ElementChildUpdateManyMutationInput = {
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ElementChildUncheckedUpdateManyInput = {
    parentId?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PageListRelationFilter = {
    every?: PageWhereInput
    some?: PageWhereInput
    none?: PageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebsiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WebsiteScalarRelationFilter = {
    is?: WebsiteWhereInput
    isNot?: WebsiteWhereInput
  }

  export type PageSectionListRelationFilter = {
    every?: PageSectionWhereInput
    some?: PageSectionWhereInput
    none?: PageSectionWhereInput
  }

  export type PageSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageWebsiteIdNameCompoundUniqueInput = {
    websiteId: string
    name: string
  }

  export type PageWebsiteIdSlugCompoundUniqueInput = {
    websiteId: string
    slug: string
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    websiteId?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    websiteId?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    websiteId?: SortOrder
  }

  export type SectionElementListRelationFilter = {
    every?: SectionElementWhereInput
    some?: SectionElementWhereInput
    none?: SectionElementWhereInput
  }

  export type SectionElementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PageScalarRelationFilter = {
    is?: PageWhereInput
    isNot?: PageWhereInput
  }

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type PageSectionPageIdSectionIdCompoundUniqueInput = {
    pageId: string
    sectionId: string
  }

  export type PageSectionCountOrderByAggregateInput = {
    pageId?: SortOrder
    sectionId?: SortOrder
    position?: SortOrder
  }

  export type PageSectionAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type PageSectionMaxOrderByAggregateInput = {
    pageId?: SortOrder
    sectionId?: SortOrder
    position?: SortOrder
  }

  export type PageSectionMinOrderByAggregateInput = {
    pageId?: SortOrder
    sectionId?: SortOrder
    position?: SortOrder
  }

  export type PageSectionSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ElementChildListRelationFilter = {
    every?: ElementChildWhereInput
    some?: ElementChildWhereInput
    none?: ElementChildWhereInput
  }

  export type ElementChildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElementCountOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    key?: SortOrder
    className?: SortOrder
    content?: SortOrder
    src?: SortOrder
    alt?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ElementMaxOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    key?: SortOrder
    className?: SortOrder
    content?: SortOrder
    src?: SortOrder
    alt?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ElementMinOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    key?: SortOrder
    className?: SortOrder
    content?: SortOrder
    src?: SortOrder
    alt?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ElementScalarRelationFilter = {
    is?: ElementWhereInput
    isNot?: ElementWhereInput
  }

  export type SectionElementSectionIdElementIdCompoundUniqueInput = {
    sectionId: string
    elementId: string
  }

  export type SectionElementCountOrderByAggregateInput = {
    sectionId?: SortOrder
    elementId?: SortOrder
    position?: SortOrder
  }

  export type SectionElementAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type SectionElementMaxOrderByAggregateInput = {
    sectionId?: SortOrder
    elementId?: SortOrder
    position?: SortOrder
  }

  export type SectionElementMinOrderByAggregateInput = {
    sectionId?: SortOrder
    elementId?: SortOrder
    position?: SortOrder
  }

  export type SectionElementSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ElementChildParentIdChildIdCompoundUniqueInput = {
    parentId: string
    childId: string
  }

  export type ElementChildCountOrderByAggregateInput = {
    parentId?: SortOrder
    childId?: SortOrder
    position?: SortOrder
  }

  export type ElementChildAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ElementChildMaxOrderByAggregateInput = {
    parentId?: SortOrder
    childId?: SortOrder
    position?: SortOrder
  }

  export type ElementChildMinOrderByAggregateInput = {
    parentId?: SortOrder
    childId?: SortOrder
    position?: SortOrder
  }

  export type ElementChildSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type PageCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<PageCreateWithoutWebsiteInput, PageUncheckedCreateWithoutWebsiteInput> | PageCreateWithoutWebsiteInput[] | PageUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: PageCreateOrConnectWithoutWebsiteInput | PageCreateOrConnectWithoutWebsiteInput[]
    createMany?: PageCreateManyWebsiteInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type PageUncheckedCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<PageCreateWithoutWebsiteInput, PageUncheckedCreateWithoutWebsiteInput> | PageCreateWithoutWebsiteInput[] | PageUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: PageCreateOrConnectWithoutWebsiteInput | PageCreateOrConnectWithoutWebsiteInput[]
    createMany?: PageCreateManyWebsiteInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PageUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<PageCreateWithoutWebsiteInput, PageUncheckedCreateWithoutWebsiteInput> | PageCreateWithoutWebsiteInput[] | PageUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: PageCreateOrConnectWithoutWebsiteInput | PageCreateOrConnectWithoutWebsiteInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutWebsiteInput | PageUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: PageCreateManyWebsiteInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutWebsiteInput | PageUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: PageUpdateManyWithWhereWithoutWebsiteInput | PageUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type PageUncheckedUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<PageCreateWithoutWebsiteInput, PageUncheckedCreateWithoutWebsiteInput> | PageCreateWithoutWebsiteInput[] | PageUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: PageCreateOrConnectWithoutWebsiteInput | PageCreateOrConnectWithoutWebsiteInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutWebsiteInput | PageUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: PageCreateManyWebsiteInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutWebsiteInput | PageUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: PageUpdateManyWithWhereWithoutWebsiteInput | PageUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type WebsiteCreateNestedOneWithoutPagesInput = {
    create?: XOR<WebsiteCreateWithoutPagesInput, WebsiteUncheckedCreateWithoutPagesInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutPagesInput
    connect?: WebsiteWhereUniqueInput
  }

  export type PageSectionCreateNestedManyWithoutPageInput = {
    create?: XOR<PageSectionCreateWithoutPageInput, PageSectionUncheckedCreateWithoutPageInput> | PageSectionCreateWithoutPageInput[] | PageSectionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageSectionCreateOrConnectWithoutPageInput | PageSectionCreateOrConnectWithoutPageInput[]
    createMany?: PageSectionCreateManyPageInputEnvelope
    connect?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
  }

  export type PageSectionUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<PageSectionCreateWithoutPageInput, PageSectionUncheckedCreateWithoutPageInput> | PageSectionCreateWithoutPageInput[] | PageSectionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageSectionCreateOrConnectWithoutPageInput | PageSectionCreateOrConnectWithoutPageInput[]
    createMany?: PageSectionCreateManyPageInputEnvelope
    connect?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
  }

  export type WebsiteUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<WebsiteCreateWithoutPagesInput, WebsiteUncheckedCreateWithoutPagesInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutPagesInput
    upsert?: WebsiteUpsertWithoutPagesInput
    connect?: WebsiteWhereUniqueInput
    update?: XOR<XOR<WebsiteUpdateToOneWithWhereWithoutPagesInput, WebsiteUpdateWithoutPagesInput>, WebsiteUncheckedUpdateWithoutPagesInput>
  }

  export type PageSectionUpdateManyWithoutPageNestedInput = {
    create?: XOR<PageSectionCreateWithoutPageInput, PageSectionUncheckedCreateWithoutPageInput> | PageSectionCreateWithoutPageInput[] | PageSectionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageSectionCreateOrConnectWithoutPageInput | PageSectionCreateOrConnectWithoutPageInput[]
    upsert?: PageSectionUpsertWithWhereUniqueWithoutPageInput | PageSectionUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: PageSectionCreateManyPageInputEnvelope
    set?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    disconnect?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    delete?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    connect?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    update?: PageSectionUpdateWithWhereUniqueWithoutPageInput | PageSectionUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: PageSectionUpdateManyWithWhereWithoutPageInput | PageSectionUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: PageSectionScalarWhereInput | PageSectionScalarWhereInput[]
  }

  export type PageSectionUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<PageSectionCreateWithoutPageInput, PageSectionUncheckedCreateWithoutPageInput> | PageSectionCreateWithoutPageInput[] | PageSectionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageSectionCreateOrConnectWithoutPageInput | PageSectionCreateOrConnectWithoutPageInput[]
    upsert?: PageSectionUpsertWithWhereUniqueWithoutPageInput | PageSectionUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: PageSectionCreateManyPageInputEnvelope
    set?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    disconnect?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    delete?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    connect?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    update?: PageSectionUpdateWithWhereUniqueWithoutPageInput | PageSectionUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: PageSectionUpdateManyWithWhereWithoutPageInput | PageSectionUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: PageSectionScalarWhereInput | PageSectionScalarWhereInput[]
  }

  export type PageSectionCreateNestedManyWithoutSectionInput = {
    create?: XOR<PageSectionCreateWithoutSectionInput, PageSectionUncheckedCreateWithoutSectionInput> | PageSectionCreateWithoutSectionInput[] | PageSectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: PageSectionCreateOrConnectWithoutSectionInput | PageSectionCreateOrConnectWithoutSectionInput[]
    createMany?: PageSectionCreateManySectionInputEnvelope
    connect?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
  }

  export type SectionElementCreateNestedManyWithoutSectionInput = {
    create?: XOR<SectionElementCreateWithoutSectionInput, SectionElementUncheckedCreateWithoutSectionInput> | SectionElementCreateWithoutSectionInput[] | SectionElementUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionElementCreateOrConnectWithoutSectionInput | SectionElementCreateOrConnectWithoutSectionInput[]
    createMany?: SectionElementCreateManySectionInputEnvelope
    connect?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
  }

  export type PageSectionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<PageSectionCreateWithoutSectionInput, PageSectionUncheckedCreateWithoutSectionInput> | PageSectionCreateWithoutSectionInput[] | PageSectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: PageSectionCreateOrConnectWithoutSectionInput | PageSectionCreateOrConnectWithoutSectionInput[]
    createMany?: PageSectionCreateManySectionInputEnvelope
    connect?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
  }

  export type SectionElementUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<SectionElementCreateWithoutSectionInput, SectionElementUncheckedCreateWithoutSectionInput> | SectionElementCreateWithoutSectionInput[] | SectionElementUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionElementCreateOrConnectWithoutSectionInput | SectionElementCreateOrConnectWithoutSectionInput[]
    createMany?: SectionElementCreateManySectionInputEnvelope
    connect?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
  }

  export type PageSectionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<PageSectionCreateWithoutSectionInput, PageSectionUncheckedCreateWithoutSectionInput> | PageSectionCreateWithoutSectionInput[] | PageSectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: PageSectionCreateOrConnectWithoutSectionInput | PageSectionCreateOrConnectWithoutSectionInput[]
    upsert?: PageSectionUpsertWithWhereUniqueWithoutSectionInput | PageSectionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: PageSectionCreateManySectionInputEnvelope
    set?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    disconnect?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    delete?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    connect?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    update?: PageSectionUpdateWithWhereUniqueWithoutSectionInput | PageSectionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: PageSectionUpdateManyWithWhereWithoutSectionInput | PageSectionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: PageSectionScalarWhereInput | PageSectionScalarWhereInput[]
  }

  export type SectionElementUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SectionElementCreateWithoutSectionInput, SectionElementUncheckedCreateWithoutSectionInput> | SectionElementCreateWithoutSectionInput[] | SectionElementUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionElementCreateOrConnectWithoutSectionInput | SectionElementCreateOrConnectWithoutSectionInput[]
    upsert?: SectionElementUpsertWithWhereUniqueWithoutSectionInput | SectionElementUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SectionElementCreateManySectionInputEnvelope
    set?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    disconnect?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    delete?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    connect?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    update?: SectionElementUpdateWithWhereUniqueWithoutSectionInput | SectionElementUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SectionElementUpdateManyWithWhereWithoutSectionInput | SectionElementUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SectionElementScalarWhereInput | SectionElementScalarWhereInput[]
  }

  export type PageSectionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<PageSectionCreateWithoutSectionInput, PageSectionUncheckedCreateWithoutSectionInput> | PageSectionCreateWithoutSectionInput[] | PageSectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: PageSectionCreateOrConnectWithoutSectionInput | PageSectionCreateOrConnectWithoutSectionInput[]
    upsert?: PageSectionUpsertWithWhereUniqueWithoutSectionInput | PageSectionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: PageSectionCreateManySectionInputEnvelope
    set?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    disconnect?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    delete?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    connect?: PageSectionWhereUniqueInput | PageSectionWhereUniqueInput[]
    update?: PageSectionUpdateWithWhereUniqueWithoutSectionInput | PageSectionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: PageSectionUpdateManyWithWhereWithoutSectionInput | PageSectionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: PageSectionScalarWhereInput | PageSectionScalarWhereInput[]
  }

  export type SectionElementUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SectionElementCreateWithoutSectionInput, SectionElementUncheckedCreateWithoutSectionInput> | SectionElementCreateWithoutSectionInput[] | SectionElementUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionElementCreateOrConnectWithoutSectionInput | SectionElementCreateOrConnectWithoutSectionInput[]
    upsert?: SectionElementUpsertWithWhereUniqueWithoutSectionInput | SectionElementUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SectionElementCreateManySectionInputEnvelope
    set?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    disconnect?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    delete?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    connect?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    update?: SectionElementUpdateWithWhereUniqueWithoutSectionInput | SectionElementUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SectionElementUpdateManyWithWhereWithoutSectionInput | SectionElementUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SectionElementScalarWhereInput | SectionElementScalarWhereInput[]
  }

  export type PageCreateNestedOneWithoutSectionsInput = {
    create?: XOR<PageCreateWithoutSectionsInput, PageUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: PageCreateOrConnectWithoutSectionsInput
    connect?: PageWhereUniqueInput
  }

  export type SectionCreateNestedOneWithoutPagesInput = {
    create?: XOR<SectionCreateWithoutPagesInput, SectionUncheckedCreateWithoutPagesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutPagesInput
    connect?: SectionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PageUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<PageCreateWithoutSectionsInput, PageUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: PageCreateOrConnectWithoutSectionsInput
    upsert?: PageUpsertWithoutSectionsInput
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutSectionsInput, PageUpdateWithoutSectionsInput>, PageUncheckedUpdateWithoutSectionsInput>
  }

  export type SectionUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<SectionCreateWithoutPagesInput, SectionUncheckedCreateWithoutPagesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutPagesInput
    upsert?: SectionUpsertWithoutPagesInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutPagesInput, SectionUpdateWithoutPagesInput>, SectionUncheckedUpdateWithoutPagesInput>
  }

  export type SectionElementCreateNestedManyWithoutElementInput = {
    create?: XOR<SectionElementCreateWithoutElementInput, SectionElementUncheckedCreateWithoutElementInput> | SectionElementCreateWithoutElementInput[] | SectionElementUncheckedCreateWithoutElementInput[]
    connectOrCreate?: SectionElementCreateOrConnectWithoutElementInput | SectionElementCreateOrConnectWithoutElementInput[]
    createMany?: SectionElementCreateManyElementInputEnvelope
    connect?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
  }

  export type ElementChildCreateNestedManyWithoutParentInput = {
    create?: XOR<ElementChildCreateWithoutParentInput, ElementChildUncheckedCreateWithoutParentInput> | ElementChildCreateWithoutParentInput[] | ElementChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ElementChildCreateOrConnectWithoutParentInput | ElementChildCreateOrConnectWithoutParentInput[]
    createMany?: ElementChildCreateManyParentInputEnvelope
    connect?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
  }

  export type ElementChildCreateNestedManyWithoutChildInput = {
    create?: XOR<ElementChildCreateWithoutChildInput, ElementChildUncheckedCreateWithoutChildInput> | ElementChildCreateWithoutChildInput[] | ElementChildUncheckedCreateWithoutChildInput[]
    connectOrCreate?: ElementChildCreateOrConnectWithoutChildInput | ElementChildCreateOrConnectWithoutChildInput[]
    createMany?: ElementChildCreateManyChildInputEnvelope
    connect?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
  }

  export type SectionElementUncheckedCreateNestedManyWithoutElementInput = {
    create?: XOR<SectionElementCreateWithoutElementInput, SectionElementUncheckedCreateWithoutElementInput> | SectionElementCreateWithoutElementInput[] | SectionElementUncheckedCreateWithoutElementInput[]
    connectOrCreate?: SectionElementCreateOrConnectWithoutElementInput | SectionElementCreateOrConnectWithoutElementInput[]
    createMany?: SectionElementCreateManyElementInputEnvelope
    connect?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
  }

  export type ElementChildUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ElementChildCreateWithoutParentInput, ElementChildUncheckedCreateWithoutParentInput> | ElementChildCreateWithoutParentInput[] | ElementChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ElementChildCreateOrConnectWithoutParentInput | ElementChildCreateOrConnectWithoutParentInput[]
    createMany?: ElementChildCreateManyParentInputEnvelope
    connect?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
  }

  export type ElementChildUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<ElementChildCreateWithoutChildInput, ElementChildUncheckedCreateWithoutChildInput> | ElementChildCreateWithoutChildInput[] | ElementChildUncheckedCreateWithoutChildInput[]
    connectOrCreate?: ElementChildCreateOrConnectWithoutChildInput | ElementChildCreateOrConnectWithoutChildInput[]
    createMany?: ElementChildCreateManyChildInputEnvelope
    connect?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
  }

  export type SectionElementUpdateManyWithoutElementNestedInput = {
    create?: XOR<SectionElementCreateWithoutElementInput, SectionElementUncheckedCreateWithoutElementInput> | SectionElementCreateWithoutElementInput[] | SectionElementUncheckedCreateWithoutElementInput[]
    connectOrCreate?: SectionElementCreateOrConnectWithoutElementInput | SectionElementCreateOrConnectWithoutElementInput[]
    upsert?: SectionElementUpsertWithWhereUniqueWithoutElementInput | SectionElementUpsertWithWhereUniqueWithoutElementInput[]
    createMany?: SectionElementCreateManyElementInputEnvelope
    set?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    disconnect?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    delete?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    connect?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    update?: SectionElementUpdateWithWhereUniqueWithoutElementInput | SectionElementUpdateWithWhereUniqueWithoutElementInput[]
    updateMany?: SectionElementUpdateManyWithWhereWithoutElementInput | SectionElementUpdateManyWithWhereWithoutElementInput[]
    deleteMany?: SectionElementScalarWhereInput | SectionElementScalarWhereInput[]
  }

  export type ElementChildUpdateManyWithoutParentNestedInput = {
    create?: XOR<ElementChildCreateWithoutParentInput, ElementChildUncheckedCreateWithoutParentInput> | ElementChildCreateWithoutParentInput[] | ElementChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ElementChildCreateOrConnectWithoutParentInput | ElementChildCreateOrConnectWithoutParentInput[]
    upsert?: ElementChildUpsertWithWhereUniqueWithoutParentInput | ElementChildUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ElementChildCreateManyParentInputEnvelope
    set?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    disconnect?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    delete?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    connect?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    update?: ElementChildUpdateWithWhereUniqueWithoutParentInput | ElementChildUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ElementChildUpdateManyWithWhereWithoutParentInput | ElementChildUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ElementChildScalarWhereInput | ElementChildScalarWhereInput[]
  }

  export type ElementChildUpdateManyWithoutChildNestedInput = {
    create?: XOR<ElementChildCreateWithoutChildInput, ElementChildUncheckedCreateWithoutChildInput> | ElementChildCreateWithoutChildInput[] | ElementChildUncheckedCreateWithoutChildInput[]
    connectOrCreate?: ElementChildCreateOrConnectWithoutChildInput | ElementChildCreateOrConnectWithoutChildInput[]
    upsert?: ElementChildUpsertWithWhereUniqueWithoutChildInput | ElementChildUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: ElementChildCreateManyChildInputEnvelope
    set?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    disconnect?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    delete?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    connect?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    update?: ElementChildUpdateWithWhereUniqueWithoutChildInput | ElementChildUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: ElementChildUpdateManyWithWhereWithoutChildInput | ElementChildUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: ElementChildScalarWhereInput | ElementChildScalarWhereInput[]
  }

  export type SectionElementUncheckedUpdateManyWithoutElementNestedInput = {
    create?: XOR<SectionElementCreateWithoutElementInput, SectionElementUncheckedCreateWithoutElementInput> | SectionElementCreateWithoutElementInput[] | SectionElementUncheckedCreateWithoutElementInput[]
    connectOrCreate?: SectionElementCreateOrConnectWithoutElementInput | SectionElementCreateOrConnectWithoutElementInput[]
    upsert?: SectionElementUpsertWithWhereUniqueWithoutElementInput | SectionElementUpsertWithWhereUniqueWithoutElementInput[]
    createMany?: SectionElementCreateManyElementInputEnvelope
    set?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    disconnect?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    delete?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    connect?: SectionElementWhereUniqueInput | SectionElementWhereUniqueInput[]
    update?: SectionElementUpdateWithWhereUniqueWithoutElementInput | SectionElementUpdateWithWhereUniqueWithoutElementInput[]
    updateMany?: SectionElementUpdateManyWithWhereWithoutElementInput | SectionElementUpdateManyWithWhereWithoutElementInput[]
    deleteMany?: SectionElementScalarWhereInput | SectionElementScalarWhereInput[]
  }

  export type ElementChildUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ElementChildCreateWithoutParentInput, ElementChildUncheckedCreateWithoutParentInput> | ElementChildCreateWithoutParentInput[] | ElementChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ElementChildCreateOrConnectWithoutParentInput | ElementChildCreateOrConnectWithoutParentInput[]
    upsert?: ElementChildUpsertWithWhereUniqueWithoutParentInput | ElementChildUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ElementChildCreateManyParentInputEnvelope
    set?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    disconnect?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    delete?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    connect?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    update?: ElementChildUpdateWithWhereUniqueWithoutParentInput | ElementChildUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ElementChildUpdateManyWithWhereWithoutParentInput | ElementChildUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ElementChildScalarWhereInput | ElementChildScalarWhereInput[]
  }

  export type ElementChildUncheckedUpdateManyWithoutChildNestedInput = {
    create?: XOR<ElementChildCreateWithoutChildInput, ElementChildUncheckedCreateWithoutChildInput> | ElementChildCreateWithoutChildInput[] | ElementChildUncheckedCreateWithoutChildInput[]
    connectOrCreate?: ElementChildCreateOrConnectWithoutChildInput | ElementChildCreateOrConnectWithoutChildInput[]
    upsert?: ElementChildUpsertWithWhereUniqueWithoutChildInput | ElementChildUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: ElementChildCreateManyChildInputEnvelope
    set?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    disconnect?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    delete?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    connect?: ElementChildWhereUniqueInput | ElementChildWhereUniqueInput[]
    update?: ElementChildUpdateWithWhereUniqueWithoutChildInput | ElementChildUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: ElementChildUpdateManyWithWhereWithoutChildInput | ElementChildUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: ElementChildScalarWhereInput | ElementChildScalarWhereInput[]
  }

  export type SectionCreateNestedOneWithoutElementsInput = {
    create?: XOR<SectionCreateWithoutElementsInput, SectionUncheckedCreateWithoutElementsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutElementsInput
    connect?: SectionWhereUniqueInput
  }

  export type ElementCreateNestedOneWithoutSectionsInput = {
    create?: XOR<ElementCreateWithoutSectionsInput, ElementUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: ElementCreateOrConnectWithoutSectionsInput
    connect?: ElementWhereUniqueInput
  }

  export type SectionUpdateOneRequiredWithoutElementsNestedInput = {
    create?: XOR<SectionCreateWithoutElementsInput, SectionUncheckedCreateWithoutElementsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutElementsInput
    upsert?: SectionUpsertWithoutElementsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutElementsInput, SectionUpdateWithoutElementsInput>, SectionUncheckedUpdateWithoutElementsInput>
  }

  export type ElementUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<ElementCreateWithoutSectionsInput, ElementUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: ElementCreateOrConnectWithoutSectionsInput
    upsert?: ElementUpsertWithoutSectionsInput
    connect?: ElementWhereUniqueInput
    update?: XOR<XOR<ElementUpdateToOneWithWhereWithoutSectionsInput, ElementUpdateWithoutSectionsInput>, ElementUncheckedUpdateWithoutSectionsInput>
  }

  export type ElementCreateNestedOneWithoutChildrenInput = {
    create?: XOR<ElementCreateWithoutChildrenInput, ElementUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ElementCreateOrConnectWithoutChildrenInput
    connect?: ElementWhereUniqueInput
  }

  export type ElementCreateNestedOneWithoutParentsInput = {
    create?: XOR<ElementCreateWithoutParentsInput, ElementUncheckedCreateWithoutParentsInput>
    connectOrCreate?: ElementCreateOrConnectWithoutParentsInput
    connect?: ElementWhereUniqueInput
  }

  export type ElementUpdateOneRequiredWithoutChildrenNestedInput = {
    create?: XOR<ElementCreateWithoutChildrenInput, ElementUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ElementCreateOrConnectWithoutChildrenInput
    upsert?: ElementUpsertWithoutChildrenInput
    connect?: ElementWhereUniqueInput
    update?: XOR<XOR<ElementUpdateToOneWithWhereWithoutChildrenInput, ElementUpdateWithoutChildrenInput>, ElementUncheckedUpdateWithoutChildrenInput>
  }

  export type ElementUpdateOneRequiredWithoutParentsNestedInput = {
    create?: XOR<ElementCreateWithoutParentsInput, ElementUncheckedCreateWithoutParentsInput>
    connectOrCreate?: ElementCreateOrConnectWithoutParentsInput
    upsert?: ElementUpsertWithoutParentsInput
    connect?: ElementWhereUniqueInput
    update?: XOR<XOR<ElementUpdateToOneWithWhereWithoutParentsInput, ElementUpdateWithoutParentsInput>, ElementUncheckedUpdateWithoutParentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PageCreateWithoutWebsiteInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: PageSectionCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutWebsiteInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: PageSectionUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutWebsiteInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutWebsiteInput, PageUncheckedCreateWithoutWebsiteInput>
  }

  export type PageCreateManyWebsiteInputEnvelope = {
    data: PageCreateManyWebsiteInput | PageCreateManyWebsiteInput[]
    skipDuplicates?: boolean
  }

  export type PageUpsertWithWhereUniqueWithoutWebsiteInput = {
    where: PageWhereUniqueInput
    update: XOR<PageUpdateWithoutWebsiteInput, PageUncheckedUpdateWithoutWebsiteInput>
    create: XOR<PageCreateWithoutWebsiteInput, PageUncheckedCreateWithoutWebsiteInput>
  }

  export type PageUpdateWithWhereUniqueWithoutWebsiteInput = {
    where: PageWhereUniqueInput
    data: XOR<PageUpdateWithoutWebsiteInput, PageUncheckedUpdateWithoutWebsiteInput>
  }

  export type PageUpdateManyWithWhereWithoutWebsiteInput = {
    where: PageScalarWhereInput
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type PageScalarWhereInput = {
    AND?: PageScalarWhereInput | PageScalarWhereInput[]
    OR?: PageScalarWhereInput[]
    NOT?: PageScalarWhereInput | PageScalarWhereInput[]
    id?: StringFilter<"Page"> | string
    name?: StringFilter<"Page"> | string
    slug?: StringFilter<"Page"> | string
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    websiteId?: StringFilter<"Page"> | string
  }

  export type WebsiteCreateWithoutPagesInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsiteUncheckedCreateWithoutPagesInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsiteCreateOrConnectWithoutPagesInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutPagesInput, WebsiteUncheckedCreateWithoutPagesInput>
  }

  export type PageSectionCreateWithoutPageInput = {
    position: number
    section: SectionCreateNestedOneWithoutPagesInput
  }

  export type PageSectionUncheckedCreateWithoutPageInput = {
    sectionId: string
    position: number
  }

  export type PageSectionCreateOrConnectWithoutPageInput = {
    where: PageSectionWhereUniqueInput
    create: XOR<PageSectionCreateWithoutPageInput, PageSectionUncheckedCreateWithoutPageInput>
  }

  export type PageSectionCreateManyPageInputEnvelope = {
    data: PageSectionCreateManyPageInput | PageSectionCreateManyPageInput[]
    skipDuplicates?: boolean
  }

  export type WebsiteUpsertWithoutPagesInput = {
    update: XOR<WebsiteUpdateWithoutPagesInput, WebsiteUncheckedUpdateWithoutPagesInput>
    create: XOR<WebsiteCreateWithoutPagesInput, WebsiteUncheckedCreateWithoutPagesInput>
    where?: WebsiteWhereInput
  }

  export type WebsiteUpdateToOneWithWhereWithoutPagesInput = {
    where?: WebsiteWhereInput
    data: XOR<WebsiteUpdateWithoutPagesInput, WebsiteUncheckedUpdateWithoutPagesInput>
  }

  export type WebsiteUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUncheckedUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageSectionUpsertWithWhereUniqueWithoutPageInput = {
    where: PageSectionWhereUniqueInput
    update: XOR<PageSectionUpdateWithoutPageInput, PageSectionUncheckedUpdateWithoutPageInput>
    create: XOR<PageSectionCreateWithoutPageInput, PageSectionUncheckedCreateWithoutPageInput>
  }

  export type PageSectionUpdateWithWhereUniqueWithoutPageInput = {
    where: PageSectionWhereUniqueInput
    data: XOR<PageSectionUpdateWithoutPageInput, PageSectionUncheckedUpdateWithoutPageInput>
  }

  export type PageSectionUpdateManyWithWhereWithoutPageInput = {
    where: PageSectionScalarWhereInput
    data: XOR<PageSectionUpdateManyMutationInput, PageSectionUncheckedUpdateManyWithoutPageInput>
  }

  export type PageSectionScalarWhereInput = {
    AND?: PageSectionScalarWhereInput | PageSectionScalarWhereInput[]
    OR?: PageSectionScalarWhereInput[]
    NOT?: PageSectionScalarWhereInput | PageSectionScalarWhereInput[]
    pageId?: StringFilter<"PageSection"> | string
    sectionId?: StringFilter<"PageSection"> | string
    position?: IntFilter<"PageSection"> | number
  }

  export type PageSectionCreateWithoutSectionInput = {
    position: number
    page: PageCreateNestedOneWithoutSectionsInput
  }

  export type PageSectionUncheckedCreateWithoutSectionInput = {
    pageId: string
    position: number
  }

  export type PageSectionCreateOrConnectWithoutSectionInput = {
    where: PageSectionWhereUniqueInput
    create: XOR<PageSectionCreateWithoutSectionInput, PageSectionUncheckedCreateWithoutSectionInput>
  }

  export type PageSectionCreateManySectionInputEnvelope = {
    data: PageSectionCreateManySectionInput | PageSectionCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type SectionElementCreateWithoutSectionInput = {
    position: number
    element: ElementCreateNestedOneWithoutSectionsInput
  }

  export type SectionElementUncheckedCreateWithoutSectionInput = {
    elementId: string
    position: number
  }

  export type SectionElementCreateOrConnectWithoutSectionInput = {
    where: SectionElementWhereUniqueInput
    create: XOR<SectionElementCreateWithoutSectionInput, SectionElementUncheckedCreateWithoutSectionInput>
  }

  export type SectionElementCreateManySectionInputEnvelope = {
    data: SectionElementCreateManySectionInput | SectionElementCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type PageSectionUpsertWithWhereUniqueWithoutSectionInput = {
    where: PageSectionWhereUniqueInput
    update: XOR<PageSectionUpdateWithoutSectionInput, PageSectionUncheckedUpdateWithoutSectionInput>
    create: XOR<PageSectionCreateWithoutSectionInput, PageSectionUncheckedCreateWithoutSectionInput>
  }

  export type PageSectionUpdateWithWhereUniqueWithoutSectionInput = {
    where: PageSectionWhereUniqueInput
    data: XOR<PageSectionUpdateWithoutSectionInput, PageSectionUncheckedUpdateWithoutSectionInput>
  }

  export type PageSectionUpdateManyWithWhereWithoutSectionInput = {
    where: PageSectionScalarWhereInput
    data: XOR<PageSectionUpdateManyMutationInput, PageSectionUncheckedUpdateManyWithoutSectionInput>
  }

  export type SectionElementUpsertWithWhereUniqueWithoutSectionInput = {
    where: SectionElementWhereUniqueInput
    update: XOR<SectionElementUpdateWithoutSectionInput, SectionElementUncheckedUpdateWithoutSectionInput>
    create: XOR<SectionElementCreateWithoutSectionInput, SectionElementUncheckedCreateWithoutSectionInput>
  }

  export type SectionElementUpdateWithWhereUniqueWithoutSectionInput = {
    where: SectionElementWhereUniqueInput
    data: XOR<SectionElementUpdateWithoutSectionInput, SectionElementUncheckedUpdateWithoutSectionInput>
  }

  export type SectionElementUpdateManyWithWhereWithoutSectionInput = {
    where: SectionElementScalarWhereInput
    data: XOR<SectionElementUpdateManyMutationInput, SectionElementUncheckedUpdateManyWithoutSectionInput>
  }

  export type SectionElementScalarWhereInput = {
    AND?: SectionElementScalarWhereInput | SectionElementScalarWhereInput[]
    OR?: SectionElementScalarWhereInput[]
    NOT?: SectionElementScalarWhereInput | SectionElementScalarWhereInput[]
    sectionId?: StringFilter<"SectionElement"> | string
    elementId?: StringFilter<"SectionElement"> | string
    position?: IntFilter<"SectionElement"> | number
  }

  export type PageCreateWithoutSectionsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    website: WebsiteCreateNestedOneWithoutPagesInput
  }

  export type PageUncheckedCreateWithoutSectionsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    websiteId: string
  }

  export type PageCreateOrConnectWithoutSectionsInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutSectionsInput, PageUncheckedCreateWithoutSectionsInput>
  }

  export type SectionCreateWithoutPagesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    elements?: SectionElementCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutPagesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    elements?: SectionElementUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutPagesInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutPagesInput, SectionUncheckedCreateWithoutPagesInput>
  }

  export type PageUpsertWithoutSectionsInput = {
    update: XOR<PageUpdateWithoutSectionsInput, PageUncheckedUpdateWithoutSectionsInput>
    create: XOR<PageCreateWithoutSectionsInput, PageUncheckedCreateWithoutSectionsInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutSectionsInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutSectionsInput, PageUncheckedUpdateWithoutSectionsInput>
  }

  export type PageUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    website?: WebsiteUpdateOneRequiredWithoutPagesNestedInput
  }

  export type PageUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websiteId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionUpsertWithoutPagesInput = {
    update: XOR<SectionUpdateWithoutPagesInput, SectionUncheckedUpdateWithoutPagesInput>
    create: XOR<SectionCreateWithoutPagesInput, SectionUncheckedCreateWithoutPagesInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutPagesInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutPagesInput, SectionUncheckedUpdateWithoutPagesInput>
  }

  export type SectionUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elements?: SectionElementUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elements?: SectionElementUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionElementCreateWithoutElementInput = {
    position: number
    section: SectionCreateNestedOneWithoutElementsInput
  }

  export type SectionElementUncheckedCreateWithoutElementInput = {
    sectionId: string
    position: number
  }

  export type SectionElementCreateOrConnectWithoutElementInput = {
    where: SectionElementWhereUniqueInput
    create: XOR<SectionElementCreateWithoutElementInput, SectionElementUncheckedCreateWithoutElementInput>
  }

  export type SectionElementCreateManyElementInputEnvelope = {
    data: SectionElementCreateManyElementInput | SectionElementCreateManyElementInput[]
    skipDuplicates?: boolean
  }

  export type ElementChildCreateWithoutParentInput = {
    position: number
    child: ElementCreateNestedOneWithoutParentsInput
  }

  export type ElementChildUncheckedCreateWithoutParentInput = {
    childId: string
    position: number
  }

  export type ElementChildCreateOrConnectWithoutParentInput = {
    where: ElementChildWhereUniqueInput
    create: XOR<ElementChildCreateWithoutParentInput, ElementChildUncheckedCreateWithoutParentInput>
  }

  export type ElementChildCreateManyParentInputEnvelope = {
    data: ElementChildCreateManyParentInput | ElementChildCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ElementChildCreateWithoutChildInput = {
    position: number
    parent: ElementCreateNestedOneWithoutChildrenInput
  }

  export type ElementChildUncheckedCreateWithoutChildInput = {
    parentId: string
    position: number
  }

  export type ElementChildCreateOrConnectWithoutChildInput = {
    where: ElementChildWhereUniqueInput
    create: XOR<ElementChildCreateWithoutChildInput, ElementChildUncheckedCreateWithoutChildInput>
  }

  export type ElementChildCreateManyChildInputEnvelope = {
    data: ElementChildCreateManyChildInput | ElementChildCreateManyChildInput[]
    skipDuplicates?: boolean
  }

  export type SectionElementUpsertWithWhereUniqueWithoutElementInput = {
    where: SectionElementWhereUniqueInput
    update: XOR<SectionElementUpdateWithoutElementInput, SectionElementUncheckedUpdateWithoutElementInput>
    create: XOR<SectionElementCreateWithoutElementInput, SectionElementUncheckedCreateWithoutElementInput>
  }

  export type SectionElementUpdateWithWhereUniqueWithoutElementInput = {
    where: SectionElementWhereUniqueInput
    data: XOR<SectionElementUpdateWithoutElementInput, SectionElementUncheckedUpdateWithoutElementInput>
  }

  export type SectionElementUpdateManyWithWhereWithoutElementInput = {
    where: SectionElementScalarWhereInput
    data: XOR<SectionElementUpdateManyMutationInput, SectionElementUncheckedUpdateManyWithoutElementInput>
  }

  export type ElementChildUpsertWithWhereUniqueWithoutParentInput = {
    where: ElementChildWhereUniqueInput
    update: XOR<ElementChildUpdateWithoutParentInput, ElementChildUncheckedUpdateWithoutParentInput>
    create: XOR<ElementChildCreateWithoutParentInput, ElementChildUncheckedCreateWithoutParentInput>
  }

  export type ElementChildUpdateWithWhereUniqueWithoutParentInput = {
    where: ElementChildWhereUniqueInput
    data: XOR<ElementChildUpdateWithoutParentInput, ElementChildUncheckedUpdateWithoutParentInput>
  }

  export type ElementChildUpdateManyWithWhereWithoutParentInput = {
    where: ElementChildScalarWhereInput
    data: XOR<ElementChildUpdateManyMutationInput, ElementChildUncheckedUpdateManyWithoutParentInput>
  }

  export type ElementChildScalarWhereInput = {
    AND?: ElementChildScalarWhereInput | ElementChildScalarWhereInput[]
    OR?: ElementChildScalarWhereInput[]
    NOT?: ElementChildScalarWhereInput | ElementChildScalarWhereInput[]
    parentId?: StringFilter<"ElementChild"> | string
    childId?: StringFilter<"ElementChild"> | string
    position?: IntFilter<"ElementChild"> | number
  }

  export type ElementChildUpsertWithWhereUniqueWithoutChildInput = {
    where: ElementChildWhereUniqueInput
    update: XOR<ElementChildUpdateWithoutChildInput, ElementChildUncheckedUpdateWithoutChildInput>
    create: XOR<ElementChildCreateWithoutChildInput, ElementChildUncheckedCreateWithoutChildInput>
  }

  export type ElementChildUpdateWithWhereUniqueWithoutChildInput = {
    where: ElementChildWhereUniqueInput
    data: XOR<ElementChildUpdateWithoutChildInput, ElementChildUncheckedUpdateWithoutChildInput>
  }

  export type ElementChildUpdateManyWithWhereWithoutChildInput = {
    where: ElementChildScalarWhereInput
    data: XOR<ElementChildUpdateManyMutationInput, ElementChildUncheckedUpdateManyWithoutChildInput>
  }

  export type SectionCreateWithoutElementsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageSectionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutElementsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageSectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutElementsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutElementsInput, SectionUncheckedCreateWithoutElementsInput>
  }

  export type ElementCreateWithoutSectionsInput = {
    id?: string
    tag: string
    key?: string | null
    className?: string | null
    content?: string | null
    src?: string | null
    alt?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ElementChildCreateNestedManyWithoutParentInput
    parents?: ElementChildCreateNestedManyWithoutChildInput
  }

  export type ElementUncheckedCreateWithoutSectionsInput = {
    id?: string
    tag: string
    key?: string | null
    className?: string | null
    content?: string | null
    src?: string | null
    alt?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ElementChildUncheckedCreateNestedManyWithoutParentInput
    parents?: ElementChildUncheckedCreateNestedManyWithoutChildInput
  }

  export type ElementCreateOrConnectWithoutSectionsInput = {
    where: ElementWhereUniqueInput
    create: XOR<ElementCreateWithoutSectionsInput, ElementUncheckedCreateWithoutSectionsInput>
  }

  export type SectionUpsertWithoutElementsInput = {
    update: XOR<SectionUpdateWithoutElementsInput, SectionUncheckedUpdateWithoutElementsInput>
    create: XOR<SectionCreateWithoutElementsInput, SectionUncheckedCreateWithoutElementsInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutElementsInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutElementsInput, SectionUncheckedUpdateWithoutElementsInput>
  }

  export type SectionUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageSectionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageSectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type ElementUpsertWithoutSectionsInput = {
    update: XOR<ElementUpdateWithoutSectionsInput, ElementUncheckedUpdateWithoutSectionsInput>
    create: XOR<ElementCreateWithoutSectionsInput, ElementUncheckedCreateWithoutSectionsInput>
    where?: ElementWhereInput
  }

  export type ElementUpdateToOneWithWhereWithoutSectionsInput = {
    where?: ElementWhereInput
    data: XOR<ElementUpdateWithoutSectionsInput, ElementUncheckedUpdateWithoutSectionsInput>
  }

  export type ElementUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    src?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ElementChildUpdateManyWithoutParentNestedInput
    parents?: ElementChildUpdateManyWithoutChildNestedInput
  }

  export type ElementUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    src?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ElementChildUncheckedUpdateManyWithoutParentNestedInput
    parents?: ElementChildUncheckedUpdateManyWithoutChildNestedInput
  }

  export type ElementCreateWithoutChildrenInput = {
    id?: string
    tag: string
    key?: string | null
    className?: string | null
    content?: string | null
    src?: string | null
    alt?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionElementCreateNestedManyWithoutElementInput
    parents?: ElementChildCreateNestedManyWithoutChildInput
  }

  export type ElementUncheckedCreateWithoutChildrenInput = {
    id?: string
    tag: string
    key?: string | null
    className?: string | null
    content?: string | null
    src?: string | null
    alt?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionElementUncheckedCreateNestedManyWithoutElementInput
    parents?: ElementChildUncheckedCreateNestedManyWithoutChildInput
  }

  export type ElementCreateOrConnectWithoutChildrenInput = {
    where: ElementWhereUniqueInput
    create: XOR<ElementCreateWithoutChildrenInput, ElementUncheckedCreateWithoutChildrenInput>
  }

  export type ElementCreateWithoutParentsInput = {
    id?: string
    tag: string
    key?: string | null
    className?: string | null
    content?: string | null
    src?: string | null
    alt?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionElementCreateNestedManyWithoutElementInput
    children?: ElementChildCreateNestedManyWithoutParentInput
  }

  export type ElementUncheckedCreateWithoutParentsInput = {
    id?: string
    tag: string
    key?: string | null
    className?: string | null
    content?: string | null
    src?: string | null
    alt?: string | null
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionElementUncheckedCreateNestedManyWithoutElementInput
    children?: ElementChildUncheckedCreateNestedManyWithoutParentInput
  }

  export type ElementCreateOrConnectWithoutParentsInput = {
    where: ElementWhereUniqueInput
    create: XOR<ElementCreateWithoutParentsInput, ElementUncheckedCreateWithoutParentsInput>
  }

  export type ElementUpsertWithoutChildrenInput = {
    update: XOR<ElementUpdateWithoutChildrenInput, ElementUncheckedUpdateWithoutChildrenInput>
    create: XOR<ElementCreateWithoutChildrenInput, ElementUncheckedCreateWithoutChildrenInput>
    where?: ElementWhereInput
  }

  export type ElementUpdateToOneWithWhereWithoutChildrenInput = {
    where?: ElementWhereInput
    data: XOR<ElementUpdateWithoutChildrenInput, ElementUncheckedUpdateWithoutChildrenInput>
  }

  export type ElementUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    src?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionElementUpdateManyWithoutElementNestedInput
    parents?: ElementChildUpdateManyWithoutChildNestedInput
  }

  export type ElementUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    src?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionElementUncheckedUpdateManyWithoutElementNestedInput
    parents?: ElementChildUncheckedUpdateManyWithoutChildNestedInput
  }

  export type ElementUpsertWithoutParentsInput = {
    update: XOR<ElementUpdateWithoutParentsInput, ElementUncheckedUpdateWithoutParentsInput>
    create: XOR<ElementCreateWithoutParentsInput, ElementUncheckedCreateWithoutParentsInput>
    where?: ElementWhereInput
  }

  export type ElementUpdateToOneWithWhereWithoutParentsInput = {
    where?: ElementWhereInput
    data: XOR<ElementUpdateWithoutParentsInput, ElementUncheckedUpdateWithoutParentsInput>
  }

  export type ElementUpdateWithoutParentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    src?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionElementUpdateManyWithoutElementNestedInput
    children?: ElementChildUpdateManyWithoutParentNestedInput
  }

  export type ElementUncheckedUpdateWithoutParentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    src?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionElementUncheckedUpdateManyWithoutElementNestedInput
    children?: ElementChildUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PageCreateManyWebsiteInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: PageSectionUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: PageSectionUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateManyWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageSectionCreateManyPageInput = {
    sectionId: string
    position: number
  }

  export type PageSectionUpdateWithoutPageInput = {
    position?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutPagesNestedInput
  }

  export type PageSectionUncheckedUpdateWithoutPageInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type PageSectionUncheckedUpdateManyWithoutPageInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type PageSectionCreateManySectionInput = {
    pageId: string
    position: number
  }

  export type SectionElementCreateManySectionInput = {
    elementId: string
    position: number
  }

  export type PageSectionUpdateWithoutSectionInput = {
    position?: IntFieldUpdateOperationsInput | number
    page?: PageUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type PageSectionUncheckedUpdateWithoutSectionInput = {
    pageId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type PageSectionUncheckedUpdateManyWithoutSectionInput = {
    pageId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type SectionElementUpdateWithoutSectionInput = {
    position?: IntFieldUpdateOperationsInput | number
    element?: ElementUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionElementUncheckedUpdateWithoutSectionInput = {
    elementId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type SectionElementUncheckedUpdateManyWithoutSectionInput = {
    elementId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type SectionElementCreateManyElementInput = {
    sectionId: string
    position: number
  }

  export type ElementChildCreateManyParentInput = {
    childId: string
    position: number
  }

  export type ElementChildCreateManyChildInput = {
    parentId: string
    position: number
  }

  export type SectionElementUpdateWithoutElementInput = {
    position?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutElementsNestedInput
  }

  export type SectionElementUncheckedUpdateWithoutElementInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type SectionElementUncheckedUpdateManyWithoutElementInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ElementChildUpdateWithoutParentInput = {
    position?: IntFieldUpdateOperationsInput | number
    child?: ElementUpdateOneRequiredWithoutParentsNestedInput
  }

  export type ElementChildUncheckedUpdateWithoutParentInput = {
    childId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ElementChildUncheckedUpdateManyWithoutParentInput = {
    childId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ElementChildUpdateWithoutChildInput = {
    position?: IntFieldUpdateOperationsInput | number
    parent?: ElementUpdateOneRequiredWithoutChildrenNestedInput
  }

  export type ElementChildUncheckedUpdateWithoutChildInput = {
    parentId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ElementChildUncheckedUpdateManyWithoutChildInput = {
    parentId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
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