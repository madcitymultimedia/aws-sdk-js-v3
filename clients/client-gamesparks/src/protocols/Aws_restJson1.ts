// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateGameCommandInput, CreateGameCommandOutput } from "../commands/CreateGameCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "../commands/CreateSnapshotCommand";
import { CreateStageCommandInput, CreateStageCommandOutput } from "../commands/CreateStageCommand";
import { DeleteGameCommandInput, DeleteGameCommandOutput } from "../commands/DeleteGameCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "../commands/DeleteStageCommand";
import { DisconnectPlayerCommandInput, DisconnectPlayerCommandOutput } from "../commands/DisconnectPlayerCommand";
import { ExportSnapshotCommandInput, ExportSnapshotCommandOutput } from "../commands/ExportSnapshotCommand";
import { GetExtensionCommandInput, GetExtensionCommandOutput } from "../commands/GetExtensionCommand";
import {
  GetExtensionVersionCommandInput,
  GetExtensionVersionCommandOutput,
} from "../commands/GetExtensionVersionCommand";
import { GetGameCommandInput, GetGameCommandOutput } from "../commands/GetGameCommand";
import {
  GetGameConfigurationCommandInput,
  GetGameConfigurationCommandOutput,
} from "../commands/GetGameConfigurationCommand";
import {
  GetGeneratedCodeJobCommandInput,
  GetGeneratedCodeJobCommandOutput,
} from "../commands/GetGeneratedCodeJobCommand";
import {
  GetPlayerConnectionStatusCommandInput,
  GetPlayerConnectionStatusCommandOutput,
} from "../commands/GetPlayerConnectionStatusCommand";
import { GetSnapshotCommandInput, GetSnapshotCommandOutput } from "../commands/GetSnapshotCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "../commands/GetStageCommand";
import { GetStageDeploymentCommandInput, GetStageDeploymentCommandOutput } from "../commands/GetStageDeploymentCommand";
import {
  ImportGameConfigurationCommandInput,
  ImportGameConfigurationCommandOutput,
} from "../commands/ImportGameConfigurationCommand";
import { ListExtensionsCommandInput, ListExtensionsCommandOutput } from "../commands/ListExtensionsCommand";
import {
  ListExtensionVersionsCommandInput,
  ListExtensionVersionsCommandOutput,
} from "../commands/ListExtensionVersionsCommand";
import { ListGamesCommandInput, ListGamesCommandOutput } from "../commands/ListGamesCommand";
import {
  ListGeneratedCodeJobsCommandInput,
  ListGeneratedCodeJobsCommandOutput,
} from "../commands/ListGeneratedCodeJobsCommand";
import { ListSnapshotsCommandInput, ListSnapshotsCommandOutput } from "../commands/ListSnapshotsCommand";
import {
  ListStageDeploymentsCommandInput,
  ListStageDeploymentsCommandOutput,
} from "../commands/ListStageDeploymentsCommand";
import { ListStagesCommandInput, ListStagesCommandOutput } from "../commands/ListStagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StartGeneratedCodeJobCommandInput,
  StartGeneratedCodeJobCommandOutput,
} from "../commands/StartGeneratedCodeJobCommand";
import {
  StartStageDeploymentCommandInput,
  StartStageDeploymentCommandOutput,
} from "../commands/StartStageDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateGameCommandInput, UpdateGameCommandOutput } from "../commands/UpdateGameCommand";
import {
  UpdateGameConfigurationCommandInput,
  UpdateGameConfigurationCommandOutput,
} from "../commands/UpdateGameConfigurationCommand";
import { UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput } from "../commands/UpdateSnapshotCommand";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "../commands/UpdateStageCommand";
import { GameSparksServiceException as __BaseException } from "../models/GameSparksServiceException";
import {
  AccessDeniedException,
  ConflictException,
  Connection,
  DeploymentResult,
  ExtensionDetails,
  ExtensionVersionDetails,
  GameConfigurationDetails,
  GameDetails,
  GameSummary,
  GeneratedCodeJobDetails,
  Generator,
  ImportGameConfigurationSource,
  InternalServerException,
  ResourceNotFoundException,
  Section,
  SectionModification,
  ServiceQuotaExceededException,
  SnapshotDetails,
  SnapshotSummary,
  StageDeploymentDetails,
  StageDeploymentSummary,
  StageDetails,
  StageSummary,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateGameCommand
 */
export const se_CreateGameCommand = async (
  input: CreateGameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game";
  let body: any;
  body = JSON.stringify({
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GameName != null && { GameName: input.GameName }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1CreateSnapshotCommand
 */
export const se_CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/snapshot";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
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
 * serializeAws_restJson1CreateStageCommand
 */
export const se_CreateStageCommand = async (
  input: CreateStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/stage";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.StageName != null && { StageName: input.StageName }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1DeleteGameCommand
 */
export const se_DeleteGameCommand = async (
  input: DeleteGameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
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
 * serializeAws_restJson1DeleteStageCommand
 */
export const se_DeleteStageCommand = async (
  input: DeleteStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/stage/{StageName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
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
 * serializeAws_restJson1DisconnectPlayerCommand
 */
export const se_DisconnectPlayerCommand = async (
  input: DisconnectPlayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/runtime/game/{GameName}/stage/{StageName}/player/{PlayerId}/disconnect";
  resolvedPath = __resolvedPath(resolvedPath, input, "PlayerId", () => input.PlayerId!, "{PlayerId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
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
 * serializeAws_restJson1ExportSnapshotCommand
 */
export const se_ExportSnapshotCommand = async (
  input: ExportSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/snapshot/{SnapshotId}/export";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SnapshotId", () => input.SnapshotId!, "{SnapshotId}", false);
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
 * serializeAws_restJson1GetExtensionCommand
 */
export const se_GetExtensionCommand = async (
  input: GetExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extension/{Namespace}/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
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
 * serializeAws_restJson1GetExtensionVersionCommand
 */
export const se_GetExtensionVersionCommand = async (
  input: GetExtensionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/extension/{Namespace}/{Name}/version/{ExtensionVersion}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ExtensionVersion",
    () => input.ExtensionVersion!,
    "{ExtensionVersion}",
    false
  );
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
 * serializeAws_restJson1GetGameCommand
 */
export const se_GetGameCommand = async (
  input: GetGameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
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
 * serializeAws_restJson1GetGameConfigurationCommand
 */
export const se_GetGameConfigurationCommand = async (
  input: GetGameConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  const query: any = map({
    Sections: [() => input.Sections !== void 0, () => (input.Sections! || []).map((_entry) => _entry as any)],
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
 * serializeAws_restJson1GetGeneratedCodeJobCommand
 */
export const se_GetGeneratedCodeJobCommand = async (
  input: GetGeneratedCodeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/snapshot/{SnapshotId}/generated-sdk-code-job/{JobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SnapshotId", () => input.SnapshotId!, "{SnapshotId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
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
 * serializeAws_restJson1GetPlayerConnectionStatusCommand
 */
export const se_GetPlayerConnectionStatusCommand = async (
  input: GetPlayerConnectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/runtime/game/{GameName}/stage/{StageName}/player/{PlayerId}/connection";
  resolvedPath = __resolvedPath(resolvedPath, input, "PlayerId", () => input.PlayerId!, "{PlayerId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
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
 * serializeAws_restJson1GetSnapshotCommand
 */
export const se_GetSnapshotCommand = async (
  input: GetSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/snapshot/{SnapshotId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SnapshotId", () => input.SnapshotId!, "{SnapshotId}", false);
  const query: any = map({
    Sections: [() => input.Sections !== void 0, () => (input.Sections! || []).map((_entry) => _entry as any)],
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
 * serializeAws_restJson1GetStageCommand
 */
export const se_GetStageCommand = async (
  input: GetStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/stage/{StageName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
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
 * serializeAws_restJson1GetStageDeploymentCommand
 */
export const se_GetStageDeploymentCommand = async (
  input: GetStageDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/stage/{StageName}/deployment";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
  const query: any = map({
    DeploymentId: [, input.DeploymentId!],
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
 * serializeAws_restJson1ImportGameConfigurationCommand
 */
export const se_ImportGameConfigurationCommand = async (
  input: ImportGameConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ImportSource != null && { ImportSource: se_ImportGameConfigurationSource(input.ImportSource, context) }),
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
 * serializeAws_restJson1ListExtensionsCommand
 */
export const se_ListExtensionsCommand = async (
  input: ListExtensionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extension";
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListExtensionVersionsCommand
 */
export const se_ListExtensionVersionsCommand = async (
  input: ListExtensionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extension/{Namespace}/{Name}/version";
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  const query: any = map({
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
 * serializeAws_restJson1ListGamesCommand
 */
export const se_ListGamesCommand = async (
  input: ListGamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game";
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListGeneratedCodeJobsCommand
 */
export const se_ListGeneratedCodeJobsCommand = async (
  input: ListGeneratedCodeJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/snapshot/{SnapshotId}/generated-sdk-code-jobs";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SnapshotId", () => input.SnapshotId!, "{SnapshotId}", false);
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListSnapshotsCommand
 */
export const se_ListSnapshotsCommand = async (
  input: ListSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/snapshot";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListStageDeploymentsCommand
 */
export const se_ListStageDeploymentsCommand = async (
  input: ListStageDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/stage/{StageName}/deployments";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
  const query: any = map({
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
 * serializeAws_restJson1ListStagesCommand
 */
export const se_ListStagesCommand = async (
  input: ListStagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/stage";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
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
 * serializeAws_restJson1StartGeneratedCodeJobCommand
 */
export const se_StartGeneratedCodeJobCommand = async (
  input: StartGeneratedCodeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/snapshot/{SnapshotId}/generated-sdk-code-job";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SnapshotId", () => input.SnapshotId!, "{SnapshotId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Generator != null && { Generator: se_Generator(input.Generator, context) }),
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
 * serializeAws_restJson1StartStageDeploymentCommand
 */
export const se_StartStageDeploymentCommand = async (
  input: StartStageDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/stage/{StageName}/deployment";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
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
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
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
 * serializeAws_restJson1UpdateGameCommand
 */
export const se_UpdateGameCommand = async (
  input: UpdateGameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
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
 * serializeAws_restJson1UpdateGameConfigurationCommand
 */
export const se_UpdateGameConfigurationCommand = async (
  input: UpdateGameConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Modifications != null && { Modifications: se_SectionModificationList(input.Modifications, context) }),
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
 * serializeAws_restJson1UpdateSnapshotCommand
 */
export const se_UpdateSnapshotCommand = async (
  input: UpdateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/snapshot/{SnapshotId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SnapshotId", () => input.SnapshotId!, "{SnapshotId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
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
 * serializeAws_restJson1UpdateStageCommand
 */
export const se_UpdateStageCommand = async (
  input: UpdateStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/stage/{StageName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GameName", () => input.GameName!, "{GameName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Role != null && { Role: input.Role }),
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
 * deserializeAws_restJson1CreateGameCommand
 */
export const de_CreateGameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateGameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Game != null) {
    contents.Game = de_GameDetails(data.Game, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateGameCommandError
 */
const de_CreateGameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.gamesparks#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.gamesparks#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1CreateSnapshotCommand
 */
export const de_CreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSnapshotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Snapshot != null) {
    contents.Snapshot = de_SnapshotDetails(data.Snapshot, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSnapshotCommandError
 */
const de_CreateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.gamesparks#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1CreateStageCommand
 */
export const de_CreateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateStageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Stage != null) {
    contents.Stage = de_StageDetails(data.Stage, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateStageCommandError
 */
const de_CreateStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.gamesparks#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1DeleteGameCommand
 */
export const de_DeleteGameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteGameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGameCommandError
 */
const de_DeleteGameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.gamesparks#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1DeleteStageCommand
 */
export const de_DeleteStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteStageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteStageCommandError
 */
const de_DeleteStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.gamesparks#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1DisconnectPlayerCommand
 */
export const de_DisconnectPlayerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectPlayerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisconnectPlayerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DisconnectFailures != null) {
    contents.DisconnectFailures = de_ConnectionIdList(data.DisconnectFailures, context);
  }
  if (data.DisconnectSuccesses != null) {
    contents.DisconnectSuccesses = de_ConnectionIdList(data.DisconnectSuccesses, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisconnectPlayerCommandError
 */
const de_DisconnectPlayerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectPlayerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1ExportSnapshotCommand
 */
export const de_ExportSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExportSnapshotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.S3Url != null) {
    contents.S3Url = __expectString(data.S3Url);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ExportSnapshotCommandError
 */
const de_ExportSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1GetExtensionCommand
 */
export const de_GetExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetExtensionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Extension != null) {
    contents.Extension = de_ExtensionDetails(data.Extension, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetExtensionCommandError
 */
const de_GetExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1GetExtensionVersionCommand
 */
export const de_GetExtensionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetExtensionVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ExtensionVersion != null) {
    contents.ExtensionVersion = de_ExtensionVersionDetails(data.ExtensionVersion, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetExtensionVersionCommandError
 */
const de_GetExtensionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1GetGameCommand
 */
export const de_GetGameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Game != null) {
    contents.Game = de_GameDetails(data.Game, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetGameCommandError
 */
const de_GetGameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1GetGameConfigurationCommand
 */
export const de_GetGameConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGameConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGameConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GameConfiguration != null) {
    contents.GameConfiguration = de_GameConfigurationDetails(data.GameConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetGameConfigurationCommandError
 */
const de_GetGameConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGameConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1GetGeneratedCodeJobCommand
 */
export const de_GetGeneratedCodeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeneratedCodeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGeneratedCodeJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GeneratedCodeJob != null) {
    contents.GeneratedCodeJob = de_GeneratedCodeJobDetails(data.GeneratedCodeJob, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetGeneratedCodeJobCommandError
 */
const de_GetGeneratedCodeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeneratedCodeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1GetPlayerConnectionStatusCommand
 */
export const de_GetPlayerConnectionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlayerConnectionStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPlayerConnectionStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connections != null) {
    contents.Connections = de_ConnectionList(data.Connections, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPlayerConnectionStatusCommandError
 */
const de_GetPlayerConnectionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlayerConnectionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1GetSnapshotCommand
 */
export const de_GetSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSnapshotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Snapshot != null) {
    contents.Snapshot = de_SnapshotDetails(data.Snapshot, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSnapshotCommandError
 */
const de_GetSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1GetStageCommand
 */
export const de_GetStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Stage != null) {
    contents.Stage = de_StageDetails(data.Stage, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetStageCommandError
 */
const de_GetStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1GetStageDeploymentCommand
 */
export const de_GetStageDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStageDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StageDeployment != null) {
    contents.StageDeployment = de_StageDeploymentDetails(data.StageDeployment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetStageDeploymentCommandError
 */
const de_GetStageDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1ImportGameConfigurationCommand
 */
export const de_ImportGameConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportGameConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ImportGameConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GameConfiguration != null) {
    contents.GameConfiguration = de_GameConfigurationDetails(data.GameConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ImportGameConfigurationCommandError
 */
const de_ImportGameConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportGameConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.gamesparks#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1ListExtensionsCommand
 */
export const de_ListExtensionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListExtensionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Extensions != null) {
    contents.Extensions = de_ExtensionDetailsList(data.Extensions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListExtensionsCommandError
 */
const de_ListExtensionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1ListExtensionVersionsCommand
 */
export const de_ListExtensionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListExtensionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ExtensionVersions != null) {
    contents.ExtensionVersions = de_ExtensionVersionDetailsList(data.ExtensionVersions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListExtensionVersionsCommandError
 */
const de_ListExtensionVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1ListGamesCommand
 */
export const de_ListGamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGamesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Games != null) {
    contents.Games = de_GameSummaryList(data.Games, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListGamesCommandError
 */
const de_ListGamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1ListGeneratedCodeJobsCommand
 */
export const de_ListGeneratedCodeJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeneratedCodeJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGeneratedCodeJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GeneratedCodeJobs != null) {
    contents.GeneratedCodeJobs = de_GeneratedCodeJobDetailsList(data.GeneratedCodeJobs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListGeneratedCodeJobsCommandError
 */
const de_ListGeneratedCodeJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeneratedCodeJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1ListSnapshotsCommand
 */
export const de_ListSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSnapshotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Snapshots != null) {
    contents.Snapshots = de_SnapshotSummaryList(data.Snapshots, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSnapshotsCommandError
 */
const de_ListSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1ListStageDeploymentsCommand
 */
export const de_ListStageDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStageDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListStageDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.StageDeployments != null) {
    contents.StageDeployments = de_StageDeploymentList(data.StageDeployments, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListStageDeploymentsCommandError
 */
const de_ListStageDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStageDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1ListStagesCommand
 */
export const de_ListStagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListStagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Stages != null) {
    contents.Stages = de_StageSummaryList(data.Stages, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListStagesCommandError
 */
const de_ListStagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
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
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1StartGeneratedCodeJobCommand
 */
export const de_StartGeneratedCodeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGeneratedCodeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartGeneratedCodeJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GeneratedCodeJobId != null) {
    contents.GeneratedCodeJobId = __expectString(data.GeneratedCodeJobId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartGeneratedCodeJobCommandError
 */
const de_StartGeneratedCodeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGeneratedCodeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1StartStageDeploymentCommand
 */
export const de_StartStageDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStageDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartStageDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StageDeployment != null) {
    contents.StageDeployment = de_StageDeploymentDetails(data.StageDeployment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartStageDeploymentCommandError
 */
const de_StartStageDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStageDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.gamesparks#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1UpdateGameCommand
 */
export const de_UpdateGameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Game != null) {
    contents.Game = de_GameDetails(data.Game, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGameCommandError
 */
const de_UpdateGameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1UpdateGameConfigurationCommand
 */
export const de_UpdateGameConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGameConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GameConfiguration != null) {
    contents.GameConfiguration = de_GameConfigurationDetails(data.GameConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGameConfigurationCommandError
 */
const de_UpdateGameConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.gamesparks#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1UpdateSnapshotCommand
 */
export const de_UpdateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSnapshotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Snapshot != null) {
    contents.Snapshot = de_SnapshotDetails(data.Snapshot, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSnapshotCommandError
 */
const de_UpdateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1UpdateStageCommand
 */
export const de_UpdateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateStageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Stage != null) {
    contents.Stage = de_StageDetails(data.Stage, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateStageCommandError
 */
const de_UpdateStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

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
 * serializeAws_restJson1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

/**
 * serializeAws_restJson1Generator
 */
const se_Generator = (input: Generator, context: __SerdeContext): any => {
  return {
    ...(input.GameSdkVersion != null && { GameSdkVersion: input.GameSdkVersion }),
    ...(input.Language != null && { Language: input.Language }),
    ...(input.TargetPlatform != null && { TargetPlatform: input.TargetPlatform }),
  };
};

/**
 * serializeAws_restJson1ImportGameConfigurationSource
 */
const se_ImportGameConfigurationSource = (input: ImportGameConfigurationSource, context: __SerdeContext): any => {
  return {
    ...(input.File != null && { File: context.base64Encoder(input.File) }),
  };
};

/**
 * serializeAws_restJson1SectionModification
 */
const se_SectionModification = (input: SectionModification, context: __SerdeContext): any => {
  return {
    ...(input.Operation != null && { Operation: input.Operation }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.Section != null && { Section: input.Section }),
    ...(input.Value != null && { Value: se_Document(input.Value, context) }),
  };
};

/**
 * serializeAws_restJson1SectionModificationList
 */
const se_SectionModificationList = (input: SectionModification[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SectionModification(entry, context);
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
 * deserializeAws_restJson1Connection
 */
const de_Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    Created: output.Created != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.Created)) : undefined,
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectionIdList
 */
const de_ConnectionIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ConnectionList
 */
const de_ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Connection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeploymentResult
 */
const de_DeploymentResult = (output: any, context: __SerdeContext): DeploymentResult => {
  return {
    Message: __expectString(output.Message),
    ResultCode: __expectString(output.ResultCode),
  } as any;
};

/**
 * deserializeAws_restJson1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_restJson1ExtensionDetails
 */
const de_ExtensionDetails = (output: any, context: __SerdeContext): ExtensionDetails => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Namespace: __expectString(output.Namespace),
  } as any;
};

/**
 * deserializeAws_restJson1ExtensionDetailsList
 */
const de_ExtensionDetailsList = (output: any, context: __SerdeContext): ExtensionDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExtensionDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExtensionVersionDetails
 */
const de_ExtensionVersionDetails = (output: any, context: __SerdeContext): ExtensionVersionDetails => {
  return {
    Name: __expectString(output.Name),
    Namespace: __expectString(output.Namespace),
    Schema: __expectString(output.Schema),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1ExtensionVersionDetailsList
 */
const de_ExtensionVersionDetailsList = (output: any, context: __SerdeContext): ExtensionVersionDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExtensionVersionDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GameConfigurationDetails
 */
const de_GameConfigurationDetails = (output: any, context: __SerdeContext): GameConfigurationDetails => {
  return {
    Created: output.Created != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.Created)) : undefined,
    LastUpdated:
      output.LastUpdated != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.LastUpdated)) : undefined,
    Sections: output.Sections != null ? de_Sections(output.Sections, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GameDetails
 */
const de_GameDetails = (output: any, context: __SerdeContext): GameDetails => {
  return {
    Arn: __expectString(output.Arn),
    Created: output.Created != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.Created)) : undefined,
    Description: __expectString(output.Description),
    EnableTerminationProtection: __expectBoolean(output.EnableTerminationProtection),
    LastUpdated:
      output.LastUpdated != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.LastUpdated)) : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GameSummary
 */
const de_GameSummary = (output: any, context: __SerdeContext): GameSummary => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GameSummaryList
 */
const de_GameSummaryList = (output: any, context: __SerdeContext): GameSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GameSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GeneratedCodeJobDetails
 */
const de_GeneratedCodeJobDetails = (output: any, context: __SerdeContext): GeneratedCodeJobDetails => {
  return {
    Description: __expectString(output.Description),
    ExpirationTime:
      output.ExpirationTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.ExpirationTime))
        : undefined,
    GeneratedCodeJobId: __expectString(output.GeneratedCodeJobId),
    S3Url: __expectString(output.S3Url),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1GeneratedCodeJobDetailsList
 */
const de_GeneratedCodeJobDetailsList = (output: any, context: __SerdeContext): GeneratedCodeJobDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GeneratedCodeJobDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Section
 */
const de_Section = (output: any, context: __SerdeContext): Section => {
  return {
    Attributes: output.Attributes != null ? de_Document(output.Attributes, context) : undefined,
    Name: __expectString(output.Name),
    Size: __expectInt32(output.Size),
  } as any;
};

/**
 * deserializeAws_restJson1Sections
 */
const de_Sections = (output: any, context: __SerdeContext): Record<string, Section> => {
  return Object.entries(output).reduce((acc: Record<string, Section>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Section(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SnapshotDetails
 */
const de_SnapshotDetails = (output: any, context: __SerdeContext): SnapshotDetails => {
  return {
    Created: output.Created != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.Created)) : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LastUpdated:
      output.LastUpdated != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.LastUpdated)) : undefined,
    Sections: output.Sections != null ? de_Sections(output.Sections, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SnapshotSummary
 */
const de_SnapshotSummary = (output: any, context: __SerdeContext): SnapshotSummary => {
  return {
    Created: output.Created != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.Created)) : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LastUpdated:
      output.LastUpdated != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.LastUpdated)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SnapshotSummaryList
 */
const de_SnapshotSummaryList = (output: any, context: __SerdeContext): SnapshotSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SnapshotSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StageDeploymentDetails
 */
const de_StageDeploymentDetails = (output: any, context: __SerdeContext): StageDeploymentDetails => {
  return {
    Created: output.Created != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.Created)) : undefined,
    DeploymentAction: __expectString(output.DeploymentAction),
    DeploymentId: __expectString(output.DeploymentId),
    DeploymentResult:
      output.DeploymentResult != null ? de_DeploymentResult(output.DeploymentResult, context) : undefined,
    DeploymentState: __expectString(output.DeploymentState),
    LastUpdated:
      output.LastUpdated != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.LastUpdated)) : undefined,
    SnapshotId: __expectString(output.SnapshotId),
  } as any;
};

/**
 * deserializeAws_restJson1StageDeploymentList
 */
const de_StageDeploymentList = (output: any, context: __SerdeContext): StageDeploymentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StageDeploymentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StageDeploymentSummary
 */
const de_StageDeploymentSummary = (output: any, context: __SerdeContext): StageDeploymentSummary => {
  return {
    DeploymentAction: __expectString(output.DeploymentAction),
    DeploymentId: __expectString(output.DeploymentId),
    DeploymentResult:
      output.DeploymentResult != null ? de_DeploymentResult(output.DeploymentResult, context) : undefined,
    DeploymentState: __expectString(output.DeploymentState),
    LastUpdated:
      output.LastUpdated != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.LastUpdated)) : undefined,
    SnapshotId: __expectString(output.SnapshotId),
  } as any;
};

/**
 * deserializeAws_restJson1StageDetails
 */
const de_StageDetails = (output: any, context: __SerdeContext): StageDetails => {
  return {
    Arn: __expectString(output.Arn),
    Created: output.Created != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.Created)) : undefined,
    Description: __expectString(output.Description),
    GameKey: __expectString(output.GameKey),
    LastUpdated:
      output.LastUpdated != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.LastUpdated)) : undefined,
    LogGroup: __expectString(output.LogGroup),
    Name: __expectString(output.Name),
    Role: __expectString(output.Role),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1StageSummary
 */
const de_StageSummary = (output: any, context: __SerdeContext): StageSummary => {
  return {
    Description: __expectString(output.Description),
    GameKey: __expectString(output.GameKey),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1StageSummaryList
 */
const de_StageSummaryList = (output: any, context: __SerdeContext): StageSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StageSummary(entry, context);
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
