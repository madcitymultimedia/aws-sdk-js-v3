// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CancelJournalKinesisStreamCommandInput,
  CancelJournalKinesisStreamCommandOutput,
} from "../commands/CancelJournalKinesisStreamCommand";
import { CreateLedgerCommandInput, CreateLedgerCommandOutput } from "../commands/CreateLedgerCommand";
import { DeleteLedgerCommandInput, DeleteLedgerCommandOutput } from "../commands/DeleteLedgerCommand";
import {
  DescribeJournalKinesisStreamCommandInput,
  DescribeJournalKinesisStreamCommandOutput,
} from "../commands/DescribeJournalKinesisStreamCommand";
import {
  DescribeJournalS3ExportCommandInput,
  DescribeJournalS3ExportCommandOutput,
} from "../commands/DescribeJournalS3ExportCommand";
import { DescribeLedgerCommandInput, DescribeLedgerCommandOutput } from "../commands/DescribeLedgerCommand";
import { ExportJournalToS3CommandInput, ExportJournalToS3CommandOutput } from "../commands/ExportJournalToS3Command";
import { GetBlockCommandInput, GetBlockCommandOutput } from "../commands/GetBlockCommand";
import { GetDigestCommandInput, GetDigestCommandOutput } from "../commands/GetDigestCommand";
import { GetRevisionCommandInput, GetRevisionCommandOutput } from "../commands/GetRevisionCommand";
import {
  ListJournalKinesisStreamsForLedgerCommandInput,
  ListJournalKinesisStreamsForLedgerCommandOutput,
} from "../commands/ListJournalKinesisStreamsForLedgerCommand";
import {
  ListJournalS3ExportsCommandInput,
  ListJournalS3ExportsCommandOutput,
} from "../commands/ListJournalS3ExportsCommand";
import {
  ListJournalS3ExportsForLedgerCommandInput,
  ListJournalS3ExportsForLedgerCommandOutput,
} from "../commands/ListJournalS3ExportsForLedgerCommand";
import { ListLedgersCommandInput, ListLedgersCommandOutput } from "../commands/ListLedgersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StreamJournalToKinesisCommandInput,
  StreamJournalToKinesisCommandOutput,
} from "../commands/StreamJournalToKinesisCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateLedgerCommandInput, UpdateLedgerCommandOutput } from "../commands/UpdateLedgerCommand";
import {
  UpdateLedgerPermissionsModeCommandInput,
  UpdateLedgerPermissionsModeCommandOutput,
} from "../commands/UpdateLedgerPermissionsModeCommand";
import {
  InvalidParameterException,
  JournalKinesisStreamDescription,
  JournalS3ExportDescription,
  KinesisConfiguration,
  LedgerEncryptionDescription,
  LedgerSummary,
  LimitExceededException,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourcePreconditionNotMetException,
  S3EncryptionConfiguration,
  S3ExportConfiguration,
  ValueHolder,
} from "../models/models_0";
import { QLDBServiceException as __BaseException } from "../models/QLDBServiceException";

/**
 * serializeAws_restJson1CancelJournalKinesisStreamCommand
 */
