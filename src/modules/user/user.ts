/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";

export const protobufPackage = "user";

export interface LoginRequest {
  userName: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface GetUserInfoMapRequest {
  userIdList: string[];
}

export interface UserInfo {
  playerName: string;
  country: string;
}

export interface GetUserInfoMapResponse {
  userMap: { [key: number]: UserInfo };
}

export interface GetUserInfoMapResponse_UserMapEntry {
  key: number;
  value: UserInfo | undefined;
}

function createBaseLoginRequest(): LoginRequest {
  return { userName: "", password: "" };
}

export const LoginRequest = {
  encode(message: LoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userName !== "") {
      writer.uint32(10).string(message.userName);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return {
      userName: isSet(object.userName) ? String(object.userName) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    message.userName !== undefined && (obj.userName = message.userName);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginRequest>, I>>(base?: I): LoginRequest {
    return LoginRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest {
    const message = createBaseLoginRequest();
    message.userName = object.userName ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseLoginResponse(): LoginResponse {
  return { token: "" };
}

export const LoginResponse = {
  encode(message: LoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginResponse {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginResponse>, I>>(base?: I): LoginResponse {
    return LoginResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginResponse>, I>>(object: I): LoginResponse {
    const message = createBaseLoginResponse();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseGetUserInfoMapRequest(): GetUserInfoMapRequest {
  return { userIdList: [] };
}

export const GetUserInfoMapRequest = {
  encode(message: GetUserInfoMapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userIdList) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserInfoMapRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserInfoMapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.userIdList.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserInfoMapRequest {
    return { userIdList: Array.isArray(object?.userIdList) ? object.userIdList.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetUserInfoMapRequest): unknown {
    const obj: any = {};
    if (message.userIdList) {
      obj.userIdList = message.userIdList.map((e) => e);
    } else {
      obj.userIdList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserInfoMapRequest>, I>>(base?: I): GetUserInfoMapRequest {
    return GetUserInfoMapRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserInfoMapRequest>, I>>(object: I): GetUserInfoMapRequest {
    const message = createBaseGetUserInfoMapRequest();
    message.userIdList = object.userIdList?.map((e) => e) || [];
    return message;
  },
};

function createBaseUserInfo(): UserInfo {
  return { playerName: "", country: "" };
}

export const UserInfo = {
  encode(message: UserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerName !== "") {
      writer.uint32(10).string(message.playerName);
    }
    if (message.country !== "") {
      writer.uint32(18).string(message.country);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.country = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserInfo {
    return {
      playerName: isSet(object.playerName) ? String(object.playerName) : "",
      country: isSet(object.country) ? String(object.country) : "",
    };
  },

  toJSON(message: UserInfo): unknown {
    const obj: any = {};
    message.playerName !== undefined && (obj.playerName = message.playerName);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  create<I extends Exact<DeepPartial<UserInfo>, I>>(base?: I): UserInfo {
    return UserInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserInfo>, I>>(object: I): UserInfo {
    const message = createBaseUserInfo();
    message.playerName = object.playerName ?? "";
    message.country = object.country ?? "";
    return message;
  },
};

function createBaseGetUserInfoMapResponse(): GetUserInfoMapResponse {
  return { userMap: {} };
}

export const GetUserInfoMapResponse = {
  encode(message: GetUserInfoMapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.userMap).forEach(([key, value]) => {
      GetUserInfoMapResponse_UserMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserInfoMapResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserInfoMapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          const entry1 = GetUserInfoMapResponse_UserMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.userMap[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserInfoMapResponse {
    return {
      userMap: isObject(object.userMap)
        ? Object.entries(object.userMap).reduce<{ [key: number]: UserInfo }>((acc, [key, value]) => {
          acc[Number(key)] = UserInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GetUserInfoMapResponse): unknown {
    const obj: any = {};
    obj.userMap = {};
    if (message.userMap) {
      Object.entries(message.userMap).forEach(([k, v]) => {
        obj.userMap[k] = UserInfo.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserInfoMapResponse>, I>>(base?: I): GetUserInfoMapResponse {
    return GetUserInfoMapResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserInfoMapResponse>, I>>(object: I): GetUserInfoMapResponse {
    const message = createBaseGetUserInfoMapResponse();
    message.userMap = Object.entries(object.userMap ?? {}).reduce<{ [key: number]: UserInfo }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = UserInfo.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGetUserInfoMapResponse_UserMapEntry(): GetUserInfoMapResponse_UserMapEntry {
  return { key: 0, value: undefined };
}

export const GetUserInfoMapResponse_UserMapEntry = {
  encode(message: GetUserInfoMapResponse_UserMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      UserInfo.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserInfoMapResponse_UserMapEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserInfoMapResponse_UserMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.key = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = UserInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserInfoMapResponse_UserMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? UserInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GetUserInfoMapResponse_UserMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value ? UserInfo.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserInfoMapResponse_UserMapEntry>, I>>(
    base?: I,
  ): GetUserInfoMapResponse_UserMapEntry {
    return GetUserInfoMapResponse_UserMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserInfoMapResponse_UserMapEntry>, I>>(
    object: I,
  ): GetUserInfoMapResponse_UserMapEntry {
    const message = createBaseGetUserInfoMapResponse_UserMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? UserInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

export interface UserService {
  Login(request: LoginRequest): Observable<LoginResponse>;
  GetUserInfoMap(request: GetUserInfoMapRequest): Observable<GetUserInfoMapResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
