
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
 * Model step
 * 
 */
export type step = $Result.DefaultSelection<Prisma.$stepPayload>
/**
 * Model test
 * 
 */
export type test = $Result.DefaultSelection<Prisma.$testPayload>
/**
 * Model test_name
 * 
 */
export type test_name = $Result.DefaultSelection<Prisma.$test_namePayload>
/**
 * Model test_names
 * 
 */
export type test_names = $Result.DefaultSelection<Prisma.$test_namesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Steps
 * const steps = await prisma.step.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Steps
   * const steps = await prisma.step.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.step`: Exposes CRUD operations for the **step** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.step.findMany()
    * ```
    */
  get step(): Prisma.stepDelegate<ExtArgs>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.testDelegate<ExtArgs>;

  /**
   * `prisma.test_name`: Exposes CRUD operations for the **test_name** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test_names
    * const test_names = await prisma.test_name.findMany()
    * ```
    */
  get test_name(): Prisma.test_nameDelegate<ExtArgs>;

  /**
   * `prisma.test_names`: Exposes CRUD operations for the **test_names** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test_names
    * const test_names = await prisma.test_names.findMany()
    * ```
    */
  get test_names(): Prisma.test_namesDelegate<ExtArgs>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    step: 'step',
    test: 'test',
    test_name: 'test_name',
    test_names: 'test_names'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'step' | 'test' | 'test_name' | 'test_names'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      step: {
        payload: Prisma.$stepPayload<ExtArgs>
        fields: Prisma.stepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stepFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stepFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stepPayload>
          }
          findFirst: {
            args: Prisma.stepFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stepFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stepPayload>
          }
          findMany: {
            args: Prisma.stepFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stepPayload>[]
          }
          create: {
            args: Prisma.stepCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stepPayload>
          }
          createMany: {
            args: Prisma.stepCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stepCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stepPayload>[]
          }
          delete: {
            args: Prisma.stepDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stepPayload>
          }
          update: {
            args: Prisma.stepUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stepPayload>
          }
          deleteMany: {
            args: Prisma.stepDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.stepUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.stepUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stepPayload>
          }
          aggregate: {
            args: Prisma.StepAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStep>
          }
          groupBy: {
            args: Prisma.stepGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StepGroupByOutputType>[]
          }
          count: {
            args: Prisma.stepCountArgs<ExtArgs>,
            result: $Utils.Optional<StepCountAggregateOutputType> | number
          }
        }
      }
      test: {
        payload: Prisma.$testPayload<ExtArgs>
        fields: Prisma.testFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          findFirst: {
            args: Prisma.testFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          findMany: {
            args: Prisma.testFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload>[]
          }
          create: {
            args: Prisma.testCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          createMany: {
            args: Prisma.testCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.testCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload>[]
          }
          delete: {
            args: Prisma.testDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          update: {
            args: Prisma.testUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          deleteMany: {
            args: Prisma.testDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.testUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.testUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.testGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.testCountArgs<ExtArgs>,
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      test_name: {
        payload: Prisma.$test_namePayload<ExtArgs>
        fields: Prisma.test_nameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.test_nameFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.test_nameFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namePayload>
          }
          findFirst: {
            args: Prisma.test_nameFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.test_nameFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namePayload>
          }
          findMany: {
            args: Prisma.test_nameFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namePayload>[]
          }
          create: {
            args: Prisma.test_nameCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namePayload>
          }
          createMany: {
            args: Prisma.test_nameCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.test_nameCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namePayload>[]
          }
          delete: {
            args: Prisma.test_nameDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namePayload>
          }
          update: {
            args: Prisma.test_nameUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namePayload>
          }
          deleteMany: {
            args: Prisma.test_nameDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.test_nameUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.test_nameUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namePayload>
          }
          aggregate: {
            args: Prisma.Test_nameAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTest_name>
          }
          groupBy: {
            args: Prisma.test_nameGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Test_nameGroupByOutputType>[]
          }
          count: {
            args: Prisma.test_nameCountArgs<ExtArgs>,
            result: $Utils.Optional<Test_nameCountAggregateOutputType> | number
          }
        }
      }
      test_names: {
        payload: Prisma.$test_namesPayload<ExtArgs>
        fields: Prisma.test_namesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.test_namesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.test_namesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namesPayload>
          }
          findFirst: {
            args: Prisma.test_namesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.test_namesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namesPayload>
          }
          findMany: {
            args: Prisma.test_namesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namesPayload>[]
          }
          create: {
            args: Prisma.test_namesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namesPayload>
          }
          createMany: {
            args: Prisma.test_namesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.test_namesCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namesPayload>[]
          }
          delete: {
            args: Prisma.test_namesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namesPayload>
          }
          update: {
            args: Prisma.test_namesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namesPayload>
          }
          deleteMany: {
            args: Prisma.test_namesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.test_namesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.test_namesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test_namesPayload>
          }
          aggregate: {
            args: Prisma.Test_namesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTest_names>
          }
          groupBy: {
            args: Prisma.test_namesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Test_namesGroupByOutputType>[]
          }
          count: {
            args: Prisma.test_namesCountArgs<ExtArgs>,
            result: $Utils.Optional<Test_namesCountAggregateOutputType> | number
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
   * Count Type StepCountOutputType
   */

  export type StepCountOutputType = {
    tests: number
  }

  export type StepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | StepCountOutputTypeCountTestsArgs
  }

  // Custom InputTypes
  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepCountOutputType
     */
    select?: StepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testWhereInput
  }


  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    test_name: number
  }

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test_name?: boolean | TestCountOutputTypeCountTest_nameArgs
  }

  // Custom InputTypes
  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountTest_nameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: test_nameWhereInput
  }


  /**
   * Count Type Test_namesCountOutputType
   */

  export type Test_namesCountOutputType = {
    test_name: number
  }

  export type Test_namesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test_name?: boolean | Test_namesCountOutputTypeCountTest_nameArgs
  }

  // Custom InputTypes
  /**
   * Test_namesCountOutputType without action
   */
  export type Test_namesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_namesCountOutputType
     */
    select?: Test_namesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Test_namesCountOutputType without action
   */
  export type Test_namesCountOutputTypeCountTest_nameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: test_nameWhereInput
  }


  /**
   * Models
   */

  /**
   * Model step
   */

  export type AggregateStep = {
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  export type StepAvgAggregateOutputType = {
    id: number | null
    subdivisionId: number | null
    categoryId: number | null
    num: number | null
  }

  export type StepSumAggregateOutputType = {
    id: number | null
    subdivisionId: number | null
    categoryId: number | null
    num: number | null
  }

  export type StepMinAggregateOutputType = {
    id: number | null
    subdivisionId: number | null
    categoryId: number | null
    num: number | null
    title: string | null
    shortTitle: string | null
    titlePart1: string | null
    titlePart2: string | null
    description: string | null
  }

  export type StepMaxAggregateOutputType = {
    id: number | null
    subdivisionId: number | null
    categoryId: number | null
    num: number | null
    title: string | null
    shortTitle: string | null
    titlePart1: string | null
    titlePart2: string | null
    description: string | null
  }

  export type StepCountAggregateOutputType = {
    id: number
    subdivisionId: number
    categoryId: number
    num: number
    title: number
    shortTitle: number
    titlePart1: number
    titlePart2: number
    description: number
    _all: number
  }


  export type StepAvgAggregateInputType = {
    id?: true
    subdivisionId?: true
    categoryId?: true
    num?: true
  }

  export type StepSumAggregateInputType = {
    id?: true
    subdivisionId?: true
    categoryId?: true
    num?: true
  }

  export type StepMinAggregateInputType = {
    id?: true
    subdivisionId?: true
    categoryId?: true
    num?: true
    title?: true
    shortTitle?: true
    titlePart1?: true
    titlePart2?: true
    description?: true
  }

  export type StepMaxAggregateInputType = {
    id?: true
    subdivisionId?: true
    categoryId?: true
    num?: true
    title?: true
    shortTitle?: true
    titlePart1?: true
    titlePart2?: true
    description?: true
  }

  export type StepCountAggregateInputType = {
    id?: true
    subdivisionId?: true
    categoryId?: true
    num?: true
    title?: true
    shortTitle?: true
    titlePart1?: true
    titlePart2?: true
    description?: true
    _all?: true
  }

  export type StepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which step to aggregate.
     */
    where?: stepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of steps to fetch.
     */
    orderBy?: stepOrderByWithRelationInput | stepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned steps
    **/
    _count?: true | StepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepMaxAggregateInputType
  }

  export type GetStepAggregateType<T extends StepAggregateArgs> = {
        [P in keyof T & keyof AggregateStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStep[P]>
      : GetScalarType<T[P], AggregateStep[P]>
  }




  export type stepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stepWhereInput
    orderBy?: stepOrderByWithAggregationInput | stepOrderByWithAggregationInput[]
    by: StepScalarFieldEnum[] | StepScalarFieldEnum
    having?: stepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepCountAggregateInputType | true
    _avg?: StepAvgAggregateInputType
    _sum?: StepSumAggregateInputType
    _min?: StepMinAggregateInputType
    _max?: StepMaxAggregateInputType
  }

  export type StepGroupByOutputType = {
    id: number
    subdivisionId: number
    categoryId: number
    num: number
    title: string
    shortTitle: string
    titlePart1: string
    titlePart2: string
    description: string
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  type GetStepGroupByPayload<T extends stepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepGroupByOutputType[P]>
            : GetScalarType<T[P], StepGroupByOutputType[P]>
        }
      >
    >


  export type stepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subdivisionId?: boolean
    categoryId?: boolean
    num?: boolean
    title?: boolean
    shortTitle?: boolean
    titlePart1?: boolean
    titlePart2?: boolean
    description?: boolean
    tests?: boolean | step$testsArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type stepSelectScalar = {
    id?: boolean
    subdivisionId?: boolean
    categoryId?: boolean
    num?: boolean
    title?: boolean
    shortTitle?: boolean
    titlePart1?: boolean
    titlePart2?: boolean
    description?: boolean
  }


  export type stepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | step$testsArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $stepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "step"
    objects: {
      tests: Prisma.$testPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subdivisionId: number
      categoryId: number
      num: number
      title: string
      shortTitle: string
      titlePart1: string
      titlePart2: string
      description: string
    }, ExtArgs["result"]["step"]>
    composites: {}
  }


  type stepGetPayload<S extends boolean | null | undefined | stepDefaultArgs> = $Result.GetResult<Prisma.$stepPayload, S>

  type stepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<stepFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: StepCountAggregateInputType | true
    }

  export interface stepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['step'], meta: { name: 'step' } }
    /**
     * Find zero or one Step that matches the filter.
     * @param {stepFindUniqueArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends stepFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, stepFindUniqueArgs<ExtArgs>>
    ): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Step that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {stepFindUniqueOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends stepFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stepFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepFindFirstArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends stepFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, stepFindFirstArgs<ExtArgs>>
    ): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepFindFirstOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends stepFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stepFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.step.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.step.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepWithIdOnly = await prisma.step.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends stepFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stepFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Step.
     * @param {stepCreateArgs} args - Arguments to create a Step.
     * @example
     * // Create one Step
     * const Step = await prisma.step.create({
     *   data: {
     *     // ... data to create a Step
     *   }
     * })
     * 
    **/
    create<T extends stepCreateArgs<ExtArgs>>(
      args: SelectSubset<T, stepCreateArgs<ExtArgs>>
    ): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Steps.
     * @param {stepCreateManyArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends stepCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stepCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Steps and returns the data saved in the database.
     * @param {stepCreateManyAndReturnArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends stepCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, stepCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Step.
     * @param {stepDeleteArgs} args - Arguments to delete one Step.
     * @example
     * // Delete one Step
     * const Step = await prisma.step.delete({
     *   where: {
     *     // ... filter to delete one Step
     *   }
     * })
     * 
    **/
    delete<T extends stepDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, stepDeleteArgs<ExtArgs>>
    ): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Step.
     * @param {stepUpdateArgs} args - Arguments to update one Step.
     * @example
     * // Update one Step
     * const step = await prisma.step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends stepUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, stepUpdateArgs<ExtArgs>>
    ): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Steps.
     * @param {stepDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends stepDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stepDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends stepUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, stepUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Step.
     * @param {stepUpsertArgs} args - Arguments to update or create a Step.
     * @example
     * // Update or create a Step
     * const step = await prisma.step.upsert({
     *   create: {
     *     // ... data to create a Step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Step we want to update
     *   }
     * })
    **/
    upsert<T extends stepUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, stepUpsertArgs<ExtArgs>>
    ): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.step.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends stepCountArgs>(
      args?: Subset<T, stepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StepAggregateArgs>(args: Subset<T, StepAggregateArgs>): Prisma.PrismaPromise<GetStepAggregateType<T>>

    /**
     * Group by Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepGroupByArgs} args - Group by arguments.
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
      T extends stepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stepGroupByArgs['orderBy'] }
        : { orderBy?: stepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the step model
   */
  readonly fields: stepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for step.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tests<T extends step$testsArgs<ExtArgs> = {}>(args?: Subset<T, step$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the step model
   */ 
  interface stepFieldRefs {
    readonly id: FieldRef<"step", 'Int'>
    readonly subdivisionId: FieldRef<"step", 'Int'>
    readonly categoryId: FieldRef<"step", 'Int'>
    readonly num: FieldRef<"step", 'Int'>
    readonly title: FieldRef<"step", 'String'>
    readonly shortTitle: FieldRef<"step", 'String'>
    readonly titlePart1: FieldRef<"step", 'String'>
    readonly titlePart2: FieldRef<"step", 'String'>
    readonly description: FieldRef<"step", 'String'>
  }
    

  // Custom InputTypes
  /**
   * step findUnique
   */
  export type stepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * Filter, which step to fetch.
     */
    where: stepWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * step findUniqueOrThrow
   */
  export type stepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * Filter, which step to fetch.
     */
    where: stepWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * step findFirst
   */
  export type stepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * Filter, which step to fetch.
     */
    where?: stepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of steps to fetch.
     */
    orderBy?: stepOrderByWithRelationInput | stepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for steps.
     */
    cursor?: stepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * step findFirstOrThrow
   */
  export type stepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * Filter, which step to fetch.
     */
    where?: stepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of steps to fetch.
     */
    orderBy?: stepOrderByWithRelationInput | stepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for steps.
     */
    cursor?: stepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * step findMany
   */
  export type stepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * Filter, which steps to fetch.
     */
    where?: stepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of steps to fetch.
     */
    orderBy?: stepOrderByWithRelationInput | stepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing steps.
     */
    cursor?: stepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` steps.
     */
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * step create
   */
  export type stepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * The data needed to create a step.
     */
    data: XOR<stepCreateInput, stepUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * step createMany
   */
  export type stepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many steps.
     */
    data: stepCreateManyInput | stepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * step createManyAndReturn
   */
  export type stepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * The data used to create many steps.
     */
    data: stepCreateManyInput | stepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * step update
   */
  export type stepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * The data needed to update a step.
     */
    data: XOR<stepUpdateInput, stepUncheckedUpdateInput>
    /**
     * Choose, which step to update.
     */
    where: stepWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * step updateMany
   */
  export type stepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update steps.
     */
    data: XOR<stepUpdateManyMutationInput, stepUncheckedUpdateManyInput>
    /**
     * Filter which steps to update
     */
    where?: stepWhereInput
  }

  /**
   * step upsert
   */
  export type stepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * The filter to search for the step to update in case it exists.
     */
    where: stepWhereUniqueInput
    /**
     * In case the step found by the `where` argument doesn't exist, create a new step with this data.
     */
    create: XOR<stepCreateInput, stepUncheckedCreateInput>
    /**
     * In case the step was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stepUpdateInput, stepUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * step delete
   */
  export type stepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * Filter which step to delete.
     */
    where: stepWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * step deleteMany
   */
  export type stepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which steps to delete
     */
    where?: stepWhereInput
  }

  /**
   * step.tests
   */
  export type step$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    where?: testWhereInput
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    cursor?: testWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * step without action
   */
  export type stepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
  }


  /**
   * Model test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    id: number | null
    type: number | null
    allowedMistakes: number | null
    numberOfQuestions: number | null
    orderIndex: number | null
    stepId: number | null
    premiumOnly: number | null
  }

  export type TestSumAggregateOutputType = {
    id: number | null
    type: number | null
    allowedMistakes: number | null
    numberOfQuestions: number | null
    orderIndex: number | null
    stepId: number | null
    premiumOnly: number | null
  }

  export type TestMinAggregateOutputType = {
    id: number | null
    type: number | null
    allowedMistakes: number | null
    numberOfQuestions: number | null
    questionPhrase: string | null
    ageToApply: string | null
    orderIndex: number | null
    endorsementCode: string | null
    stepId: number | null
    premiumOnly: number | null
    fullDescription: string | null
    cover: string | null
  }

  export type TestMaxAggregateOutputType = {
    id: number | null
    type: number | null
    allowedMistakes: number | null
    numberOfQuestions: number | null
    questionPhrase: string | null
    ageToApply: string | null
    orderIndex: number | null
    endorsementCode: string | null
    stepId: number | null
    premiumOnly: number | null
    fullDescription: string | null
    cover: string | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    type: number
    allowedMistakes: number
    numberOfQuestions: number
    questionPhrase: number
    ageToApply: number
    orderIndex: number
    endorsementCode: number
    stepId: number
    premiumOnly: number
    fullDescription: number
    cover: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    id?: true
    type?: true
    allowedMistakes?: true
    numberOfQuestions?: true
    orderIndex?: true
    stepId?: true
    premiumOnly?: true
  }

  export type TestSumAggregateInputType = {
    id?: true
    type?: true
    allowedMistakes?: true
    numberOfQuestions?: true
    orderIndex?: true
    stepId?: true
    premiumOnly?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    type?: true
    allowedMistakes?: true
    numberOfQuestions?: true
    questionPhrase?: true
    ageToApply?: true
    orderIndex?: true
    endorsementCode?: true
    stepId?: true
    premiumOnly?: true
    fullDescription?: true
    cover?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    type?: true
    allowedMistakes?: true
    numberOfQuestions?: true
    questionPhrase?: true
    ageToApply?: true
    orderIndex?: true
    endorsementCode?: true
    stepId?: true
    premiumOnly?: true
    fullDescription?: true
    cover?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    type?: true
    allowedMistakes?: true
    numberOfQuestions?: true
    questionPhrase?: true
    ageToApply?: true
    orderIndex?: true
    endorsementCode?: true
    stepId?: true
    premiumOnly?: true
    fullDescription?: true
    cover?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test to aggregate.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type testGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testWhereInput
    orderBy?: testOrderByWithAggregationInput | testOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: testScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: number
    type: number
    allowedMistakes: number
    numberOfQuestions: number
    questionPhrase: string
    ageToApply: string
    orderIndex: number
    endorsementCode: string
    stepId: number
    premiumOnly: number
    fullDescription: string
    cover: string
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends testGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type testSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    allowedMistakes?: boolean
    numberOfQuestions?: boolean
    questionPhrase?: boolean
    ageToApply?: boolean
    orderIndex?: boolean
    endorsementCode?: boolean
    stepId?: boolean
    premiumOnly?: boolean
    fullDescription?: boolean
    cover?: boolean
    step?: boolean | stepDefaultArgs<ExtArgs>
    test_name?: boolean | test$test_nameArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type testSelectScalar = {
    id?: boolean
    type?: boolean
    allowedMistakes?: boolean
    numberOfQuestions?: boolean
    questionPhrase?: boolean
    ageToApply?: boolean
    orderIndex?: boolean
    endorsementCode?: boolean
    stepId?: boolean
    premiumOnly?: boolean
    fullDescription?: boolean
    cover?: boolean
  }


  export type testInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | stepDefaultArgs<ExtArgs>
    test_name?: boolean | test$test_nameArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $testPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "test"
    objects: {
      step: Prisma.$stepPayload<ExtArgs>
      test_name: Prisma.$test_namePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: number
      allowedMistakes: number
      numberOfQuestions: number
      questionPhrase: string
      ageToApply: string
      orderIndex: number
      endorsementCode: string
      stepId: number
      premiumOnly: number
      fullDescription: string
      cover: string
    }, ExtArgs["result"]["test"]>
    composites: {}
  }


  type testGetPayload<S extends boolean | null | undefined | testDefaultArgs> = $Result.GetResult<Prisma.$testPayload, S>

  type testCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<testFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface testDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test'], meta: { name: 'test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {testFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends testFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, testFindUniqueArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {testFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends testFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, testFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends testFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, testFindFirstArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends testFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, testFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends testFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, testFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Test.
     * @param {testCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
    **/
    create<T extends testCreateArgs<ExtArgs>>(
      args: SelectSubset<T, testCreateArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tests.
     * @param {testCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends testCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, testCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {testCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends testCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, testCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Test.
     * @param {testDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
    **/
    delete<T extends testDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, testDeleteArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Test.
     * @param {testUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends testUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, testUpdateArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tests.
     * @param {testDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends testDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, testDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends testUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, testUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {testUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
    **/
    upsert<T extends testUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, testUpsertArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends testCountArgs>(
      args?: Subset<T, testCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testGroupByArgs} args - Group by arguments.
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
      T extends testGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testGroupByArgs['orderBy'] }
        : { orderBy?: testGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, testGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the test model
   */
  readonly fields: testFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    step<T extends stepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stepDefaultArgs<ExtArgs>>): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    test_name<T extends test$test_nameArgs<ExtArgs> = {}>(args?: Subset<T, test$test_nameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_namePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the test model
   */ 
  interface testFieldRefs {
    readonly id: FieldRef<"test", 'Int'>
    readonly type: FieldRef<"test", 'Int'>
    readonly allowedMistakes: FieldRef<"test", 'Int'>
    readonly numberOfQuestions: FieldRef<"test", 'Int'>
    readonly questionPhrase: FieldRef<"test", 'String'>
    readonly ageToApply: FieldRef<"test", 'String'>
    readonly orderIndex: FieldRef<"test", 'Int'>
    readonly endorsementCode: FieldRef<"test", 'String'>
    readonly stepId: FieldRef<"test", 'Int'>
    readonly premiumOnly: FieldRef<"test", 'Int'>
    readonly fullDescription: FieldRef<"test", 'String'>
    readonly cover: FieldRef<"test", 'String'>
  }
    

  // Custom InputTypes
  /**
   * test findUnique
   */
  export type testFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where: testWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test findUniqueOrThrow
   */
  export type testFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where: testWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test findFirst
   */
  export type testFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test findFirstOrThrow
   */
  export type testFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test findMany
   */
  export type testFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * Filter, which tests to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test create
   */
  export type testCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * The data needed to create a test.
     */
    data: XOR<testCreateInput, testUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test createMany
   */
  export type testCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tests.
     */
    data: testCreateManyInput | testCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test createManyAndReturn
   */
  export type testCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * The data used to create many tests.
     */
    data: testCreateManyInput | testCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test update
   */
  export type testUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * The data needed to update a test.
     */
    data: XOR<testUpdateInput, testUncheckedUpdateInput>
    /**
     * Choose, which test to update.
     */
    where: testWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test updateMany
   */
  export type testUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tests.
     */
    data: XOR<testUpdateManyMutationInput, testUncheckedUpdateManyInput>
    /**
     * Filter which tests to update
     */
    where?: testWhereInput
  }

  /**
   * test upsert
   */
  export type testUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * The filter to search for the test to update in case it exists.
     */
    where: testWhereUniqueInput
    /**
     * In case the test found by the `where` argument doesn't exist, create a new test with this data.
     */
    create: XOR<testCreateInput, testUncheckedCreateInput>
    /**
     * In case the test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testUpdateInput, testUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test delete
   */
  export type testDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * Filter which test to delete.
     */
    where: testWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test deleteMany
   */
  export type testDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tests to delete
     */
    where?: testWhereInput
  }

  /**
   * test.test_name
   */
  export type test$test_nameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_name
     */
    select?: test_nameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_nameInclude<ExtArgs> | null
    where?: test_nameWhereInput
    orderBy?: test_nameOrderByWithRelationInput | test_nameOrderByWithRelationInput[]
    cursor?: test_nameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Test_nameScalarFieldEnum | Test_nameScalarFieldEnum[]
  }

  /**
   * test without action
   */
  export type testDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
  }


  /**
   * Model test_name
   */

  export type AggregateTest_name = {
    _count: Test_nameCountAggregateOutputType | null
    _avg: Test_nameAvgAggregateOutputType | null
    _sum: Test_nameSumAggregateOutputType | null
    _min: Test_nameMinAggregateOutputType | null
    _max: Test_nameMaxAggregateOutputType | null
  }

  export type Test_nameAvgAggregateOutputType = {
    t_id: number | null
    n_id: number | null
  }

  export type Test_nameSumAggregateOutputType = {
    t_id: number | null
    n_id: number | null
  }

  export type Test_nameMinAggregateOutputType = {
    t_id: number | null
    n_id: number | null
  }

  export type Test_nameMaxAggregateOutputType = {
    t_id: number | null
    n_id: number | null
  }

  export type Test_nameCountAggregateOutputType = {
    t_id: number
    n_id: number
    _all: number
  }


  export type Test_nameAvgAggregateInputType = {
    t_id?: true
    n_id?: true
  }

  export type Test_nameSumAggregateInputType = {
    t_id?: true
    n_id?: true
  }

  export type Test_nameMinAggregateInputType = {
    t_id?: true
    n_id?: true
  }

  export type Test_nameMaxAggregateInputType = {
    t_id?: true
    n_id?: true
  }

  export type Test_nameCountAggregateInputType = {
    t_id?: true
    n_id?: true
    _all?: true
  }

  export type Test_nameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test_name to aggregate.
     */
    where?: test_nameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_names to fetch.
     */
    orderBy?: test_nameOrderByWithRelationInput | test_nameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: test_nameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned test_names
    **/
    _count?: true | Test_nameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Test_nameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Test_nameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test_nameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test_nameMaxAggregateInputType
  }

  export type GetTest_nameAggregateType<T extends Test_nameAggregateArgs> = {
        [P in keyof T & keyof AggregateTest_name]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest_name[P]>
      : GetScalarType<T[P], AggregateTest_name[P]>
  }




  export type test_nameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: test_nameWhereInput
    orderBy?: test_nameOrderByWithAggregationInput | test_nameOrderByWithAggregationInput[]
    by: Test_nameScalarFieldEnum[] | Test_nameScalarFieldEnum
    having?: test_nameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test_nameCountAggregateInputType | true
    _avg?: Test_nameAvgAggregateInputType
    _sum?: Test_nameSumAggregateInputType
    _min?: Test_nameMinAggregateInputType
    _max?: Test_nameMaxAggregateInputType
  }

  export type Test_nameGroupByOutputType = {
    t_id: number
    n_id: number
    _count: Test_nameCountAggregateOutputType | null
    _avg: Test_nameAvgAggregateOutputType | null
    _sum: Test_nameSumAggregateOutputType | null
    _min: Test_nameMinAggregateOutputType | null
    _max: Test_nameMaxAggregateOutputType | null
  }

  type GetTest_nameGroupByPayload<T extends test_nameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Test_nameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test_nameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test_nameGroupByOutputType[P]>
            : GetScalarType<T[P], Test_nameGroupByOutputType[P]>
        }
      >
    >


  export type test_nameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    t_id?: boolean
    n_id?: boolean
    test?: boolean | testDefaultArgs<ExtArgs>
    test_names?: boolean | test_namesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test_name"]>

  export type test_nameSelectScalar = {
    t_id?: boolean
    n_id?: boolean
  }


  export type test_nameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | testDefaultArgs<ExtArgs>
    test_names?: boolean | test_namesDefaultArgs<ExtArgs>
  }


  export type $test_namePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "test_name"
    objects: {
      test: Prisma.$testPayload<ExtArgs>
      test_names: Prisma.$test_namesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      t_id: number
      n_id: number
    }, ExtArgs["result"]["test_name"]>
    composites: {}
  }


  type test_nameGetPayload<S extends boolean | null | undefined | test_nameDefaultArgs> = $Result.GetResult<Prisma.$test_namePayload, S>

  type test_nameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<test_nameFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: Test_nameCountAggregateInputType | true
    }

  export interface test_nameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test_name'], meta: { name: 'test_name' } }
    /**
     * Find zero or one Test_name that matches the filter.
     * @param {test_nameFindUniqueArgs} args - Arguments to find a Test_name
     * @example
     * // Get one Test_name
     * const test_name = await prisma.test_name.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends test_nameFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, test_nameFindUniqueArgs<ExtArgs>>
    ): Prisma__test_nameClient<$Result.GetResult<Prisma.$test_namePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Test_name that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {test_nameFindUniqueOrThrowArgs} args - Arguments to find a Test_name
     * @example
     * // Get one Test_name
     * const test_name = await prisma.test_name.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends test_nameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, test_nameFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__test_nameClient<$Result.GetResult<Prisma.$test_namePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Test_name that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_nameFindFirstArgs} args - Arguments to find a Test_name
     * @example
     * // Get one Test_name
     * const test_name = await prisma.test_name.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends test_nameFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, test_nameFindFirstArgs<ExtArgs>>
    ): Prisma__test_nameClient<$Result.GetResult<Prisma.$test_namePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Test_name that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_nameFindFirstOrThrowArgs} args - Arguments to find a Test_name
     * @example
     * // Get one Test_name
     * const test_name = await prisma.test_name.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends test_nameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, test_nameFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__test_nameClient<$Result.GetResult<Prisma.$test_namePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Test_names that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_nameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_names
     * const test_names = await prisma.test_name.findMany()
     * 
     * // Get first 10 Test_names
     * const test_names = await prisma.test_name.findMany({ take: 10 })
     * 
     * // Only select the `t_id`
     * const test_nameWithT_idOnly = await prisma.test_name.findMany({ select: { t_id: true } })
     * 
    **/
    findMany<T extends test_nameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, test_nameFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_namePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Test_name.
     * @param {test_nameCreateArgs} args - Arguments to create a Test_name.
     * @example
     * // Create one Test_name
     * const Test_name = await prisma.test_name.create({
     *   data: {
     *     // ... data to create a Test_name
     *   }
     * })
     * 
    **/
    create<T extends test_nameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, test_nameCreateArgs<ExtArgs>>
    ): Prisma__test_nameClient<$Result.GetResult<Prisma.$test_namePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Test_names.
     * @param {test_nameCreateManyArgs} args - Arguments to create many Test_names.
     * @example
     * // Create many Test_names
     * const test_name = await prisma.test_name.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends test_nameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, test_nameCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Test_names and returns the data saved in the database.
     * @param {test_nameCreateManyAndReturnArgs} args - Arguments to create many Test_names.
     * @example
     * // Create many Test_names
     * const test_name = await prisma.test_name.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Test_names and only return the `t_id`
     * const test_nameWithT_idOnly = await prisma.test_name.createManyAndReturn({ 
     *   select: { t_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends test_nameCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, test_nameCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_namePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Test_name.
     * @param {test_nameDeleteArgs} args - Arguments to delete one Test_name.
     * @example
     * // Delete one Test_name
     * const Test_name = await prisma.test_name.delete({
     *   where: {
     *     // ... filter to delete one Test_name
     *   }
     * })
     * 
    **/
    delete<T extends test_nameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, test_nameDeleteArgs<ExtArgs>>
    ): Prisma__test_nameClient<$Result.GetResult<Prisma.$test_namePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Test_name.
     * @param {test_nameUpdateArgs} args - Arguments to update one Test_name.
     * @example
     * // Update one Test_name
     * const test_name = await prisma.test_name.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends test_nameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, test_nameUpdateArgs<ExtArgs>>
    ): Prisma__test_nameClient<$Result.GetResult<Prisma.$test_namePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Test_names.
     * @param {test_nameDeleteManyArgs} args - Arguments to filter Test_names to delete.
     * @example
     * // Delete a few Test_names
     * const { count } = await prisma.test_name.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends test_nameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, test_nameDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_nameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_names
     * const test_name = await prisma.test_name.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends test_nameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, test_nameUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test_name.
     * @param {test_nameUpsertArgs} args - Arguments to update or create a Test_name.
     * @example
     * // Update or create a Test_name
     * const test_name = await prisma.test_name.upsert({
     *   create: {
     *     // ... data to create a Test_name
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_name we want to update
     *   }
     * })
    **/
    upsert<T extends test_nameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, test_nameUpsertArgs<ExtArgs>>
    ): Prisma__test_nameClient<$Result.GetResult<Prisma.$test_namePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Test_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_nameCountArgs} args - Arguments to filter Test_names to count.
     * @example
     * // Count the number of Test_names
     * const count = await prisma.test_name.count({
     *   where: {
     *     // ... the filter for the Test_names we want to count
     *   }
     * })
    **/
    count<T extends test_nameCountArgs>(
      args?: Subset<T, test_nameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test_nameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test_name.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_nameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Test_nameAggregateArgs>(args: Subset<T, Test_nameAggregateArgs>): Prisma.PrismaPromise<GetTest_nameAggregateType<T>>

    /**
     * Group by Test_name.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_nameGroupByArgs} args - Group by arguments.
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
      T extends test_nameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: test_nameGroupByArgs['orderBy'] }
        : { orderBy?: test_nameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, test_nameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest_nameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the test_name model
   */
  readonly fields: test_nameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test_name.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__test_nameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    test<T extends testDefaultArgs<ExtArgs> = {}>(args?: Subset<T, testDefaultArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    test_names<T extends test_namesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, test_namesDefaultArgs<ExtArgs>>): Prisma__test_namesClient<$Result.GetResult<Prisma.$test_namesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the test_name model
   */ 
  interface test_nameFieldRefs {
    readonly t_id: FieldRef<"test_name", 'Int'>
    readonly n_id: FieldRef<"test_name", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * test_name findUnique
   */
  export type test_nameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_name
     */
    select?: test_nameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_nameInclude<ExtArgs> | null
    /**
     * Filter, which test_name to fetch.
     */
    where: test_nameWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_name findUniqueOrThrow
   */
  export type test_nameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_name
     */
    select?: test_nameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_nameInclude<ExtArgs> | null
    /**
     * Filter, which test_name to fetch.
     */
    where: test_nameWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_name findFirst
   */
  export type test_nameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_name
     */
    select?: test_nameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_nameInclude<ExtArgs> | null
    /**
     * Filter, which test_name to fetch.
     */
    where?: test_nameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_names to fetch.
     */
    orderBy?: test_nameOrderByWithRelationInput | test_nameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_names.
     */
    cursor?: test_nameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_names.
     */
    distinct?: Test_nameScalarFieldEnum | Test_nameScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_name findFirstOrThrow
   */
  export type test_nameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_name
     */
    select?: test_nameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_nameInclude<ExtArgs> | null
    /**
     * Filter, which test_name to fetch.
     */
    where?: test_nameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_names to fetch.
     */
    orderBy?: test_nameOrderByWithRelationInput | test_nameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_names.
     */
    cursor?: test_nameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_names.
     */
    distinct?: Test_nameScalarFieldEnum | Test_nameScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_name findMany
   */
  export type test_nameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_name
     */
    select?: test_nameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_nameInclude<ExtArgs> | null
    /**
     * Filter, which test_names to fetch.
     */
    where?: test_nameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_names to fetch.
     */
    orderBy?: test_nameOrderByWithRelationInput | test_nameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing test_names.
     */
    cursor?: test_nameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_names.
     */
    skip?: number
    distinct?: Test_nameScalarFieldEnum | Test_nameScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_name create
   */
  export type test_nameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_name
     */
    select?: test_nameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_nameInclude<ExtArgs> | null
    /**
     * The data needed to create a test_name.
     */
    data: XOR<test_nameCreateInput, test_nameUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_name createMany
   */
  export type test_nameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many test_names.
     */
    data: test_nameCreateManyInput | test_nameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test_name createManyAndReturn
   */
  export type test_nameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_name
     */
    select?: test_nameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_nameInclude<ExtArgs> | null
    /**
     * The data used to create many test_names.
     */
    data: test_nameCreateManyInput | test_nameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test_name update
   */
  export type test_nameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_name
     */
    select?: test_nameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_nameInclude<ExtArgs> | null
    /**
     * The data needed to update a test_name.
     */
    data: XOR<test_nameUpdateInput, test_nameUncheckedUpdateInput>
    /**
     * Choose, which test_name to update.
     */
    where: test_nameWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_name updateMany
   */
  export type test_nameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update test_names.
     */
    data: XOR<test_nameUpdateManyMutationInput, test_nameUncheckedUpdateManyInput>
    /**
     * Filter which test_names to update
     */
    where?: test_nameWhereInput
  }

  /**
   * test_name upsert
   */
  export type test_nameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_name
     */
    select?: test_nameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_nameInclude<ExtArgs> | null
    /**
     * The filter to search for the test_name to update in case it exists.
     */
    where: test_nameWhereUniqueInput
    /**
     * In case the test_name found by the `where` argument doesn't exist, create a new test_name with this data.
     */
    create: XOR<test_nameCreateInput, test_nameUncheckedCreateInput>
    /**
     * In case the test_name was found with the provided `where` argument, update it with this data.
     */
    update: XOR<test_nameUpdateInput, test_nameUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_name delete
   */
  export type test_nameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_name
     */
    select?: test_nameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_nameInclude<ExtArgs> | null
    /**
     * Filter which test_name to delete.
     */
    where: test_nameWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_name deleteMany
   */
  export type test_nameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test_names to delete
     */
    where?: test_nameWhereInput
  }

  /**
   * test_name without action
   */
  export type test_nameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_name
     */
    select?: test_nameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_nameInclude<ExtArgs> | null
  }


  /**
   * Model test_names
   */

  export type AggregateTest_names = {
    _count: Test_namesCountAggregateOutputType | null
    _avg: Test_namesAvgAggregateOutputType | null
    _sum: Test_namesSumAggregateOutputType | null
    _min: Test_namesMinAggregateOutputType | null
    _max: Test_namesMaxAggregateOutputType | null
  }

  export type Test_namesAvgAggregateOutputType = {
    id: number | null
  }

  export type Test_namesSumAggregateOutputType = {
    id: number | null
  }

  export type Test_namesMinAggregateOutputType = {
    id: number | null
    title: string | null
    shortTitle: string | null
    description: string | null
  }

  export type Test_namesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    shortTitle: string | null
    description: string | null
  }

  export type Test_namesCountAggregateOutputType = {
    id: number
    title: number
    shortTitle: number
    description: number
    _all: number
  }


  export type Test_namesAvgAggregateInputType = {
    id?: true
  }

  export type Test_namesSumAggregateInputType = {
    id?: true
  }

  export type Test_namesMinAggregateInputType = {
    id?: true
    title?: true
    shortTitle?: true
    description?: true
  }

  export type Test_namesMaxAggregateInputType = {
    id?: true
    title?: true
    shortTitle?: true
    description?: true
  }

  export type Test_namesCountAggregateInputType = {
    id?: true
    title?: true
    shortTitle?: true
    description?: true
    _all?: true
  }

  export type Test_namesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test_names to aggregate.
     */
    where?: test_namesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_names to fetch.
     */
    orderBy?: test_namesOrderByWithRelationInput | test_namesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: test_namesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned test_names
    **/
    _count?: true | Test_namesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Test_namesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Test_namesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test_namesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test_namesMaxAggregateInputType
  }

  export type GetTest_namesAggregateType<T extends Test_namesAggregateArgs> = {
        [P in keyof T & keyof AggregateTest_names]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest_names[P]>
      : GetScalarType<T[P], AggregateTest_names[P]>
  }




  export type test_namesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: test_namesWhereInput
    orderBy?: test_namesOrderByWithAggregationInput | test_namesOrderByWithAggregationInput[]
    by: Test_namesScalarFieldEnum[] | Test_namesScalarFieldEnum
    having?: test_namesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test_namesCountAggregateInputType | true
    _avg?: Test_namesAvgAggregateInputType
    _sum?: Test_namesSumAggregateInputType
    _min?: Test_namesMinAggregateInputType
    _max?: Test_namesMaxAggregateInputType
  }

  export type Test_namesGroupByOutputType = {
    id: number
    title: string
    shortTitle: string
    description: string
    _count: Test_namesCountAggregateOutputType | null
    _avg: Test_namesAvgAggregateOutputType | null
    _sum: Test_namesSumAggregateOutputType | null
    _min: Test_namesMinAggregateOutputType | null
    _max: Test_namesMaxAggregateOutputType | null
  }

  type GetTest_namesGroupByPayload<T extends test_namesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Test_namesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test_namesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test_namesGroupByOutputType[P]>
            : GetScalarType<T[P], Test_namesGroupByOutputType[P]>
        }
      >
    >


  export type test_namesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    shortTitle?: boolean
    description?: boolean
    test_name?: boolean | test_names$test_nameArgs<ExtArgs>
    _count?: boolean | Test_namesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test_names"]>

  export type test_namesSelectScalar = {
    id?: boolean
    title?: boolean
    shortTitle?: boolean
    description?: boolean
  }


  export type test_namesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test_name?: boolean | test_names$test_nameArgs<ExtArgs>
    _count?: boolean | Test_namesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $test_namesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "test_names"
    objects: {
      test_name: Prisma.$test_namePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      shortTitle: string
      description: string
    }, ExtArgs["result"]["test_names"]>
    composites: {}
  }


  type test_namesGetPayload<S extends boolean | null | undefined | test_namesDefaultArgs> = $Result.GetResult<Prisma.$test_namesPayload, S>

  type test_namesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<test_namesFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: Test_namesCountAggregateInputType | true
    }

  export interface test_namesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test_names'], meta: { name: 'test_names' } }
    /**
     * Find zero or one Test_names that matches the filter.
     * @param {test_namesFindUniqueArgs} args - Arguments to find a Test_names
     * @example
     * // Get one Test_names
     * const test_names = await prisma.test_names.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends test_namesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, test_namesFindUniqueArgs<ExtArgs>>
    ): Prisma__test_namesClient<$Result.GetResult<Prisma.$test_namesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Test_names that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {test_namesFindUniqueOrThrowArgs} args - Arguments to find a Test_names
     * @example
     * // Get one Test_names
     * const test_names = await prisma.test_names.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends test_namesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, test_namesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__test_namesClient<$Result.GetResult<Prisma.$test_namesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Test_names that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_namesFindFirstArgs} args - Arguments to find a Test_names
     * @example
     * // Get one Test_names
     * const test_names = await prisma.test_names.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends test_namesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, test_namesFindFirstArgs<ExtArgs>>
    ): Prisma__test_namesClient<$Result.GetResult<Prisma.$test_namesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Test_names that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_namesFindFirstOrThrowArgs} args - Arguments to find a Test_names
     * @example
     * // Get one Test_names
     * const test_names = await prisma.test_names.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends test_namesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, test_namesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__test_namesClient<$Result.GetResult<Prisma.$test_namesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Test_names that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_namesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_names
     * const test_names = await prisma.test_names.findMany()
     * 
     * // Get first 10 Test_names
     * const test_names = await prisma.test_names.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test_namesWithIdOnly = await prisma.test_names.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends test_namesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, test_namesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_namesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Test_names.
     * @param {test_namesCreateArgs} args - Arguments to create a Test_names.
     * @example
     * // Create one Test_names
     * const Test_names = await prisma.test_names.create({
     *   data: {
     *     // ... data to create a Test_names
     *   }
     * })
     * 
    **/
    create<T extends test_namesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, test_namesCreateArgs<ExtArgs>>
    ): Prisma__test_namesClient<$Result.GetResult<Prisma.$test_namesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Test_names.
     * @param {test_namesCreateManyArgs} args - Arguments to create many Test_names.
     * @example
     * // Create many Test_names
     * const test_names = await prisma.test_names.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends test_namesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, test_namesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Test_names and returns the data saved in the database.
     * @param {test_namesCreateManyAndReturnArgs} args - Arguments to create many Test_names.
     * @example
     * // Create many Test_names
     * const test_names = await prisma.test_names.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Test_names and only return the `id`
     * const test_namesWithIdOnly = await prisma.test_names.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends test_namesCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, test_namesCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_namesPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Test_names.
     * @param {test_namesDeleteArgs} args - Arguments to delete one Test_names.
     * @example
     * // Delete one Test_names
     * const Test_names = await prisma.test_names.delete({
     *   where: {
     *     // ... filter to delete one Test_names
     *   }
     * })
     * 
    **/
    delete<T extends test_namesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, test_namesDeleteArgs<ExtArgs>>
    ): Prisma__test_namesClient<$Result.GetResult<Prisma.$test_namesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Test_names.
     * @param {test_namesUpdateArgs} args - Arguments to update one Test_names.
     * @example
     * // Update one Test_names
     * const test_names = await prisma.test_names.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends test_namesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, test_namesUpdateArgs<ExtArgs>>
    ): Prisma__test_namesClient<$Result.GetResult<Prisma.$test_namesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Test_names.
     * @param {test_namesDeleteManyArgs} args - Arguments to filter Test_names to delete.
     * @example
     * // Delete a few Test_names
     * const { count } = await prisma.test_names.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends test_namesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, test_namesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_namesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_names
     * const test_names = await prisma.test_names.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends test_namesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, test_namesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test_names.
     * @param {test_namesUpsertArgs} args - Arguments to update or create a Test_names.
     * @example
     * // Update or create a Test_names
     * const test_names = await prisma.test_names.upsert({
     *   create: {
     *     // ... data to create a Test_names
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_names we want to update
     *   }
     * })
    **/
    upsert<T extends test_namesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, test_namesUpsertArgs<ExtArgs>>
    ): Prisma__test_namesClient<$Result.GetResult<Prisma.$test_namesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Test_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_namesCountArgs} args - Arguments to filter Test_names to count.
     * @example
     * // Count the number of Test_names
     * const count = await prisma.test_names.count({
     *   where: {
     *     // ... the filter for the Test_names we want to count
     *   }
     * })
    **/
    count<T extends test_namesCountArgs>(
      args?: Subset<T, test_namesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test_namesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_namesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Test_namesAggregateArgs>(args: Subset<T, Test_namesAggregateArgs>): Prisma.PrismaPromise<GetTest_namesAggregateType<T>>

    /**
     * Group by Test_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_namesGroupByArgs} args - Group by arguments.
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
      T extends test_namesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: test_namesGroupByArgs['orderBy'] }
        : { orderBy?: test_namesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, test_namesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest_namesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the test_names model
   */
  readonly fields: test_namesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test_names.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__test_namesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    test_name<T extends test_names$test_nameArgs<ExtArgs> = {}>(args?: Subset<T, test_names$test_nameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_namePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the test_names model
   */ 
  interface test_namesFieldRefs {
    readonly id: FieldRef<"test_names", 'Int'>
    readonly title: FieldRef<"test_names", 'String'>
    readonly shortTitle: FieldRef<"test_names", 'String'>
    readonly description: FieldRef<"test_names", 'String'>
  }
    

  // Custom InputTypes
  /**
   * test_names findUnique
   */
  export type test_namesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_names
     */
    select?: test_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_namesInclude<ExtArgs> | null
    /**
     * Filter, which test_names to fetch.
     */
    where: test_namesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_names findUniqueOrThrow
   */
  export type test_namesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_names
     */
    select?: test_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_namesInclude<ExtArgs> | null
    /**
     * Filter, which test_names to fetch.
     */
    where: test_namesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_names findFirst
   */
  export type test_namesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_names
     */
    select?: test_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_namesInclude<ExtArgs> | null
    /**
     * Filter, which test_names to fetch.
     */
    where?: test_namesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_names to fetch.
     */
    orderBy?: test_namesOrderByWithRelationInput | test_namesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_names.
     */
    cursor?: test_namesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_names.
     */
    distinct?: Test_namesScalarFieldEnum | Test_namesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_names findFirstOrThrow
   */
  export type test_namesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_names
     */
    select?: test_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_namesInclude<ExtArgs> | null
    /**
     * Filter, which test_names to fetch.
     */
    where?: test_namesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_names to fetch.
     */
    orderBy?: test_namesOrderByWithRelationInput | test_namesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_names.
     */
    cursor?: test_namesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_names.
     */
    distinct?: Test_namesScalarFieldEnum | Test_namesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_names findMany
   */
  export type test_namesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_names
     */
    select?: test_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_namesInclude<ExtArgs> | null
    /**
     * Filter, which test_names to fetch.
     */
    where?: test_namesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_names to fetch.
     */
    orderBy?: test_namesOrderByWithRelationInput | test_namesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing test_names.
     */
    cursor?: test_namesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_names.
     */
    skip?: number
    distinct?: Test_namesScalarFieldEnum | Test_namesScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_names create
   */
  export type test_namesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_names
     */
    select?: test_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_namesInclude<ExtArgs> | null
    /**
     * The data needed to create a test_names.
     */
    data: XOR<test_namesCreateInput, test_namesUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_names createMany
   */
  export type test_namesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many test_names.
     */
    data: test_namesCreateManyInput | test_namesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test_names createManyAndReturn
   */
  export type test_namesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_names
     */
    select?: test_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_namesInclude<ExtArgs> | null
    /**
     * The data used to create many test_names.
     */
    data: test_namesCreateManyInput | test_namesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test_names update
   */
  export type test_namesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_names
     */
    select?: test_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_namesInclude<ExtArgs> | null
    /**
     * The data needed to update a test_names.
     */
    data: XOR<test_namesUpdateInput, test_namesUncheckedUpdateInput>
    /**
     * Choose, which test_names to update.
     */
    where: test_namesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_names updateMany
   */
  export type test_namesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update test_names.
     */
    data: XOR<test_namesUpdateManyMutationInput, test_namesUncheckedUpdateManyInput>
    /**
     * Filter which test_names to update
     */
    where?: test_namesWhereInput
  }

  /**
   * test_names upsert
   */
  export type test_namesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_names
     */
    select?: test_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_namesInclude<ExtArgs> | null
    /**
     * The filter to search for the test_names to update in case it exists.
     */
    where: test_namesWhereUniqueInput
    /**
     * In case the test_names found by the `where` argument doesn't exist, create a new test_names with this data.
     */
    create: XOR<test_namesCreateInput, test_namesUncheckedCreateInput>
    /**
     * In case the test_names was found with the provided `where` argument, update it with this data.
     */
    update: XOR<test_namesUpdateInput, test_namesUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_names delete
   */
  export type test_namesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_names
     */
    select?: test_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_namesInclude<ExtArgs> | null
    /**
     * Filter which test_names to delete.
     */
    where: test_namesWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * test_names deleteMany
   */
  export type test_namesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test_names to delete
     */
    where?: test_namesWhereInput
  }

  /**
   * test_names.test_name
   */
  export type test_names$test_nameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_name
     */
    select?: test_nameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_nameInclude<ExtArgs> | null
    where?: test_nameWhereInput
    orderBy?: test_nameOrderByWithRelationInput | test_nameOrderByWithRelationInput[]
    cursor?: test_nameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Test_nameScalarFieldEnum | Test_nameScalarFieldEnum[]
  }

  /**
   * test_names without action
   */
  export type test_namesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_names
     */
    select?: test_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_namesInclude<ExtArgs> | null
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


  export const StepScalarFieldEnum: {
    id: 'id',
    subdivisionId: 'subdivisionId',
    categoryId: 'categoryId',
    num: 'num',
    title: 'title',
    shortTitle: 'shortTitle',
    titlePart1: 'titlePart1',
    titlePart2: 'titlePart2',
    description: 'description'
  };

  export type StepScalarFieldEnum = (typeof StepScalarFieldEnum)[keyof typeof StepScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const TestScalarFieldEnum: {
    id: 'id',
    type: 'type',
    allowedMistakes: 'allowedMistakes',
    numberOfQuestions: 'numberOfQuestions',
    questionPhrase: 'questionPhrase',
    ageToApply: 'ageToApply',
    orderIndex: 'orderIndex',
    endorsementCode: 'endorsementCode',
    stepId: 'stepId',
    premiumOnly: 'premiumOnly',
    fullDescription: 'fullDescription',
    cover: 'cover'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const Test_nameScalarFieldEnum: {
    t_id: 't_id',
    n_id: 'n_id'
  };

  export type Test_nameScalarFieldEnum = (typeof Test_nameScalarFieldEnum)[keyof typeof Test_nameScalarFieldEnum]


  export const Test_namesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    shortTitle: 'shortTitle',
    description: 'description'
  };

  export type Test_namesScalarFieldEnum = (typeof Test_namesScalarFieldEnum)[keyof typeof Test_namesScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type stepWhereInput = {
    AND?: stepWhereInput | stepWhereInput[]
    OR?: stepWhereInput[]
    NOT?: stepWhereInput | stepWhereInput[]
    id?: IntFilter<"step"> | number
    subdivisionId?: IntFilter<"step"> | number
    categoryId?: IntFilter<"step"> | number
    num?: IntFilter<"step"> | number
    title?: StringFilter<"step"> | string
    shortTitle?: StringFilter<"step"> | string
    titlePart1?: StringFilter<"step"> | string
    titlePart2?: StringFilter<"step"> | string
    description?: StringFilter<"step"> | string
    tests?: TestListRelationFilter
  }

  export type stepOrderByWithRelationInput = {
    id?: SortOrder
    subdivisionId?: SortOrder
    categoryId?: SortOrder
    num?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    titlePart1?: SortOrder
    titlePart2?: SortOrder
    description?: SortOrder
    tests?: testOrderByRelationAggregateInput
  }

  export type stepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stepWhereInput | stepWhereInput[]
    OR?: stepWhereInput[]
    NOT?: stepWhereInput | stepWhereInput[]
    subdivisionId?: IntFilter<"step"> | number
    categoryId?: IntFilter<"step"> | number
    num?: IntFilter<"step"> | number
    title?: StringFilter<"step"> | string
    shortTitle?: StringFilter<"step"> | string
    titlePart1?: StringFilter<"step"> | string
    titlePart2?: StringFilter<"step"> | string
    description?: StringFilter<"step"> | string
    tests?: TestListRelationFilter
  }, "id">

  export type stepOrderByWithAggregationInput = {
    id?: SortOrder
    subdivisionId?: SortOrder
    categoryId?: SortOrder
    num?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    titlePart1?: SortOrder
    titlePart2?: SortOrder
    description?: SortOrder
    _count?: stepCountOrderByAggregateInput
    _avg?: stepAvgOrderByAggregateInput
    _max?: stepMaxOrderByAggregateInput
    _min?: stepMinOrderByAggregateInput
    _sum?: stepSumOrderByAggregateInput
  }

  export type stepScalarWhereWithAggregatesInput = {
    AND?: stepScalarWhereWithAggregatesInput | stepScalarWhereWithAggregatesInput[]
    OR?: stepScalarWhereWithAggregatesInput[]
    NOT?: stepScalarWhereWithAggregatesInput | stepScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"step"> | number
    subdivisionId?: IntWithAggregatesFilter<"step"> | number
    categoryId?: IntWithAggregatesFilter<"step"> | number
    num?: IntWithAggregatesFilter<"step"> | number
    title?: StringWithAggregatesFilter<"step"> | string
    shortTitle?: StringWithAggregatesFilter<"step"> | string
    titlePart1?: StringWithAggregatesFilter<"step"> | string
    titlePart2?: StringWithAggregatesFilter<"step"> | string
    description?: StringWithAggregatesFilter<"step"> | string
  }

  export type testWhereInput = {
    AND?: testWhereInput | testWhereInput[]
    OR?: testWhereInput[]
    NOT?: testWhereInput | testWhereInput[]
    id?: IntFilter<"test"> | number
    type?: IntFilter<"test"> | number
    allowedMistakes?: IntFilter<"test"> | number
    numberOfQuestions?: IntFilter<"test"> | number
    questionPhrase?: StringFilter<"test"> | string
    ageToApply?: StringFilter<"test"> | string
    orderIndex?: IntFilter<"test"> | number
    endorsementCode?: StringFilter<"test"> | string
    stepId?: IntFilter<"test"> | number
    premiumOnly?: IntFilter<"test"> | number
    fullDescription?: StringFilter<"test"> | string
    cover?: StringFilter<"test"> | string
    step?: XOR<StepRelationFilter, stepWhereInput>
    test_name?: Test_nameListRelationFilter
  }

  export type testOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    allowedMistakes?: SortOrder
    numberOfQuestions?: SortOrder
    questionPhrase?: SortOrder
    ageToApply?: SortOrder
    orderIndex?: SortOrder
    endorsementCode?: SortOrder
    stepId?: SortOrder
    premiumOnly?: SortOrder
    fullDescription?: SortOrder
    cover?: SortOrder
    step?: stepOrderByWithRelationInput
    test_name?: test_nameOrderByRelationAggregateInput
  }

  export type testWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: testWhereInput | testWhereInput[]
    OR?: testWhereInput[]
    NOT?: testWhereInput | testWhereInput[]
    type?: IntFilter<"test"> | number
    allowedMistakes?: IntFilter<"test"> | number
    numberOfQuestions?: IntFilter<"test"> | number
    questionPhrase?: StringFilter<"test"> | string
    ageToApply?: StringFilter<"test"> | string
    orderIndex?: IntFilter<"test"> | number
    endorsementCode?: StringFilter<"test"> | string
    stepId?: IntFilter<"test"> | number
    premiumOnly?: IntFilter<"test"> | number
    fullDescription?: StringFilter<"test"> | string
    cover?: StringFilter<"test"> | string
    step?: XOR<StepRelationFilter, stepWhereInput>
    test_name?: Test_nameListRelationFilter
  }, "id">

  export type testOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    allowedMistakes?: SortOrder
    numberOfQuestions?: SortOrder
    questionPhrase?: SortOrder
    ageToApply?: SortOrder
    orderIndex?: SortOrder
    endorsementCode?: SortOrder
    stepId?: SortOrder
    premiumOnly?: SortOrder
    fullDescription?: SortOrder
    cover?: SortOrder
    _count?: testCountOrderByAggregateInput
    _avg?: testAvgOrderByAggregateInput
    _max?: testMaxOrderByAggregateInput
    _min?: testMinOrderByAggregateInput
    _sum?: testSumOrderByAggregateInput
  }

  export type testScalarWhereWithAggregatesInput = {
    AND?: testScalarWhereWithAggregatesInput | testScalarWhereWithAggregatesInput[]
    OR?: testScalarWhereWithAggregatesInput[]
    NOT?: testScalarWhereWithAggregatesInput | testScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"test"> | number
    type?: IntWithAggregatesFilter<"test"> | number
    allowedMistakes?: IntWithAggregatesFilter<"test"> | number
    numberOfQuestions?: IntWithAggregatesFilter<"test"> | number
    questionPhrase?: StringWithAggregatesFilter<"test"> | string
    ageToApply?: StringWithAggregatesFilter<"test"> | string
    orderIndex?: IntWithAggregatesFilter<"test"> | number
    endorsementCode?: StringWithAggregatesFilter<"test"> | string
    stepId?: IntWithAggregatesFilter<"test"> | number
    premiumOnly?: IntWithAggregatesFilter<"test"> | number
    fullDescription?: StringWithAggregatesFilter<"test"> | string
    cover?: StringWithAggregatesFilter<"test"> | string
  }

  export type test_nameWhereInput = {
    AND?: test_nameWhereInput | test_nameWhereInput[]
    OR?: test_nameWhereInput[]
    NOT?: test_nameWhereInput | test_nameWhereInput[]
    t_id?: IntFilter<"test_name"> | number
    n_id?: IntFilter<"test_name"> | number
    test?: XOR<TestRelationFilter, testWhereInput>
    test_names?: XOR<Test_namesRelationFilter, test_namesWhereInput>
  }

  export type test_nameOrderByWithRelationInput = {
    t_id?: SortOrder
    n_id?: SortOrder
    test?: testOrderByWithRelationInput
    test_names?: test_namesOrderByWithRelationInput
  }

  export type test_nameWhereUniqueInput = Prisma.AtLeast<{
    test_nameId?: test_nameTest_nameIdCompoundUniqueInput
    AND?: test_nameWhereInput | test_nameWhereInput[]
    OR?: test_nameWhereInput[]
    NOT?: test_nameWhereInput | test_nameWhereInput[]
    t_id?: IntFilter<"test_name"> | number
    n_id?: IntFilter<"test_name"> | number
    test?: XOR<TestRelationFilter, testWhereInput>
    test_names?: XOR<Test_namesRelationFilter, test_namesWhereInput>
  }, "test_nameId">

  export type test_nameOrderByWithAggregationInput = {
    t_id?: SortOrder
    n_id?: SortOrder
    _count?: test_nameCountOrderByAggregateInput
    _avg?: test_nameAvgOrderByAggregateInput
    _max?: test_nameMaxOrderByAggregateInput
    _min?: test_nameMinOrderByAggregateInput
    _sum?: test_nameSumOrderByAggregateInput
  }

  export type test_nameScalarWhereWithAggregatesInput = {
    AND?: test_nameScalarWhereWithAggregatesInput | test_nameScalarWhereWithAggregatesInput[]
    OR?: test_nameScalarWhereWithAggregatesInput[]
    NOT?: test_nameScalarWhereWithAggregatesInput | test_nameScalarWhereWithAggregatesInput[]
    t_id?: IntWithAggregatesFilter<"test_name"> | number
    n_id?: IntWithAggregatesFilter<"test_name"> | number
  }

  export type test_namesWhereInput = {
    AND?: test_namesWhereInput | test_namesWhereInput[]
    OR?: test_namesWhereInput[]
    NOT?: test_namesWhereInput | test_namesWhereInput[]
    id?: IntFilter<"test_names"> | number
    title?: StringFilter<"test_names"> | string
    shortTitle?: StringFilter<"test_names"> | string
    description?: StringFilter<"test_names"> | string
    test_name?: Test_nameListRelationFilter
  }

  export type test_namesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    description?: SortOrder
    test_name?: test_nameOrderByRelationAggregateInput
  }

  export type test_namesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: test_namesWhereInput | test_namesWhereInput[]
    OR?: test_namesWhereInput[]
    NOT?: test_namesWhereInput | test_namesWhereInput[]
    title?: StringFilter<"test_names"> | string
    shortTitle?: StringFilter<"test_names"> | string
    description?: StringFilter<"test_names"> | string
    test_name?: Test_nameListRelationFilter
  }, "id">

  export type test_namesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    description?: SortOrder
    _count?: test_namesCountOrderByAggregateInput
    _avg?: test_namesAvgOrderByAggregateInput
    _max?: test_namesMaxOrderByAggregateInput
    _min?: test_namesMinOrderByAggregateInput
    _sum?: test_namesSumOrderByAggregateInput
  }

  export type test_namesScalarWhereWithAggregatesInput = {
    AND?: test_namesScalarWhereWithAggregatesInput | test_namesScalarWhereWithAggregatesInput[]
    OR?: test_namesScalarWhereWithAggregatesInput[]
    NOT?: test_namesScalarWhereWithAggregatesInput | test_namesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"test_names"> | number
    title?: StringWithAggregatesFilter<"test_names"> | string
    shortTitle?: StringWithAggregatesFilter<"test_names"> | string
    description?: StringWithAggregatesFilter<"test_names"> | string
  }

  export type stepCreateInput = {
    subdivisionId: number
    categoryId: number
    num: number
    title: string
    shortTitle: string
    titlePart1: string
    titlePart2: string
    description: string
    tests?: testCreateNestedManyWithoutStepInput
  }

  export type stepUncheckedCreateInput = {
    id?: number
    subdivisionId: number
    categoryId: number
    num: number
    title: string
    shortTitle: string
    titlePart1: string
    titlePart2: string
    description: string
    tests?: testUncheckedCreateNestedManyWithoutStepInput
  }

  export type stepUpdateInput = {
    subdivisionId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    num?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: StringFieldUpdateOperationsInput | string
    titlePart1?: StringFieldUpdateOperationsInput | string
    titlePart2?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tests?: testUpdateManyWithoutStepNestedInput
  }

  export type stepUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subdivisionId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    num?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: StringFieldUpdateOperationsInput | string
    titlePart1?: StringFieldUpdateOperationsInput | string
    titlePart2?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tests?: testUncheckedUpdateManyWithoutStepNestedInput
  }

  export type stepCreateManyInput = {
    id?: number
    subdivisionId: number
    categoryId: number
    num: number
    title: string
    shortTitle: string
    titlePart1: string
    titlePart2: string
    description: string
  }

  export type stepUpdateManyMutationInput = {
    subdivisionId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    num?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: StringFieldUpdateOperationsInput | string
    titlePart1?: StringFieldUpdateOperationsInput | string
    titlePart2?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type stepUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subdivisionId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    num?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: StringFieldUpdateOperationsInput | string
    titlePart1?: StringFieldUpdateOperationsInput | string
    titlePart2?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type testCreateInput = {
    type: number
    allowedMistakes: number
    numberOfQuestions: number
    questionPhrase: string
    ageToApply: string
    orderIndex: number
    endorsementCode: string
    premiumOnly: number
    fullDescription: string
    cover: string
    step: stepCreateNestedOneWithoutTestsInput
    test_name?: test_nameCreateNestedManyWithoutTestInput
  }

  export type testUncheckedCreateInput = {
    id?: number
    type: number
    allowedMistakes: number
    numberOfQuestions: number
    questionPhrase: string
    ageToApply: string
    orderIndex: number
    endorsementCode: string
    stepId: number
    premiumOnly: number
    fullDescription: string
    cover: string
    test_name?: test_nameUncheckedCreateNestedManyWithoutTestInput
  }

  export type testUpdateInput = {
    type?: IntFieldUpdateOperationsInput | number
    allowedMistakes?: IntFieldUpdateOperationsInput | number
    numberOfQuestions?: IntFieldUpdateOperationsInput | number
    questionPhrase?: StringFieldUpdateOperationsInput | string
    ageToApply?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    endorsementCode?: StringFieldUpdateOperationsInput | string
    premiumOnly?: IntFieldUpdateOperationsInput | number
    fullDescription?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    step?: stepUpdateOneRequiredWithoutTestsNestedInput
    test_name?: test_nameUpdateManyWithoutTestNestedInput
  }

  export type testUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    allowedMistakes?: IntFieldUpdateOperationsInput | number
    numberOfQuestions?: IntFieldUpdateOperationsInput | number
    questionPhrase?: StringFieldUpdateOperationsInput | string
    ageToApply?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    endorsementCode?: StringFieldUpdateOperationsInput | string
    stepId?: IntFieldUpdateOperationsInput | number
    premiumOnly?: IntFieldUpdateOperationsInput | number
    fullDescription?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    test_name?: test_nameUncheckedUpdateManyWithoutTestNestedInput
  }

  export type testCreateManyInput = {
    id?: number
    type: number
    allowedMistakes: number
    numberOfQuestions: number
    questionPhrase: string
    ageToApply: string
    orderIndex: number
    endorsementCode: string
    stepId: number
    premiumOnly: number
    fullDescription: string
    cover: string
  }

  export type testUpdateManyMutationInput = {
    type?: IntFieldUpdateOperationsInput | number
    allowedMistakes?: IntFieldUpdateOperationsInput | number
    numberOfQuestions?: IntFieldUpdateOperationsInput | number
    questionPhrase?: StringFieldUpdateOperationsInput | string
    ageToApply?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    endorsementCode?: StringFieldUpdateOperationsInput | string
    premiumOnly?: IntFieldUpdateOperationsInput | number
    fullDescription?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
  }

  export type testUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    allowedMistakes?: IntFieldUpdateOperationsInput | number
    numberOfQuestions?: IntFieldUpdateOperationsInput | number
    questionPhrase?: StringFieldUpdateOperationsInput | string
    ageToApply?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    endorsementCode?: StringFieldUpdateOperationsInput | string
    stepId?: IntFieldUpdateOperationsInput | number
    premiumOnly?: IntFieldUpdateOperationsInput | number
    fullDescription?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
  }

  export type test_nameCreateInput = {
    test: testCreateNestedOneWithoutTest_nameInput
    test_names: test_namesCreateNestedOneWithoutTest_nameInput
  }

  export type test_nameUncheckedCreateInput = {
    t_id: number
    n_id: number
  }

  export type test_nameUpdateInput = {
    test?: testUpdateOneRequiredWithoutTest_nameNestedInput
    test_names?: test_namesUpdateOneRequiredWithoutTest_nameNestedInput
  }

  export type test_nameUncheckedUpdateInput = {
    t_id?: IntFieldUpdateOperationsInput | number
    n_id?: IntFieldUpdateOperationsInput | number
  }

  export type test_nameCreateManyInput = {
    t_id: number
    n_id: number
  }

  export type test_nameUpdateManyMutationInput = {

  }

  export type test_nameUncheckedUpdateManyInput = {
    t_id?: IntFieldUpdateOperationsInput | number
    n_id?: IntFieldUpdateOperationsInput | number
  }

  export type test_namesCreateInput = {
    title: string
    shortTitle: string
    description: string
    test_name?: test_nameCreateNestedManyWithoutTest_namesInput
  }

  export type test_namesUncheckedCreateInput = {
    id?: number
    title: string
    shortTitle: string
    description: string
    test_name?: test_nameUncheckedCreateNestedManyWithoutTest_namesInput
  }

  export type test_namesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    test_name?: test_nameUpdateManyWithoutTest_namesNestedInput
  }

  export type test_namesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    test_name?: test_nameUncheckedUpdateManyWithoutTest_namesNestedInput
  }

  export type test_namesCreateManyInput = {
    id?: number
    title: string
    shortTitle: string
    description: string
  }

  export type test_namesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type test_namesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
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

  export type TestListRelationFilter = {
    every?: testWhereInput
    some?: testWhereInput
    none?: testWhereInput
  }

  export type testOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stepCountOrderByAggregateInput = {
    id?: SortOrder
    subdivisionId?: SortOrder
    categoryId?: SortOrder
    num?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    titlePart1?: SortOrder
    titlePart2?: SortOrder
    description?: SortOrder
  }

  export type stepAvgOrderByAggregateInput = {
    id?: SortOrder
    subdivisionId?: SortOrder
    categoryId?: SortOrder
    num?: SortOrder
  }

  export type stepMaxOrderByAggregateInput = {
    id?: SortOrder
    subdivisionId?: SortOrder
    categoryId?: SortOrder
    num?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    titlePart1?: SortOrder
    titlePart2?: SortOrder
    description?: SortOrder
  }

  export type stepMinOrderByAggregateInput = {
    id?: SortOrder
    subdivisionId?: SortOrder
    categoryId?: SortOrder
    num?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    titlePart1?: SortOrder
    titlePart2?: SortOrder
    description?: SortOrder
  }

  export type stepSumOrderByAggregateInput = {
    id?: SortOrder
    subdivisionId?: SortOrder
    categoryId?: SortOrder
    num?: SortOrder
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

  export type StepRelationFilter = {
    is?: stepWhereInput
    isNot?: stepWhereInput
  }

  export type Test_nameListRelationFilter = {
    every?: test_nameWhereInput
    some?: test_nameWhereInput
    none?: test_nameWhereInput
  }

  export type test_nameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type testCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    allowedMistakes?: SortOrder
    numberOfQuestions?: SortOrder
    questionPhrase?: SortOrder
    ageToApply?: SortOrder
    orderIndex?: SortOrder
    endorsementCode?: SortOrder
    stepId?: SortOrder
    premiumOnly?: SortOrder
    fullDescription?: SortOrder
    cover?: SortOrder
  }

  export type testAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    allowedMistakes?: SortOrder
    numberOfQuestions?: SortOrder
    orderIndex?: SortOrder
    stepId?: SortOrder
    premiumOnly?: SortOrder
  }

  export type testMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    allowedMistakes?: SortOrder
    numberOfQuestions?: SortOrder
    questionPhrase?: SortOrder
    ageToApply?: SortOrder
    orderIndex?: SortOrder
    endorsementCode?: SortOrder
    stepId?: SortOrder
    premiumOnly?: SortOrder
    fullDescription?: SortOrder
    cover?: SortOrder
  }

  export type testMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    allowedMistakes?: SortOrder
    numberOfQuestions?: SortOrder
    questionPhrase?: SortOrder
    ageToApply?: SortOrder
    orderIndex?: SortOrder
    endorsementCode?: SortOrder
    stepId?: SortOrder
    premiumOnly?: SortOrder
    fullDescription?: SortOrder
    cover?: SortOrder
  }

  export type testSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    allowedMistakes?: SortOrder
    numberOfQuestions?: SortOrder
    orderIndex?: SortOrder
    stepId?: SortOrder
    premiumOnly?: SortOrder
  }

  export type TestRelationFilter = {
    is?: testWhereInput
    isNot?: testWhereInput
  }

  export type Test_namesRelationFilter = {
    is?: test_namesWhereInput
    isNot?: test_namesWhereInput
  }

  export type test_nameTest_nameIdCompoundUniqueInput = {
    t_id: number
    n_id: number
  }

  export type test_nameCountOrderByAggregateInput = {
    t_id?: SortOrder
    n_id?: SortOrder
  }

  export type test_nameAvgOrderByAggregateInput = {
    t_id?: SortOrder
    n_id?: SortOrder
  }

  export type test_nameMaxOrderByAggregateInput = {
    t_id?: SortOrder
    n_id?: SortOrder
  }

  export type test_nameMinOrderByAggregateInput = {
    t_id?: SortOrder
    n_id?: SortOrder
  }

  export type test_nameSumOrderByAggregateInput = {
    t_id?: SortOrder
    n_id?: SortOrder
  }

  export type test_namesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    description?: SortOrder
  }

  export type test_namesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type test_namesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    description?: SortOrder
  }

  export type test_namesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    description?: SortOrder
  }

  export type test_namesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type testCreateNestedManyWithoutStepInput = {
    create?: XOR<testCreateWithoutStepInput, testUncheckedCreateWithoutStepInput> | testCreateWithoutStepInput[] | testUncheckedCreateWithoutStepInput[]
    connectOrCreate?: testCreateOrConnectWithoutStepInput | testCreateOrConnectWithoutStepInput[]
    createMany?: testCreateManyStepInputEnvelope
    connect?: testWhereUniqueInput | testWhereUniqueInput[]
  }

  export type testUncheckedCreateNestedManyWithoutStepInput = {
    create?: XOR<testCreateWithoutStepInput, testUncheckedCreateWithoutStepInput> | testCreateWithoutStepInput[] | testUncheckedCreateWithoutStepInput[]
    connectOrCreate?: testCreateOrConnectWithoutStepInput | testCreateOrConnectWithoutStepInput[]
    createMany?: testCreateManyStepInputEnvelope
    connect?: testWhereUniqueInput | testWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type testUpdateManyWithoutStepNestedInput = {
    create?: XOR<testCreateWithoutStepInput, testUncheckedCreateWithoutStepInput> | testCreateWithoutStepInput[] | testUncheckedCreateWithoutStepInput[]
    connectOrCreate?: testCreateOrConnectWithoutStepInput | testCreateOrConnectWithoutStepInput[]
    upsert?: testUpsertWithWhereUniqueWithoutStepInput | testUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: testCreateManyStepInputEnvelope
    set?: testWhereUniqueInput | testWhereUniqueInput[]
    disconnect?: testWhereUniqueInput | testWhereUniqueInput[]
    delete?: testWhereUniqueInput | testWhereUniqueInput[]
    connect?: testWhereUniqueInput | testWhereUniqueInput[]
    update?: testUpdateWithWhereUniqueWithoutStepInput | testUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: testUpdateManyWithWhereWithoutStepInput | testUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: testScalarWhereInput | testScalarWhereInput[]
  }

  export type testUncheckedUpdateManyWithoutStepNestedInput = {
    create?: XOR<testCreateWithoutStepInput, testUncheckedCreateWithoutStepInput> | testCreateWithoutStepInput[] | testUncheckedCreateWithoutStepInput[]
    connectOrCreate?: testCreateOrConnectWithoutStepInput | testCreateOrConnectWithoutStepInput[]
    upsert?: testUpsertWithWhereUniqueWithoutStepInput | testUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: testCreateManyStepInputEnvelope
    set?: testWhereUniqueInput | testWhereUniqueInput[]
    disconnect?: testWhereUniqueInput | testWhereUniqueInput[]
    delete?: testWhereUniqueInput | testWhereUniqueInput[]
    connect?: testWhereUniqueInput | testWhereUniqueInput[]
    update?: testUpdateWithWhereUniqueWithoutStepInput | testUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: testUpdateManyWithWhereWithoutStepInput | testUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: testScalarWhereInput | testScalarWhereInput[]
  }

  export type stepCreateNestedOneWithoutTestsInput = {
    create?: XOR<stepCreateWithoutTestsInput, stepUncheckedCreateWithoutTestsInput>
    connectOrCreate?: stepCreateOrConnectWithoutTestsInput
    connect?: stepWhereUniqueInput
  }

  export type test_nameCreateNestedManyWithoutTestInput = {
    create?: XOR<test_nameCreateWithoutTestInput, test_nameUncheckedCreateWithoutTestInput> | test_nameCreateWithoutTestInput[] | test_nameUncheckedCreateWithoutTestInput[]
    connectOrCreate?: test_nameCreateOrConnectWithoutTestInput | test_nameCreateOrConnectWithoutTestInput[]
    createMany?: test_nameCreateManyTestInputEnvelope
    connect?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
  }

  export type test_nameUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<test_nameCreateWithoutTestInput, test_nameUncheckedCreateWithoutTestInput> | test_nameCreateWithoutTestInput[] | test_nameUncheckedCreateWithoutTestInput[]
    connectOrCreate?: test_nameCreateOrConnectWithoutTestInput | test_nameCreateOrConnectWithoutTestInput[]
    createMany?: test_nameCreateManyTestInputEnvelope
    connect?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
  }

  export type stepUpdateOneRequiredWithoutTestsNestedInput = {
    create?: XOR<stepCreateWithoutTestsInput, stepUncheckedCreateWithoutTestsInput>
    connectOrCreate?: stepCreateOrConnectWithoutTestsInput
    upsert?: stepUpsertWithoutTestsInput
    connect?: stepWhereUniqueInput
    update?: XOR<XOR<stepUpdateToOneWithWhereWithoutTestsInput, stepUpdateWithoutTestsInput>, stepUncheckedUpdateWithoutTestsInput>
  }

  export type test_nameUpdateManyWithoutTestNestedInput = {
    create?: XOR<test_nameCreateWithoutTestInput, test_nameUncheckedCreateWithoutTestInput> | test_nameCreateWithoutTestInput[] | test_nameUncheckedCreateWithoutTestInput[]
    connectOrCreate?: test_nameCreateOrConnectWithoutTestInput | test_nameCreateOrConnectWithoutTestInput[]
    upsert?: test_nameUpsertWithWhereUniqueWithoutTestInput | test_nameUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: test_nameCreateManyTestInputEnvelope
    set?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    disconnect?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    delete?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    connect?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    update?: test_nameUpdateWithWhereUniqueWithoutTestInput | test_nameUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: test_nameUpdateManyWithWhereWithoutTestInput | test_nameUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: test_nameScalarWhereInput | test_nameScalarWhereInput[]
  }

  export type test_nameUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<test_nameCreateWithoutTestInput, test_nameUncheckedCreateWithoutTestInput> | test_nameCreateWithoutTestInput[] | test_nameUncheckedCreateWithoutTestInput[]
    connectOrCreate?: test_nameCreateOrConnectWithoutTestInput | test_nameCreateOrConnectWithoutTestInput[]
    upsert?: test_nameUpsertWithWhereUniqueWithoutTestInput | test_nameUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: test_nameCreateManyTestInputEnvelope
    set?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    disconnect?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    delete?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    connect?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    update?: test_nameUpdateWithWhereUniqueWithoutTestInput | test_nameUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: test_nameUpdateManyWithWhereWithoutTestInput | test_nameUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: test_nameScalarWhereInput | test_nameScalarWhereInput[]
  }

  export type testCreateNestedOneWithoutTest_nameInput = {
    create?: XOR<testCreateWithoutTest_nameInput, testUncheckedCreateWithoutTest_nameInput>
    connectOrCreate?: testCreateOrConnectWithoutTest_nameInput
    connect?: testWhereUniqueInput
  }

  export type test_namesCreateNestedOneWithoutTest_nameInput = {
    create?: XOR<test_namesCreateWithoutTest_nameInput, test_namesUncheckedCreateWithoutTest_nameInput>
    connectOrCreate?: test_namesCreateOrConnectWithoutTest_nameInput
    connect?: test_namesWhereUniqueInput
  }

  export type testUpdateOneRequiredWithoutTest_nameNestedInput = {
    create?: XOR<testCreateWithoutTest_nameInput, testUncheckedCreateWithoutTest_nameInput>
    connectOrCreate?: testCreateOrConnectWithoutTest_nameInput
    upsert?: testUpsertWithoutTest_nameInput
    connect?: testWhereUniqueInput
    update?: XOR<XOR<testUpdateToOneWithWhereWithoutTest_nameInput, testUpdateWithoutTest_nameInput>, testUncheckedUpdateWithoutTest_nameInput>
  }

  export type test_namesUpdateOneRequiredWithoutTest_nameNestedInput = {
    create?: XOR<test_namesCreateWithoutTest_nameInput, test_namesUncheckedCreateWithoutTest_nameInput>
    connectOrCreate?: test_namesCreateOrConnectWithoutTest_nameInput
    upsert?: test_namesUpsertWithoutTest_nameInput
    connect?: test_namesWhereUniqueInput
    update?: XOR<XOR<test_namesUpdateToOneWithWhereWithoutTest_nameInput, test_namesUpdateWithoutTest_nameInput>, test_namesUncheckedUpdateWithoutTest_nameInput>
  }

  export type test_nameCreateNestedManyWithoutTest_namesInput = {
    create?: XOR<test_nameCreateWithoutTest_namesInput, test_nameUncheckedCreateWithoutTest_namesInput> | test_nameCreateWithoutTest_namesInput[] | test_nameUncheckedCreateWithoutTest_namesInput[]
    connectOrCreate?: test_nameCreateOrConnectWithoutTest_namesInput | test_nameCreateOrConnectWithoutTest_namesInput[]
    createMany?: test_nameCreateManyTest_namesInputEnvelope
    connect?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
  }

  export type test_nameUncheckedCreateNestedManyWithoutTest_namesInput = {
    create?: XOR<test_nameCreateWithoutTest_namesInput, test_nameUncheckedCreateWithoutTest_namesInput> | test_nameCreateWithoutTest_namesInput[] | test_nameUncheckedCreateWithoutTest_namesInput[]
    connectOrCreate?: test_nameCreateOrConnectWithoutTest_namesInput | test_nameCreateOrConnectWithoutTest_namesInput[]
    createMany?: test_nameCreateManyTest_namesInputEnvelope
    connect?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
  }

  export type test_nameUpdateManyWithoutTest_namesNestedInput = {
    create?: XOR<test_nameCreateWithoutTest_namesInput, test_nameUncheckedCreateWithoutTest_namesInput> | test_nameCreateWithoutTest_namesInput[] | test_nameUncheckedCreateWithoutTest_namesInput[]
    connectOrCreate?: test_nameCreateOrConnectWithoutTest_namesInput | test_nameCreateOrConnectWithoutTest_namesInput[]
    upsert?: test_nameUpsertWithWhereUniqueWithoutTest_namesInput | test_nameUpsertWithWhereUniqueWithoutTest_namesInput[]
    createMany?: test_nameCreateManyTest_namesInputEnvelope
    set?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    disconnect?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    delete?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    connect?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    update?: test_nameUpdateWithWhereUniqueWithoutTest_namesInput | test_nameUpdateWithWhereUniqueWithoutTest_namesInput[]
    updateMany?: test_nameUpdateManyWithWhereWithoutTest_namesInput | test_nameUpdateManyWithWhereWithoutTest_namesInput[]
    deleteMany?: test_nameScalarWhereInput | test_nameScalarWhereInput[]
  }

  export type test_nameUncheckedUpdateManyWithoutTest_namesNestedInput = {
    create?: XOR<test_nameCreateWithoutTest_namesInput, test_nameUncheckedCreateWithoutTest_namesInput> | test_nameCreateWithoutTest_namesInput[] | test_nameUncheckedCreateWithoutTest_namesInput[]
    connectOrCreate?: test_nameCreateOrConnectWithoutTest_namesInput | test_nameCreateOrConnectWithoutTest_namesInput[]
    upsert?: test_nameUpsertWithWhereUniqueWithoutTest_namesInput | test_nameUpsertWithWhereUniqueWithoutTest_namesInput[]
    createMany?: test_nameCreateManyTest_namesInputEnvelope
    set?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    disconnect?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    delete?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    connect?: test_nameWhereUniqueInput | test_nameWhereUniqueInput[]
    update?: test_nameUpdateWithWhereUniqueWithoutTest_namesInput | test_nameUpdateWithWhereUniqueWithoutTest_namesInput[]
    updateMany?: test_nameUpdateManyWithWhereWithoutTest_namesInput | test_nameUpdateManyWithWhereWithoutTest_namesInput[]
    deleteMany?: test_nameScalarWhereInput | test_nameScalarWhereInput[]
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

  export type testCreateWithoutStepInput = {
    type: number
    allowedMistakes: number
    numberOfQuestions: number
    questionPhrase: string
    ageToApply: string
    orderIndex: number
    endorsementCode: string
    premiumOnly: number
    fullDescription: string
    cover: string
    test_name?: test_nameCreateNestedManyWithoutTestInput
  }

  export type testUncheckedCreateWithoutStepInput = {
    id?: number
    type: number
    allowedMistakes: number
    numberOfQuestions: number
    questionPhrase: string
    ageToApply: string
    orderIndex: number
    endorsementCode: string
    premiumOnly: number
    fullDescription: string
    cover: string
    test_name?: test_nameUncheckedCreateNestedManyWithoutTestInput
  }

  export type testCreateOrConnectWithoutStepInput = {
    where: testWhereUniqueInput
    create: XOR<testCreateWithoutStepInput, testUncheckedCreateWithoutStepInput>
  }

  export type testCreateManyStepInputEnvelope = {
    data: testCreateManyStepInput | testCreateManyStepInput[]
    skipDuplicates?: boolean
  }

  export type testUpsertWithWhereUniqueWithoutStepInput = {
    where: testWhereUniqueInput
    update: XOR<testUpdateWithoutStepInput, testUncheckedUpdateWithoutStepInput>
    create: XOR<testCreateWithoutStepInput, testUncheckedCreateWithoutStepInput>
  }

  export type testUpdateWithWhereUniqueWithoutStepInput = {
    where: testWhereUniqueInput
    data: XOR<testUpdateWithoutStepInput, testUncheckedUpdateWithoutStepInput>
  }

  export type testUpdateManyWithWhereWithoutStepInput = {
    where: testScalarWhereInput
    data: XOR<testUpdateManyMutationInput, testUncheckedUpdateManyWithoutStepInput>
  }

  export type testScalarWhereInput = {
    AND?: testScalarWhereInput | testScalarWhereInput[]
    OR?: testScalarWhereInput[]
    NOT?: testScalarWhereInput | testScalarWhereInput[]
    id?: IntFilter<"test"> | number
    type?: IntFilter<"test"> | number
    allowedMistakes?: IntFilter<"test"> | number
    numberOfQuestions?: IntFilter<"test"> | number
    questionPhrase?: StringFilter<"test"> | string
    ageToApply?: StringFilter<"test"> | string
    orderIndex?: IntFilter<"test"> | number
    endorsementCode?: StringFilter<"test"> | string
    stepId?: IntFilter<"test"> | number
    premiumOnly?: IntFilter<"test"> | number
    fullDescription?: StringFilter<"test"> | string
    cover?: StringFilter<"test"> | string
  }

  export type stepCreateWithoutTestsInput = {
    subdivisionId: number
    categoryId: number
    num: number
    title: string
    shortTitle: string
    titlePart1: string
    titlePart2: string
    description: string
  }

  export type stepUncheckedCreateWithoutTestsInput = {
    id?: number
    subdivisionId: number
    categoryId: number
    num: number
    title: string
    shortTitle: string
    titlePart1: string
    titlePart2: string
    description: string
  }

  export type stepCreateOrConnectWithoutTestsInput = {
    where: stepWhereUniqueInput
    create: XOR<stepCreateWithoutTestsInput, stepUncheckedCreateWithoutTestsInput>
  }

  export type test_nameCreateWithoutTestInput = {
    test_names: test_namesCreateNestedOneWithoutTest_nameInput
  }

  export type test_nameUncheckedCreateWithoutTestInput = {
    n_id: number
  }

  export type test_nameCreateOrConnectWithoutTestInput = {
    where: test_nameWhereUniqueInput
    create: XOR<test_nameCreateWithoutTestInput, test_nameUncheckedCreateWithoutTestInput>
  }

  export type test_nameCreateManyTestInputEnvelope = {
    data: test_nameCreateManyTestInput | test_nameCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type stepUpsertWithoutTestsInput = {
    update: XOR<stepUpdateWithoutTestsInput, stepUncheckedUpdateWithoutTestsInput>
    create: XOR<stepCreateWithoutTestsInput, stepUncheckedCreateWithoutTestsInput>
    where?: stepWhereInput
  }

  export type stepUpdateToOneWithWhereWithoutTestsInput = {
    where?: stepWhereInput
    data: XOR<stepUpdateWithoutTestsInput, stepUncheckedUpdateWithoutTestsInput>
  }

  export type stepUpdateWithoutTestsInput = {
    subdivisionId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    num?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: StringFieldUpdateOperationsInput | string
    titlePart1?: StringFieldUpdateOperationsInput | string
    titlePart2?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type stepUncheckedUpdateWithoutTestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subdivisionId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    num?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: StringFieldUpdateOperationsInput | string
    titlePart1?: StringFieldUpdateOperationsInput | string
    titlePart2?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type test_nameUpsertWithWhereUniqueWithoutTestInput = {
    where: test_nameWhereUniqueInput
    update: XOR<test_nameUpdateWithoutTestInput, test_nameUncheckedUpdateWithoutTestInput>
    create: XOR<test_nameCreateWithoutTestInput, test_nameUncheckedCreateWithoutTestInput>
  }

  export type test_nameUpdateWithWhereUniqueWithoutTestInput = {
    where: test_nameWhereUniqueInput
    data: XOR<test_nameUpdateWithoutTestInput, test_nameUncheckedUpdateWithoutTestInput>
  }

  export type test_nameUpdateManyWithWhereWithoutTestInput = {
    where: test_nameScalarWhereInput
    data: XOR<test_nameUpdateManyMutationInput, test_nameUncheckedUpdateManyWithoutTestInput>
  }

  export type test_nameScalarWhereInput = {
    AND?: test_nameScalarWhereInput | test_nameScalarWhereInput[]
    OR?: test_nameScalarWhereInput[]
    NOT?: test_nameScalarWhereInput | test_nameScalarWhereInput[]
    t_id?: IntFilter<"test_name"> | number
    n_id?: IntFilter<"test_name"> | number
  }

  export type testCreateWithoutTest_nameInput = {
    type: number
    allowedMistakes: number
    numberOfQuestions: number
    questionPhrase: string
    ageToApply: string
    orderIndex: number
    endorsementCode: string
    premiumOnly: number
    fullDescription: string
    cover: string
    step: stepCreateNestedOneWithoutTestsInput
  }

  export type testUncheckedCreateWithoutTest_nameInput = {
    id?: number
    type: number
    allowedMistakes: number
    numberOfQuestions: number
    questionPhrase: string
    ageToApply: string
    orderIndex: number
    endorsementCode: string
    stepId: number
    premiumOnly: number
    fullDescription: string
    cover: string
  }

  export type testCreateOrConnectWithoutTest_nameInput = {
    where: testWhereUniqueInput
    create: XOR<testCreateWithoutTest_nameInput, testUncheckedCreateWithoutTest_nameInput>
  }

  export type test_namesCreateWithoutTest_nameInput = {
    title: string
    shortTitle: string
    description: string
  }

  export type test_namesUncheckedCreateWithoutTest_nameInput = {
    id?: number
    title: string
    shortTitle: string
    description: string
  }

  export type test_namesCreateOrConnectWithoutTest_nameInput = {
    where: test_namesWhereUniqueInput
    create: XOR<test_namesCreateWithoutTest_nameInput, test_namesUncheckedCreateWithoutTest_nameInput>
  }

  export type testUpsertWithoutTest_nameInput = {
    update: XOR<testUpdateWithoutTest_nameInput, testUncheckedUpdateWithoutTest_nameInput>
    create: XOR<testCreateWithoutTest_nameInput, testUncheckedCreateWithoutTest_nameInput>
    where?: testWhereInput
  }

  export type testUpdateToOneWithWhereWithoutTest_nameInput = {
    where?: testWhereInput
    data: XOR<testUpdateWithoutTest_nameInput, testUncheckedUpdateWithoutTest_nameInput>
  }

  export type testUpdateWithoutTest_nameInput = {
    type?: IntFieldUpdateOperationsInput | number
    allowedMistakes?: IntFieldUpdateOperationsInput | number
    numberOfQuestions?: IntFieldUpdateOperationsInput | number
    questionPhrase?: StringFieldUpdateOperationsInput | string
    ageToApply?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    endorsementCode?: StringFieldUpdateOperationsInput | string
    premiumOnly?: IntFieldUpdateOperationsInput | number
    fullDescription?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    step?: stepUpdateOneRequiredWithoutTestsNestedInput
  }

  export type testUncheckedUpdateWithoutTest_nameInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    allowedMistakes?: IntFieldUpdateOperationsInput | number
    numberOfQuestions?: IntFieldUpdateOperationsInput | number
    questionPhrase?: StringFieldUpdateOperationsInput | string
    ageToApply?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    endorsementCode?: StringFieldUpdateOperationsInput | string
    stepId?: IntFieldUpdateOperationsInput | number
    premiumOnly?: IntFieldUpdateOperationsInput | number
    fullDescription?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
  }

  export type test_namesUpsertWithoutTest_nameInput = {
    update: XOR<test_namesUpdateWithoutTest_nameInput, test_namesUncheckedUpdateWithoutTest_nameInput>
    create: XOR<test_namesCreateWithoutTest_nameInput, test_namesUncheckedCreateWithoutTest_nameInput>
    where?: test_namesWhereInput
  }

  export type test_namesUpdateToOneWithWhereWithoutTest_nameInput = {
    where?: test_namesWhereInput
    data: XOR<test_namesUpdateWithoutTest_nameInput, test_namesUncheckedUpdateWithoutTest_nameInput>
  }

  export type test_namesUpdateWithoutTest_nameInput = {
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type test_namesUncheckedUpdateWithoutTest_nameInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    shortTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type test_nameCreateWithoutTest_namesInput = {
    test: testCreateNestedOneWithoutTest_nameInput
  }

  export type test_nameUncheckedCreateWithoutTest_namesInput = {
    t_id: number
  }

  export type test_nameCreateOrConnectWithoutTest_namesInput = {
    where: test_nameWhereUniqueInput
    create: XOR<test_nameCreateWithoutTest_namesInput, test_nameUncheckedCreateWithoutTest_namesInput>
  }

  export type test_nameCreateManyTest_namesInputEnvelope = {
    data: test_nameCreateManyTest_namesInput | test_nameCreateManyTest_namesInput[]
    skipDuplicates?: boolean
  }

  export type test_nameUpsertWithWhereUniqueWithoutTest_namesInput = {
    where: test_nameWhereUniqueInput
    update: XOR<test_nameUpdateWithoutTest_namesInput, test_nameUncheckedUpdateWithoutTest_namesInput>
    create: XOR<test_nameCreateWithoutTest_namesInput, test_nameUncheckedCreateWithoutTest_namesInput>
  }

  export type test_nameUpdateWithWhereUniqueWithoutTest_namesInput = {
    where: test_nameWhereUniqueInput
    data: XOR<test_nameUpdateWithoutTest_namesInput, test_nameUncheckedUpdateWithoutTest_namesInput>
  }

  export type test_nameUpdateManyWithWhereWithoutTest_namesInput = {
    where: test_nameScalarWhereInput
    data: XOR<test_nameUpdateManyMutationInput, test_nameUncheckedUpdateManyWithoutTest_namesInput>
  }

  export type testCreateManyStepInput = {
    id?: number
    type: number
    allowedMistakes: number
    numberOfQuestions: number
    questionPhrase: string
    ageToApply: string
    orderIndex: number
    endorsementCode: string
    premiumOnly: number
    fullDescription: string
    cover: string
  }

  export type testUpdateWithoutStepInput = {
    type?: IntFieldUpdateOperationsInput | number
    allowedMistakes?: IntFieldUpdateOperationsInput | number
    numberOfQuestions?: IntFieldUpdateOperationsInput | number
    questionPhrase?: StringFieldUpdateOperationsInput | string
    ageToApply?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    endorsementCode?: StringFieldUpdateOperationsInput | string
    premiumOnly?: IntFieldUpdateOperationsInput | number
    fullDescription?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    test_name?: test_nameUpdateManyWithoutTestNestedInput
  }

  export type testUncheckedUpdateWithoutStepInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    allowedMistakes?: IntFieldUpdateOperationsInput | number
    numberOfQuestions?: IntFieldUpdateOperationsInput | number
    questionPhrase?: StringFieldUpdateOperationsInput | string
    ageToApply?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    endorsementCode?: StringFieldUpdateOperationsInput | string
    premiumOnly?: IntFieldUpdateOperationsInput | number
    fullDescription?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    test_name?: test_nameUncheckedUpdateManyWithoutTestNestedInput
  }

  export type testUncheckedUpdateManyWithoutStepInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    allowedMistakes?: IntFieldUpdateOperationsInput | number
    numberOfQuestions?: IntFieldUpdateOperationsInput | number
    questionPhrase?: StringFieldUpdateOperationsInput | string
    ageToApply?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    endorsementCode?: StringFieldUpdateOperationsInput | string
    premiumOnly?: IntFieldUpdateOperationsInput | number
    fullDescription?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
  }

  export type test_nameCreateManyTestInput = {
    n_id: number
  }

  export type test_nameUpdateWithoutTestInput = {
    test_names?: test_namesUpdateOneRequiredWithoutTest_nameNestedInput
  }

  export type test_nameUncheckedUpdateWithoutTestInput = {
    n_id?: IntFieldUpdateOperationsInput | number
  }

  export type test_nameUncheckedUpdateManyWithoutTestInput = {
    n_id?: IntFieldUpdateOperationsInput | number
  }

  export type test_nameCreateManyTest_namesInput = {
    t_id: number
  }

  export type test_nameUpdateWithoutTest_namesInput = {
    test?: testUpdateOneRequiredWithoutTest_nameNestedInput
  }

  export type test_nameUncheckedUpdateWithoutTest_namesInput = {
    t_id?: IntFieldUpdateOperationsInput | number
  }

  export type test_nameUncheckedUpdateManyWithoutTest_namesInput = {
    t_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StepCountOutputTypeDefaultArgs instead
     */
    export type StepCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StepCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestCountOutputTypeDefaultArgs instead
     */
    export type TestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Test_namesCountOutputTypeDefaultArgs instead
     */
    export type Test_namesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Test_namesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use stepDefaultArgs instead
     */
    export type stepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = stepDefaultArgs<ExtArgs>
    /**
     * @deprecated Use testDefaultArgs instead
     */
    export type testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = testDefaultArgs<ExtArgs>
    /**
     * @deprecated Use test_nameDefaultArgs instead
     */
    export type test_nameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = test_nameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use test_namesDefaultArgs instead
     */
    export type test_namesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = test_namesDefaultArgs<ExtArgs>

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