export const se_CancelJournalKinesisStreamCommand = async (
  input: CancelJournalKinesisStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/ledgers/{LedgerName}/journal-kinesis-streams/{StreamId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "LedgerName", () => input.LedgerName!, "{LedgerName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StreamId", () => input.StreamId!, "{StreamId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateLedgerCommand
 */
export const se_CreateLedgerCommand = async (
  input: CreateLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers";
  let body: any;
  body = JSON.stringify({
    ...(input.DeletionProtection != null && { DeletionProtection: input.DeletionProtection }),
    ...(input.KmsKey != null && { KmsKey: input.KmsKey }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PermissionsMode != null && { PermissionsMode: input.PermissionsMode }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteLedgerCommand
 */
export const se_DeleteLedgerCommand = async (
  input: DeleteLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeJournalKinesisStreamCommand
 */
export const se_DescribeJournalKinesisStreamCommand = async (
  input: DescribeJournalKinesisStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/ledgers/{LedgerName}/journal-kinesis-streams/{StreamId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "LedgerName", () => input.LedgerName!, "{LedgerName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StreamId", () => input.StreamId!, "{StreamId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeJournalS3ExportCommand
 */
export const se_DescribeJournalS3ExportCommand = async (
  input: DescribeJournalS3ExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/ledgers/{Name}/journal-s3-exports/{ExportId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ExportId", () => input.ExportId!, "{ExportId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeLedgerCommand
 */
export const se_DescribeLedgerCommand = async (
  input: DescribeLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ExportJournalToS3Command
 */
export const se_ExportJournalToS3Command = async (
  input: ExportJournalToS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}/journal-s3-exports";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ExclusiveEndTime != null && { ExclusiveEndTime: Math.round(input.ExclusiveEndTime.getTime() / 1000) }),
    ...(input.InclusiveStartTime != null && {
      InclusiveStartTime: Math.round(input.InclusiveStartTime.getTime() / 1000),
    }),
    ...(input.OutputFormat != null && { OutputFormat: input.OutputFormat }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.S3ExportConfiguration != null && {
      S3ExportConfiguration: se_S3ExportConfiguration(input.S3ExportConfiguration, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetBlockCommand
 */
export const se_GetBlockCommand = async (
  input: GetBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}/block";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.BlockAddress != null && { BlockAddress: se_ValueHolder(input.BlockAddress, context) }),
    ...(input.DigestTipAddress != null && { DigestTipAddress: se_ValueHolder(input.DigestTipAddress, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDigestCommand
 */
export const se_GetDigestCommand = async (
  input: GetDigestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}/digest";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetRevisionCommand
 */
export const se_GetRevisionCommand = async (
  input: GetRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}/revision";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.BlockAddress != null && { BlockAddress: se_ValueHolder(input.BlockAddress, context) }),
    ...(input.DigestTipAddress != null && { DigestTipAddress: se_ValueHolder(input.DigestTipAddress, context) }),
    ...(input.DocumentId != null && { DocumentId: input.DocumentId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand
 */
export const se_ListJournalKinesisStreamsForLedgerCommand = async (
  input: ListJournalKinesisStreamsForLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/ledgers/{LedgerName}/journal-kinesis-streams";
  resolvedPath = __resolvedPath(resolvedPath, input, "LedgerName", () => input.LedgerName!, "{LedgerName}", false);
  const query: any = map({
    max_results: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    next_token: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListJournalS3ExportsCommand
 */
export const se_ListJournalS3ExportsCommand = async (
  input: ListJournalS3ExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/journal-s3-exports";
  const query: any = map({
    max_results: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    next_token: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListJournalS3ExportsForLedgerCommand
 */
export const se_ListJournalS3ExportsForLedgerCommand = async (
  input: ListJournalS3ExportsForLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}/journal-s3-exports";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  const query: any = map({
    max_results: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    next_token: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListLedgersCommand
 */
export const se_ListLedgersCommand = async (
  input: ListLedgersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers";
  const query: any = map({
    max_results: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    next_token: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StreamJournalToKinesisCommand
 */
export const se_StreamJournalToKinesisCommand = async (
  input: StreamJournalToKinesisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/ledgers/{LedgerName}/journal-kinesis-streams";
  resolvedPath = __resolvedPath(resolvedPath, input, "LedgerName", () => input.LedgerName!, "{LedgerName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ExclusiveEndTime != null && { ExclusiveEndTime: Math.round(input.ExclusiveEndTime.getTime() / 1000) }),
    ...(input.InclusiveStartTime != null && {
      InclusiveStartTime: Math.round(input.InclusiveStartTime.getTime() / 1000),
    }),
    ...(input.KinesisConfiguration != null && {
      KinesisConfiguration: se_KinesisConfiguration(input.KinesisConfiguration, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateLedgerCommand
 */
export const se_UpdateLedgerCommand = async (
  input: UpdateLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DeletionProtection != null && { DeletionProtection: input.DeletionProtection }),
    ...(input.KmsKey != null && { KmsKey: input.KmsKey }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateLedgerPermissionsModeCommand
 */
export const se_UpdateLedgerPermissionsModeCommand = async (
  input: UpdateLedgerPermissionsModeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ledgers/{Name}/permissions-mode";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.PermissionsMode != null && { PermissionsMode: input.PermissionsMode }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CancelJournalKinesisStreamCommand
 */
export const de_CancelJournalKinesisStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJournalKinesisStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelJournalKinesisStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StreamId != null) {
    contents.StreamId = __expectString(data.StreamId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CancelJournalKinesisStreamCommandError
 */
const de_CancelJournalKinesisStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJournalKinesisStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      throw await de_ResourcePreconditionNotMetExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateLedgerCommand
 */
export const de_CreateLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLedgerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationDateTime != null) {
    contents.CreationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDateTime)));
  }
  if (data.DeletionProtection != null) {
    contents.DeletionProtection = __expectBoolean(data.DeletionProtection);
  }
  if (data.KmsKeyArn != null) {
    contents.KmsKeyArn = __expectString(data.KmsKeyArn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PermissionsMode != null) {
    contents.PermissionsMode = __expectString(data.PermissionsMode);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateLedgerCommandError
 */
const de_CreateLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.qldb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.qldb#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.qldb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteLedgerCommand
 */
export const de_DeleteLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLedgerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLedgerCommandError
 */
const de_DeleteLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.qldb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      throw await de_ResourcePreconditionNotMetExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeJournalKinesisStreamCommand
 */
export const de_DescribeJournalKinesisStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJournalKinesisStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeJournalKinesisStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Stream != null) {
    contents.Stream = de_JournalKinesisStreamDescription(data.Stream, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJournalKinesisStreamCommandError
 */
const de_DescribeJournalKinesisStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJournalKinesisStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      throw await de_ResourcePreconditionNotMetExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeJournalS3ExportCommand
 */
export const de_DescribeJournalS3ExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJournalS3ExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeJournalS3ExportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ExportDescription != null) {
    contents.ExportDescription = de_JournalS3ExportDescription(data.ExportDescription, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJournalS3ExportCommandError
 */
const de_DescribeJournalS3ExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJournalS3ExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeLedgerCommand
 */
export const de_DescribeLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeLedgerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationDateTime != null) {
    contents.CreationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDateTime)));
  }
  if (data.DeletionProtection != null) {
    contents.DeletionProtection = __expectBoolean(data.DeletionProtection);
  }
  if (data.EncryptionDescription != null) {
    contents.EncryptionDescription = de_LedgerEncryptionDescription(data.EncryptionDescription, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PermissionsMode != null) {
    contents.PermissionsMode = __expectString(data.PermissionsMode);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeLedgerCommandError
 */
const de_DescribeLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ExportJournalToS3Command
 */
export const de_ExportJournalToS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportJournalToS3CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExportJournalToS3CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ExportId != null) {
    contents.ExportId = __expectString(data.ExportId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ExportJournalToS3CommandError
 */
const de_ExportJournalToS3CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportJournalToS3CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      throw await de_ResourcePreconditionNotMetExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetBlockCommand
 */
export const de_GetBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBlockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Block != null) {
    contents.Block = de_ValueHolder(data.Block, context);
  }
  if (data.Proof != null) {
    contents.Proof = de_ValueHolder(data.Proof, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBlockCommandError
 */
const de_GetBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      throw await de_ResourcePreconditionNotMetExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDigestCommand
 */
export const de_GetDigestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDigestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDigestCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Digest != null) {
    contents.Digest = context.base64Decoder(data.Digest);
  }
  if (data.DigestTipAddress != null) {
    contents.DigestTipAddress = de_ValueHolder(data.DigestTipAddress, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDigestCommandError
 */
const de_GetDigestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDigestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      throw await de_ResourcePreconditionNotMetExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetRevisionCommand
 */
export const de_GetRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRevisionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Proof != null) {
    contents.Proof = de_ValueHolder(data.Proof, context);
  }
  if (data.Revision != null) {
    contents.Revision = de_ValueHolder(data.Revision, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetRevisionCommandError
 */
const de_GetRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      throw await de_ResourcePreconditionNotMetExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand
 */
export const de_ListJournalKinesisStreamsForLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalKinesisStreamsForLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJournalKinesisStreamsForLedgerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Streams != null) {
    contents.Streams = de_JournalKinesisStreamDescriptionList(data.Streams, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommandError
 */
const de_ListJournalKinesisStreamsForLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalKinesisStreamsForLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      throw await de_ResourcePreconditionNotMetExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListJournalS3ExportsCommand
 */
export const de_ListJournalS3ExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJournalS3ExportsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JournalS3Exports != null) {
    contents.JournalS3Exports = de_JournalS3ExportList(data.JournalS3Exports, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListJournalS3ExportsCommandError
 */
const de_ListJournalS3ExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand
 */
export const de_ListJournalS3ExportsForLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsForLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJournalS3ExportsForLedgerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JournalS3Exports != null) {
    contents.JournalS3Exports = de_JournalS3ExportList(data.JournalS3Exports, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListJournalS3ExportsForLedgerCommandError
 */
const de_ListJournalS3ExportsForLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsForLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListLedgersCommand
 */
export const de_ListLedgersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLedgersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLedgersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Ledgers != null) {
    contents.Ledgers = de_LedgerList(data.Ledgers, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLedgersCommandError
 */
const de_ListLedgersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLedgersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StreamJournalToKinesisCommand
 */
export const de_StreamJournalToKinesisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamJournalToKinesisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StreamJournalToKinesisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StreamId != null) {
    contents.StreamId = __expectString(data.StreamId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StreamJournalToKinesisCommandError
 */
const de_StreamJournalToKinesisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamJournalToKinesisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      throw await de_ResourcePreconditionNotMetExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateLedgerCommand
 */
export const de_UpdateLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLedgerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationDateTime != null) {
    contents.CreationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDateTime)));
  }
  if (data.DeletionProtection != null) {
    contents.DeletionProtection = __expectBoolean(data.DeletionProtection);
  }
  if (data.EncryptionDescription != null) {
    contents.EncryptionDescription = de_LedgerEncryptionDescription(data.EncryptionDescription, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLedgerCommandError
 */
const de_UpdateLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateLedgerPermissionsModeCommand
 */
export const de_UpdateLedgerPermissionsModeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLedgerPermissionsModeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLedgerPermissionsModeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PermissionsMode != null) {
    contents.PermissionsMode = __expectString(data.PermissionsMode);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLedgerPermissionsModeCommandError
 */
const de_UpdateLedgerPermissionsModeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLedgerPermissionsModeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ParameterName != null) {
    contents.ParameterName = __expectString(data.ParameterName);
  }
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName != null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName != null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName != null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourcePreconditionNotMetExceptionRes
 */
const de_ResourcePreconditionNotMetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePreconditionNotMetException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName != null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourcePreconditionNotMetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1KinesisConfiguration
 */
const se_KinesisConfiguration = (input: KinesisConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AggregationEnabled != null && { AggregationEnabled: input.AggregationEnabled }),
    ...(input.StreamArn != null && { StreamArn: input.StreamArn }),
  };
};

/**
 * serializeAws_restJson1S3EncryptionConfiguration
 */
const se_S3EncryptionConfiguration = (input: S3EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.ObjectEncryptionType != null && { ObjectEncryptionType: input.ObjectEncryptionType }),
  };
};

/**
 * serializeAws_restJson1S3ExportConfiguration
 */
const se_S3ExportConfiguration = (input: S3ExportConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_S3EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
  };
};

/**
 * serializeAws_restJson1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ValueHolder
 */
const se_ValueHolder = (input: ValueHolder, context: __SerdeContext): any => {
  return {
    ...(input.IonText != null && { IonText: input.IonText }),
  };
};

/**
 * deserializeAws_restJson1JournalKinesisStreamDescription
 */
const de_JournalKinesisStreamDescription = (output: any, context: __SerdeContext): JournalKinesisStreamDescription => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ErrorCause: __expectString(output.ErrorCause),
    ExclusiveEndTime:
      output.ExclusiveEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExclusiveEndTime)))
        : undefined,
    InclusiveStartTime:
      output.InclusiveStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InclusiveStartTime)))
        : undefined,
    KinesisConfiguration:
      output.KinesisConfiguration != null ? de_KinesisConfiguration(output.KinesisConfiguration, context) : undefined,
    LedgerName: __expectString(output.LedgerName),
    RoleArn: __expectString(output.RoleArn),
    Status: __expectString(output.Status),
    StreamId: __expectString(output.StreamId),
    StreamName: __expectString(output.StreamName),
  } as any;
};

/**
 * deserializeAws_restJson1JournalKinesisStreamDescriptionList
 */
const de_JournalKinesisStreamDescriptionList = (
  output: any,
  context: __SerdeContext
): JournalKinesisStreamDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JournalKinesisStreamDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JournalS3ExportDescription
 */
const de_JournalS3ExportDescription = (output: any, context: __SerdeContext): JournalS3ExportDescription => {
  return {
    ExclusiveEndTime:
      output.ExclusiveEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExclusiveEndTime)))
        : undefined,
    ExportCreationTime:
      output.ExportCreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExportCreationTime)))
        : undefined,
    ExportId: __expectString(output.ExportId),
    InclusiveStartTime:
      output.InclusiveStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InclusiveStartTime)))
        : undefined,
    LedgerName: __expectString(output.LedgerName),
    OutputFormat: __expectString(output.OutputFormat),
    RoleArn: __expectString(output.RoleArn),
    S3ExportConfiguration:
      output.S3ExportConfiguration != null
        ? de_S3ExportConfiguration(output.S3ExportConfiguration, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1JournalS3ExportList
 */
const de_JournalS3ExportList = (output: any, context: __SerdeContext): JournalS3ExportDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JournalS3ExportDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KinesisConfiguration
 */
const de_KinesisConfiguration = (output: any, context: __SerdeContext): KinesisConfiguration => {
  return {
    AggregationEnabled: __expectBoolean(output.AggregationEnabled),
    StreamArn: __expectString(output.StreamArn),
  } as any;
};

/**
 * deserializeAws_restJson1LedgerEncryptionDescription
 */
const de_LedgerEncryptionDescription = (output: any, context: __SerdeContext): LedgerEncryptionDescription => {
  return {
    EncryptionStatus: __expectString(output.EncryptionStatus),
    InaccessibleKmsKeyDateTime:
      output.InaccessibleKmsKeyDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InaccessibleKmsKeyDateTime)))
        : undefined,
    KmsKeyArn: __expectString(output.KmsKeyArn),
  } as any;
};

/**
 * deserializeAws_restJson1LedgerList
 */
const de_LedgerList = (output: any, context: __SerdeContext): LedgerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LedgerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LedgerSummary
 */
const de_LedgerSummary = (output: any, context: __SerdeContext): LedgerSummary => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1S3EncryptionConfiguration
 */
const de_S3EncryptionConfiguration = (output: any, context: __SerdeContext): S3EncryptionConfiguration => {
  return {
    KmsKeyArn: __expectString(output.KmsKeyArn),
    ObjectEncryptionType: __expectString(output.ObjectEncryptionType),
  } as any;
};

/**
 * deserializeAws_restJson1S3ExportConfiguration
 */
const de_S3ExportConfiguration = (output: any, context: __SerdeContext): S3ExportConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? de_S3EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    Prefix: __expectString(output.Prefix),
  } as any;
};

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ValueHolder
 */
const de_ValueHolder = (output: any, context: __SerdeContext): ValueHolder => {
  return {
    IonText: __expectString(output.IonText),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
