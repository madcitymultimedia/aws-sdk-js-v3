// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
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
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateScheduleCommandInput, CreateScheduleCommandOutput } from "../commands/CreateScheduleCommand";
import {
  CreateScheduleGroupCommandInput,
  CreateScheduleGroupCommandOutput,
} from "../commands/CreateScheduleGroupCommand";
import { DeleteScheduleCommandInput, DeleteScheduleCommandOutput } from "../commands/DeleteScheduleCommand";
import {
  DeleteScheduleGroupCommandInput,
  DeleteScheduleGroupCommandOutput,
} from "../commands/DeleteScheduleGroupCommand";
import { GetScheduleCommandInput, GetScheduleCommandOutput } from "../commands/GetScheduleCommand";
import { GetScheduleGroupCommandInput, GetScheduleGroupCommandOutput } from "../commands/GetScheduleGroupCommand";
import { ListScheduleGroupsCommandInput, ListScheduleGroupsCommandOutput } from "../commands/ListScheduleGroupsCommand";
import { ListSchedulesCommandInput, ListSchedulesCommandOutput } from "../commands/ListSchedulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateScheduleCommandInput, UpdateScheduleCommandOutput } from "../commands/UpdateScheduleCommand";
import {
  AwsVpcConfiguration,
  CapacityProviderStrategyItem,
  ConflictException,
  DeadLetterConfig,
  EcsParameters,
  EventBridgeParameters,
  FlexibleTimeWindow,
  InternalServerException,
  KinesisParameters,
  NetworkConfiguration,
  PlacementConstraint,
  PlacementStrategy,
  ResourceNotFoundException,
  RetryPolicy,
  SageMakerPipelineParameter,
  SageMakerPipelineParameters,
  ScheduleGroupSummary,
  ScheduleSummary,
  ServiceQuotaExceededException,
  SqsParameters,
  Tag,
  Target,
  TargetSummary,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { SchedulerServiceException as __BaseException } from "../models/SchedulerServiceException";

/**
 * serializeAws_restJson1CreateScheduleCommand
 */
export const se_CreateScheduleCommand = async (
  input: CreateScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedules/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EndDate != null && { EndDate: Math.round(input.EndDate.getTime() / 1000) }),
    ...(input.FlexibleTimeWindow != null && {
      FlexibleTimeWindow: se_FlexibleTimeWindow(input.FlexibleTimeWindow, context),
    }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.ScheduleExpressionTimezone != null && { ScheduleExpressionTimezone: input.ScheduleExpressionTimezone }),
    ...(input.StartDate != null && { StartDate: Math.round(input.StartDate.getTime() / 1000) }),
    ...(input.State != null && { State: input.State }),
    ...(input.Target != null && { Target: se_Target(input.Target, context) }),
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
 * serializeAws_restJson1CreateScheduleGroupCommand
 */
export const se_CreateScheduleGroupCommand = async (
  input: CreateScheduleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedule-groups/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1DeleteScheduleCommand
 */
export const se_DeleteScheduleCommand = async (
  input: DeleteScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedules/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  const query: any = map({
    groupName: [, input.GroupName!],
    clientToken: [, input.ClientToken ?? generateIdempotencyToken()],
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
 * serializeAws_restJson1DeleteScheduleGroupCommand
 */
export const se_DeleteScheduleGroupCommand = async (
  input: DeleteScheduleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedule-groups/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  const query: any = map({
    clientToken: [, input.ClientToken ?? generateIdempotencyToken()],
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
 * serializeAws_restJson1GetScheduleCommand
 */
export const se_GetScheduleCommand = async (
  input: GetScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedules/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  const query: any = map({
    groupName: [, input.GroupName!],
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
 * serializeAws_restJson1GetScheduleGroupCommand
 */
export const se_GetScheduleGroupCommand = async (
  input: GetScheduleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedule-groups/{Name}";
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
 * serializeAws_restJson1ListScheduleGroupsCommand
 */
export const se_ListScheduleGroupsCommand = async (
  input: ListScheduleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedule-groups";
  const query: any = map({
    NamePrefix: [, input.NamePrefix!],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListSchedulesCommand
 */
export const se_ListSchedulesCommand = async (
  input: ListSchedulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedules";
  const query: any = map({
    ScheduleGroup: [, input.GroupName!],
    NamePrefix: [, input.NamePrefix!],
    State: [, input.State!],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
    TagKeys: [
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
 * serializeAws_restJson1UpdateScheduleCommand
 */
export const se_UpdateScheduleCommand = async (
  input: UpdateScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedules/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EndDate != null && { EndDate: Math.round(input.EndDate.getTime() / 1000) }),
    ...(input.FlexibleTimeWindow != null && {
      FlexibleTimeWindow: se_FlexibleTimeWindow(input.FlexibleTimeWindow, context),
    }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.ScheduleExpressionTimezone != null && { ScheduleExpressionTimezone: input.ScheduleExpressionTimezone }),
    ...(input.StartDate != null && { StartDate: Math.round(input.StartDate.getTime() / 1000) }),
    ...(input.State != null && { State: input.State }),
    ...(input.Target != null && { Target: se_Target(input.Target, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateScheduleCommand
 */
export const de_CreateScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ScheduleArn != null) {
    contents.ScheduleArn = __expectString(data.ScheduleArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateScheduleCommandError
 */
const de_CreateScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.scheduler#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.scheduler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.scheduler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.scheduler#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.scheduler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.scheduler#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateScheduleGroupCommand
 */
export const de_CreateScheduleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduleGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateScheduleGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ScheduleGroupArn != null) {
    contents.ScheduleGroupArn = __expectString(data.ScheduleGroupArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateScheduleGroupCommandError
 */
const de_CreateScheduleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.scheduler#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.scheduler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.scheduler#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.scheduler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.scheduler#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteScheduleCommand
 */
export const de_DeleteScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteScheduleCommandError
 */
const de_DeleteScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.scheduler#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.scheduler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.scheduler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.scheduler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.scheduler#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteScheduleGroupCommand
 */
export const de_DeleteScheduleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteScheduleGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteScheduleGroupCommandError
 */
const de_DeleteScheduleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.scheduler#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.scheduler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.scheduler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.scheduler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.scheduler#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetScheduleCommand
 */
export const de_GetScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EndDate != null) {
    contents.EndDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.EndDate)));
  }
  if (data.FlexibleTimeWindow != null) {
    contents.FlexibleTimeWindow = de_FlexibleTimeWindow(data.FlexibleTimeWindow, context);
  }
  if (data.GroupName != null) {
    contents.GroupName = __expectString(data.GroupName);
  }
  if (data.KmsKeyArn != null) {
    contents.KmsKeyArn = __expectString(data.KmsKeyArn);
  }
  if (data.LastModificationDate != null) {
    contents.LastModificationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModificationDate)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ScheduleExpression != null) {
    contents.ScheduleExpression = __expectString(data.ScheduleExpression);
  }
  if (data.ScheduleExpressionTimezone != null) {
    contents.ScheduleExpressionTimezone = __expectString(data.ScheduleExpressionTimezone);
  }
  if (data.StartDate != null) {
    contents.StartDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.StartDate)));
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.Target != null) {
    contents.Target = de_Target(data.Target, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetScheduleCommandError
 */
const de_GetScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.scheduler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.scheduler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.scheduler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.scheduler#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetScheduleGroupCommand
 */
export const de_GetScheduleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScheduleGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetScheduleGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.LastModificationDate != null) {
    contents.LastModificationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModificationDate)));
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
 * deserializeAws_restJson1GetScheduleGroupCommandError
 */
const de_GetScheduleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScheduleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.scheduler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.scheduler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.scheduler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.scheduler#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListScheduleGroupsCommand
 */
export const de_ListScheduleGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScheduleGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListScheduleGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ScheduleGroups != null) {
    contents.ScheduleGroups = de_ScheduleGroupList(data.ScheduleGroups, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListScheduleGroupsCommandError
 */
const de_ListScheduleGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScheduleGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.scheduler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.scheduler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.scheduler#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSchedulesCommand
 */
export const de_ListSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchedulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSchedulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Schedules != null) {
    contents.Schedules = de_ScheduleList(data.Schedules, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSchedulesCommandError
 */
const de_ListSchedulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchedulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.scheduler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.scheduler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.scheduler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.scheduler#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    contents.Tags = de_TagList(data.Tags, context);
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
    case "InternalServerException":
    case "com.amazonaws.scheduler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.scheduler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.scheduler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.scheduler#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "ConflictException":
    case "com.amazonaws.scheduler#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.scheduler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.scheduler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.scheduler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.scheduler#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "ConflictException":
    case "com.amazonaws.scheduler#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.scheduler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.scheduler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.scheduler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.scheduler#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateScheduleCommand
 */
export const de_UpdateScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ScheduleArn != null) {
    contents.ScheduleArn = __expectString(data.ScheduleArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateScheduleCommandError
 */
const de_UpdateScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.scheduler#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.scheduler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.scheduler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.scheduler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.scheduler#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
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
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AwsVpcConfiguration
 */
const se_AwsVpcConfiguration = (input: AwsVpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AssignPublicIp != null && { AssignPublicIp: input.AssignPublicIp }),
    ...(input.SecurityGroups != null && { SecurityGroups: se_SecurityGroups(input.SecurityGroups, context) }),
    ...(input.Subnets != null && { Subnets: se_Subnets(input.Subnets, context) }),
  };
};

/**
 * serializeAws_restJson1CapacityProviderStrategy
 */
const se_CapacityProviderStrategy = (input: CapacityProviderStrategyItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CapacityProviderStrategyItem(entry, context);
    });
};

/**
 * serializeAws_restJson1CapacityProviderStrategyItem
 */
const se_CapacityProviderStrategyItem = (input: CapacityProviderStrategyItem, context: __SerdeContext): any => {
  return {
    ...(input.base != null && { base: input.base }),
    ...(input.capacityProvider != null && { capacityProvider: input.capacityProvider }),
    ...(input.weight != null && { weight: input.weight }),
  };
};

/**
 * serializeAws_restJson1DeadLetterConfig
 */
const se_DeadLetterConfig = (input: DeadLetterConfig, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

/**
 * serializeAws_restJson1EcsParameters
 */
const se_EcsParameters = (input: EcsParameters, context: __SerdeContext): any => {
  return {
    ...(input.CapacityProviderStrategy != null && {
      CapacityProviderStrategy: se_CapacityProviderStrategy(input.CapacityProviderStrategy, context),
    }),
    ...(input.EnableECSManagedTags != null && { EnableECSManagedTags: input.EnableECSManagedTags }),
    ...(input.EnableExecuteCommand != null && { EnableExecuteCommand: input.EnableExecuteCommand }),
    ...(input.Group != null && { Group: input.Group }),
    ...(input.LaunchType != null && { LaunchType: input.LaunchType }),
    ...(input.NetworkConfiguration != null && {
      NetworkConfiguration: se_NetworkConfiguration(input.NetworkConfiguration, context),
    }),
    ...(input.PlacementConstraints != null && {
      PlacementConstraints: se_PlacementConstraints(input.PlacementConstraints, context),
    }),
    ...(input.PlacementStrategy != null && {
      PlacementStrategy: se_PlacementStrategies(input.PlacementStrategy, context),
    }),
    ...(input.PlatformVersion != null && { PlatformVersion: input.PlatformVersion }),
    ...(input.PropagateTags != null && { PropagateTags: input.PropagateTags }),
    ...(input.ReferenceId != null && { ReferenceId: input.ReferenceId }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.TaskCount != null && { TaskCount: input.TaskCount }),
    ...(input.TaskDefinitionArn != null && { TaskDefinitionArn: input.TaskDefinitionArn }),
  };
};

/**
 * serializeAws_restJson1EventBridgeParameters
 */
const se_EventBridgeParameters = (input: EventBridgeParameters, context: __SerdeContext): any => {
  return {
    ...(input.DetailType != null && { DetailType: input.DetailType }),
    ...(input.Source != null && { Source: input.Source }),
  };
};

/**
 * serializeAws_restJson1FlexibleTimeWindow
 */
const se_FlexibleTimeWindow = (input: FlexibleTimeWindow, context: __SerdeContext): any => {
  return {
    ...(input.MaximumWindowInMinutes != null && { MaximumWindowInMinutes: input.MaximumWindowInMinutes }),
    ...(input.Mode != null && { Mode: input.Mode }),
  };
};

/**
 * serializeAws_restJson1KinesisParameters
 */
const se_KinesisParameters = (input: KinesisParameters, context: __SerdeContext): any => {
  return {
    ...(input.PartitionKey != null && { PartitionKey: input.PartitionKey }),
  };
};

/**
 * serializeAws_restJson1NetworkConfiguration
 */
const se_NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.awsvpcConfiguration != null && {
      awsvpcConfiguration: se_AwsVpcConfiguration(input.awsvpcConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1PlacementConstraint
 */
const se_PlacementConstraint = (input: PlacementConstraint, context: __SerdeContext): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1PlacementConstraints
 */
const se_PlacementConstraints = (input: PlacementConstraint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PlacementConstraint(entry, context);
    });
};

/**
 * serializeAws_restJson1PlacementStrategies
 */
const se_PlacementStrategies = (input: PlacementStrategy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PlacementStrategy(entry, context);
    });
};

/**
 * serializeAws_restJson1PlacementStrategy
 */
const se_PlacementStrategy = (input: PlacementStrategy, context: __SerdeContext): any => {
  return {
    ...(input.field != null && { field: input.field }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1RetryPolicy
 */
const se_RetryPolicy = (input: RetryPolicy, context: __SerdeContext): any => {
  return {
    ...(input.MaximumEventAgeInSeconds != null && { MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
  };
};

/**
 * serializeAws_restJson1SageMakerPipelineParameter
 */
const se_SageMakerPipelineParameter = (input: SageMakerPipelineParameter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1SageMakerPipelineParameterList
 */
const se_SageMakerPipelineParameterList = (input: SageMakerPipelineParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SageMakerPipelineParameter(entry, context);
    });
};

/**
 * serializeAws_restJson1SageMakerPipelineParameters
 */
const se_SageMakerPipelineParameters = (input: SageMakerPipelineParameters, context: __SerdeContext): any => {
  return {
    ...(input.PipelineParameterList != null && {
      PipelineParameterList: se_SageMakerPipelineParameterList(input.PipelineParameterList, context),
    }),
  };
};

/**
 * serializeAws_restJson1SecurityGroups
 */
const se_SecurityGroups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SqsParameters
 */
const se_SqsParameters = (input: SqsParameters, context: __SerdeContext): any => {
  return {
    ...(input.MessageGroupId != null && { MessageGroupId: input.MessageGroupId }),
  };
};

/**
 * serializeAws_restJson1Subnets
 */
const se_Subnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Tags
 */
const se_Tags = (input: Record<string, string>[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagMap(entry, context);
    });
};

/**
 * serializeAws_restJson1Target
 */
const se_Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.DeadLetterConfig != null && { DeadLetterConfig: se_DeadLetterConfig(input.DeadLetterConfig, context) }),
    ...(input.EcsParameters != null && { EcsParameters: se_EcsParameters(input.EcsParameters, context) }),
    ...(input.EventBridgeParameters != null && {
      EventBridgeParameters: se_EventBridgeParameters(input.EventBridgeParameters, context),
    }),
    ...(input.Input != null && { Input: input.Input }),
    ...(input.KinesisParameters != null && {
      KinesisParameters: se_KinesisParameters(input.KinesisParameters, context),
    }),
    ...(input.RetryPolicy != null && { RetryPolicy: se_RetryPolicy(input.RetryPolicy, context) }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SageMakerPipelineParameters != null && {
      SageMakerPipelineParameters: se_SageMakerPipelineParameters(input.SageMakerPipelineParameters, context),
    }),
    ...(input.SqsParameters != null && { SqsParameters: se_SqsParameters(input.SqsParameters, context) }),
  };
};

/**
 * deserializeAws_restJson1AwsVpcConfiguration
 */
const de_AwsVpcConfiguration = (output: any, context: __SerdeContext): AwsVpcConfiguration => {
  return {
    AssignPublicIp: __expectString(output.AssignPublicIp),
    SecurityGroups: output.SecurityGroups != null ? de_SecurityGroups(output.SecurityGroups, context) : undefined,
    Subnets: output.Subnets != null ? de_Subnets(output.Subnets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CapacityProviderStrategy
 */
const de_CapacityProviderStrategy = (output: any, context: __SerdeContext): CapacityProviderStrategyItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CapacityProviderStrategyItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CapacityProviderStrategyItem
 */
const de_CapacityProviderStrategyItem = (output: any, context: __SerdeContext): CapacityProviderStrategyItem => {
  return {
    base: __expectInt32(output.base),
    capacityProvider: __expectString(output.capacityProvider),
    weight: __expectInt32(output.weight),
  } as any;
};

/**
 * deserializeAws_restJson1DeadLetterConfig
 */
const de_DeadLetterConfig = (output: any, context: __SerdeContext): DeadLetterConfig => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

/**
 * deserializeAws_restJson1EcsParameters
 */
const de_EcsParameters = (output: any, context: __SerdeContext): EcsParameters => {
  return {
    CapacityProviderStrategy:
      output.CapacityProviderStrategy != null
        ? de_CapacityProviderStrategy(output.CapacityProviderStrategy, context)
        : undefined,
    EnableECSManagedTags: __expectBoolean(output.EnableECSManagedTags),
    EnableExecuteCommand: __expectBoolean(output.EnableExecuteCommand),
    Group: __expectString(output.Group),
    LaunchType: __expectString(output.LaunchType),
    NetworkConfiguration:
      output.NetworkConfiguration != null ? de_NetworkConfiguration(output.NetworkConfiguration, context) : undefined,
    PlacementConstraints:
      output.PlacementConstraints != null ? de_PlacementConstraints(output.PlacementConstraints, context) : undefined,
    PlacementStrategy:
      output.PlacementStrategy != null ? de_PlacementStrategies(output.PlacementStrategy, context) : undefined,
    PlatformVersion: __expectString(output.PlatformVersion),
    PropagateTags: __expectString(output.PropagateTags),
    ReferenceId: __expectString(output.ReferenceId),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    TaskCount: __expectInt32(output.TaskCount),
    TaskDefinitionArn: __expectString(output.TaskDefinitionArn),
  } as any;
};

/**
 * deserializeAws_restJson1EventBridgeParameters
 */
const de_EventBridgeParameters = (output: any, context: __SerdeContext): EventBridgeParameters => {
  return {
    DetailType: __expectString(output.DetailType),
    Source: __expectString(output.Source),
  } as any;
};

/**
 * deserializeAws_restJson1FlexibleTimeWindow
 */
const de_FlexibleTimeWindow = (output: any, context: __SerdeContext): FlexibleTimeWindow => {
  return {
    MaximumWindowInMinutes: __expectInt32(output.MaximumWindowInMinutes),
    Mode: __expectString(output.Mode),
  } as any;
};

/**
 * deserializeAws_restJson1KinesisParameters
 */
const de_KinesisParameters = (output: any, context: __SerdeContext): KinesisParameters => {
  return {
    PartitionKey: __expectString(output.PartitionKey),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkConfiguration
 */
const de_NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    awsvpcConfiguration:
      output.awsvpcConfiguration != null ? de_AwsVpcConfiguration(output.awsvpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PlacementConstraint
 */
const de_PlacementConstraint = (output: any, context: __SerdeContext): PlacementConstraint => {
  return {
    expression: __expectString(output.expression),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1PlacementConstraints
 */
const de_PlacementConstraints = (output: any, context: __SerdeContext): PlacementConstraint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlacementConstraint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PlacementStrategies
 */
const de_PlacementStrategies = (output: any, context: __SerdeContext): PlacementStrategy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlacementStrategy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PlacementStrategy
 */
const de_PlacementStrategy = (output: any, context: __SerdeContext): PlacementStrategy => {
  return {
    field: __expectString(output.field),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1RetryPolicy
 */
const de_RetryPolicy = (output: any, context: __SerdeContext): RetryPolicy => {
  return {
    MaximumEventAgeInSeconds: __expectInt32(output.MaximumEventAgeInSeconds),
    MaximumRetryAttempts: __expectInt32(output.MaximumRetryAttempts),
  } as any;
};

/**
 * deserializeAws_restJson1SageMakerPipelineParameter
 */
const de_SageMakerPipelineParameter = (output: any, context: __SerdeContext): SageMakerPipelineParameter => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1SageMakerPipelineParameterList
 */
const de_SageMakerPipelineParameterList = (output: any, context: __SerdeContext): SageMakerPipelineParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SageMakerPipelineParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SageMakerPipelineParameters
 */
const de_SageMakerPipelineParameters = (output: any, context: __SerdeContext): SageMakerPipelineParameters => {
  return {
    PipelineParameterList:
      output.PipelineParameterList != null
        ? de_SageMakerPipelineParameterList(output.PipelineParameterList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ScheduleGroupList
 */
const de_ScheduleGroupList = (output: any, context: __SerdeContext): ScheduleGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScheduleGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ScheduleGroupSummary
 */
const de_ScheduleGroupSummary = (output: any, context: __SerdeContext): ScheduleGroupSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    LastModificationDate:
      output.LastModificationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationDate)))
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1ScheduleList
 */
const de_ScheduleList = (output: any, context: __SerdeContext): ScheduleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScheduleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ScheduleSummary
 */
const de_ScheduleSummary = (output: any, context: __SerdeContext): ScheduleSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    GroupName: __expectString(output.GroupName),
    LastModificationDate:
      output.LastModificationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationDate)))
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Target: output.Target != null ? de_TargetSummary(output.Target, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SecurityGroups
 */
const de_SecurityGroups = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SqsParameters
 */
const de_SqsParameters = (output: any, context: __SerdeContext): SqsParameters => {
  return {
    MessageGroupId: __expectString(output.MessageGroupId),
  } as any;
};

/**
 * deserializeAws_restJson1Subnets
 */
const de_Subnets = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagMap(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Target
 */
const de_Target = (output: any, context: __SerdeContext): Target => {
  return {
    Arn: __expectString(output.Arn),
    DeadLetterConfig:
      output.DeadLetterConfig != null ? de_DeadLetterConfig(output.DeadLetterConfig, context) : undefined,
    EcsParameters: output.EcsParameters != null ? de_EcsParameters(output.EcsParameters, context) : undefined,
    EventBridgeParameters:
      output.EventBridgeParameters != null
        ? de_EventBridgeParameters(output.EventBridgeParameters, context)
        : undefined,
    Input: __expectString(output.Input),
    KinesisParameters:
      output.KinesisParameters != null ? de_KinesisParameters(output.KinesisParameters, context) : undefined,
    RetryPolicy: output.RetryPolicy != null ? de_RetryPolicy(output.RetryPolicy, context) : undefined,
    RoleArn: __expectString(output.RoleArn),
    SageMakerPipelineParameters:
      output.SageMakerPipelineParameters != null
        ? de_SageMakerPipelineParameters(output.SageMakerPipelineParameters, context)
        : undefined,
    SqsParameters: output.SqsParameters != null ? de_SqsParameters(output.SqsParameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TargetSummary
 */
const de_TargetSummary = (output: any, context: __SerdeContext): TargetSummary => {
  return {
    Arn: __expectString(output.Arn),
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
