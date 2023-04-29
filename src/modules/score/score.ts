/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";

export const protobufPackage = "score";

export interface SaveScoreRequest {
  userId: string;
  score: number;
}

export interface SaveScoreResponse {
}

export interface GetScoreMapRequest {
  userId: string;
}

export interface UserScore {
  rank: number;
  score: number;
}

export interface GetScoreMapResponse {
  scoreMap: { [key: string]: UserScore };
  scoreMapSelf: { [key: string]: UserScore };
}

export interface GetScoreMapResponse_ScoreMapEntry {
  key: string;
  value: UserScore | undefined;
}

export interface GetScoreMapResponse_ScoreMapSelfEntry {
  key: string;
  value: UserScore | undefined;
}

function createBaseSaveScoreRequest(): SaveScoreRequest {
  return { userId: "", score: 0 };
}

export const SaveScoreRequest = {
  encode(message: SaveScoreRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.score !== 0) {
      writer.uint32(16).uint32(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveScoreRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScoreRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.score = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SaveScoreRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      score: isSet(object.score) ? Number(object.score) : 0,
    };
  },

  toJSON(message: SaveScoreRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.score !== undefined && (obj.score = Math.round(message.score));
    return obj;
  },

  create<I extends Exact<DeepPartial<SaveScoreRequest>, I>>(base?: I): SaveScoreRequest {
    return SaveScoreRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SaveScoreRequest>, I>>(object: I): SaveScoreRequest {
    const message = createBaseSaveScoreRequest();
    message.userId = object.userId ?? "";
    message.score = object.score ?? 0;
    return message;
  },
};

function createBaseSaveScoreResponse(): SaveScoreResponse {
  return {};
}

export const SaveScoreResponse = {
  encode(_: SaveScoreResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveScoreResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScoreResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): SaveScoreResponse {
    return {};
  },

  toJSON(_: SaveScoreResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SaveScoreResponse>, I>>(base?: I): SaveScoreResponse {
    return SaveScoreResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SaveScoreResponse>, I>>(_: I): SaveScoreResponse {
    const message = createBaseSaveScoreResponse();
    return message;
  },
};

function createBaseGetScoreMapRequest(): GetScoreMapRequest {
  return { userId: "" };
}

export const GetScoreMapRequest = {
  encode(message: GetScoreMapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetScoreMapRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetScoreMapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetScoreMapRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: GetScoreMapRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScoreMapRequest>, I>>(base?: I): GetScoreMapRequest {
    return GetScoreMapRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetScoreMapRequest>, I>>(object: I): GetScoreMapRequest {
    const message = createBaseGetScoreMapRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseUserScore(): UserScore {
  return { rank: 0, score: 0 };
}

export const UserScore = {
  encode(message: UserScore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rank !== 0) {
      writer.uint32(8).uint32(message.rank);
    }
    if (message.score !== 0) {
      writer.uint32(16).uint32(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserScore {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserScore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.rank = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.score = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserScore {
    return {
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
    };
  },

  toJSON(message: UserScore): unknown {
    const obj: any = {};
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.score !== undefined && (obj.score = Math.round(message.score));
    return obj;
  },

  create<I extends Exact<DeepPartial<UserScore>, I>>(base?: I): UserScore {
    return UserScore.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserScore>, I>>(object: I): UserScore {
    const message = createBaseUserScore();
    message.rank = object.rank ?? 0;
    message.score = object.score ?? 0;
    return message;
  },
};

function createBaseGetScoreMapResponse(): GetScoreMapResponse {
  return { scoreMap: {}, scoreMapSelf: {} };
}

export const GetScoreMapResponse = {
  encode(message: GetScoreMapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.scoreMap).forEach(([key, value]) => {
      GetScoreMapResponse_ScoreMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.scoreMapSelf).forEach(([key, value]) => {
      GetScoreMapResponse_ScoreMapSelfEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetScoreMapResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetScoreMapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          const entry1 = GetScoreMapResponse_ScoreMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.scoreMap[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          const entry2 = GetScoreMapResponse_ScoreMapSelfEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.scoreMapSelf[entry2.key] = entry2.value;
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

  fromJSON(object: any): GetScoreMapResponse {
    return {
      scoreMap: isObject(object.scoreMap)
        ? Object.entries(object.scoreMap).reduce<{ [key: string]: UserScore }>((acc, [key, value]) => {
          acc[key] = UserScore.fromJSON(value);
          return acc;
        }, {})
        : {},
      scoreMapSelf: isObject(object.scoreMapSelf)
        ? Object.entries(object.scoreMapSelf).reduce<{ [key: string]: UserScore }>((acc, [key, value]) => {
          acc[key] = UserScore.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GetScoreMapResponse): unknown {
    const obj: any = {};
    obj.scoreMap = {};
    if (message.scoreMap) {
      Object.entries(message.scoreMap).forEach(([k, v]) => {
        obj.scoreMap[k] = UserScore.toJSON(v);
      });
    }
    obj.scoreMapSelf = {};
    if (message.scoreMapSelf) {
      Object.entries(message.scoreMapSelf).forEach(([k, v]) => {
        obj.scoreMapSelf[k] = UserScore.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScoreMapResponse>, I>>(base?: I): GetScoreMapResponse {
    return GetScoreMapResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetScoreMapResponse>, I>>(object: I): GetScoreMapResponse {
    const message = createBaseGetScoreMapResponse();
    message.scoreMap = Object.entries(object.scoreMap ?? {}).reduce<{ [key: string]: UserScore }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = UserScore.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.scoreMapSelf = Object.entries(object.scoreMapSelf ?? {}).reduce<{ [key: string]: UserScore }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = UserScore.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseGetScoreMapResponse_ScoreMapEntry(): GetScoreMapResponse_ScoreMapEntry {
  return { key: "", value: undefined };
}

export const GetScoreMapResponse_ScoreMapEntry = {
  encode(message: GetScoreMapResponse_ScoreMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      UserScore.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetScoreMapResponse_ScoreMapEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetScoreMapResponse_ScoreMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = UserScore.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetScoreMapResponse_ScoreMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? UserScore.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GetScoreMapResponse_ScoreMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? UserScore.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScoreMapResponse_ScoreMapEntry>, I>>(
    base?: I,
  ): GetScoreMapResponse_ScoreMapEntry {
    return GetScoreMapResponse_ScoreMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetScoreMapResponse_ScoreMapEntry>, I>>(
    object: I,
  ): GetScoreMapResponse_ScoreMapEntry {
    const message = createBaseGetScoreMapResponse_ScoreMapEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? UserScore.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseGetScoreMapResponse_ScoreMapSelfEntry(): GetScoreMapResponse_ScoreMapSelfEntry {
  return { key: "", value: undefined };
}

export const GetScoreMapResponse_ScoreMapSelfEntry = {
  encode(message: GetScoreMapResponse_ScoreMapSelfEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      UserScore.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetScoreMapResponse_ScoreMapSelfEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetScoreMapResponse_ScoreMapSelfEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = UserScore.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetScoreMapResponse_ScoreMapSelfEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? UserScore.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GetScoreMapResponse_ScoreMapSelfEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? UserScore.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScoreMapResponse_ScoreMapSelfEntry>, I>>(
    base?: I,
  ): GetScoreMapResponse_ScoreMapSelfEntry {
    return GetScoreMapResponse_ScoreMapSelfEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetScoreMapResponse_ScoreMapSelfEntry>, I>>(
    object: I,
  ): GetScoreMapResponse_ScoreMapSelfEntry {
    const message = createBaseGetScoreMapResponse_ScoreMapSelfEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? UserScore.fromPartial(object.value)
      : undefined;
    return message;
  },
};

export interface ScoreService {
  SaveScore(request: SaveScoreRequest): Observable<SaveScoreResponse>;
  GetScoreMap(request: GetScoreMapRequest): Observable<GetScoreMapResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
