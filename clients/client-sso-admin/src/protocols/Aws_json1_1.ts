// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput,
} from "../commands/AttachCustomerManagedPolicyReferenceToPermissionSetCommand";
import {
  AttachManagedPolicyToPermissionSetCommandInput,
  AttachManagedPolicyToPermissionSetCommandOutput,
} from "../commands/AttachManagedPolicyToPermissionSetCommand";
import {
  CreateAccountAssignmentCommandInput,
  CreateAccountAssignmentCommandOutput,
} from "../commands/CreateAccountAssignmentCommand";
import {
  CreateInstanceAccessControlAttributeConfigurationCommandInput,
  CreateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "../commands/CreateInstanceAccessControlAttributeConfigurationCommand";
import {
  CreatePermissionSetCommandInput,
  CreatePermissionSetCommandOutput,
} from "../commands/CreatePermissionSetCommand";
import {
  DeleteAccountAssignmentCommandInput,
  DeleteAccountAssignmentCommandOutput,
} from "../commands/DeleteAccountAssignmentCommand";
import {
  DeleteInlinePolicyFromPermissionSetCommandInput,
  DeleteInlinePolicyFromPermissionSetCommandOutput,
} from "../commands/DeleteInlinePolicyFromPermissionSetCommand";
import {
  DeleteInstanceAccessControlAttributeConfigurationCommandInput,
  DeleteInstanceAccessControlAttributeConfigurationCommandOutput,
} from "../commands/DeleteInstanceAccessControlAttributeConfigurationCommand";
import {
  DeletePermissionsBoundaryFromPermissionSetCommandInput,
  DeletePermissionsBoundaryFromPermissionSetCommandOutput,
} from "../commands/DeletePermissionsBoundaryFromPermissionSetCommand";
import {
  DeletePermissionSetCommandInput,
  DeletePermissionSetCommandOutput,
} from "../commands/DeletePermissionSetCommand";
import {
  DescribeAccountAssignmentCreationStatusCommandInput,
  DescribeAccountAssignmentCreationStatusCommandOutput,
} from "../commands/DescribeAccountAssignmentCreationStatusCommand";
import {
  DescribeAccountAssignmentDeletionStatusCommandInput,
  DescribeAccountAssignmentDeletionStatusCommandOutput,
} from "../commands/DescribeAccountAssignmentDeletionStatusCommand";
import {
  DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  DescribeInstanceAccessControlAttributeConfigurationCommandOutput,
} from "../commands/DescribeInstanceAccessControlAttributeConfigurationCommand";
import {
  DescribePermissionSetCommandInput,
  DescribePermissionSetCommandOutput,
} from "../commands/DescribePermissionSetCommand";
import {
  DescribePermissionSetProvisioningStatusCommandInput,
  DescribePermissionSetProvisioningStatusCommandOutput,
} from "../commands/DescribePermissionSetProvisioningStatusCommand";
import {
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput,
} from "../commands/DetachCustomerManagedPolicyReferenceFromPermissionSetCommand";
import {
  DetachManagedPolicyFromPermissionSetCommandInput,
  DetachManagedPolicyFromPermissionSetCommandOutput,
} from "../commands/DetachManagedPolicyFromPermissionSetCommand";
import {
  GetInlinePolicyForPermissionSetCommandInput,
  GetInlinePolicyForPermissionSetCommandOutput,
} from "../commands/GetInlinePolicyForPermissionSetCommand";
import {
  GetPermissionsBoundaryForPermissionSetCommandInput,
  GetPermissionsBoundaryForPermissionSetCommandOutput,
} from "../commands/GetPermissionsBoundaryForPermissionSetCommand";
import {
  ListAccountAssignmentCreationStatusCommandInput,
  ListAccountAssignmentCreationStatusCommandOutput,
} from "../commands/ListAccountAssignmentCreationStatusCommand";
import {
  ListAccountAssignmentDeletionStatusCommandInput,
  ListAccountAssignmentDeletionStatusCommandOutput,
} from "../commands/ListAccountAssignmentDeletionStatusCommand";
import {
  ListAccountAssignmentsCommandInput,
  ListAccountAssignmentsCommandOutput,
} from "../commands/ListAccountAssignmentsCommand";
import {
  ListAccountsForProvisionedPermissionSetCommandInput,
  ListAccountsForProvisionedPermissionSetCommandOutput,
} from "../commands/ListAccountsForProvisionedPermissionSetCommand";
import {
  ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput,
} from "../commands/ListCustomerManagedPolicyReferencesInPermissionSetCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "../commands/ListInstancesCommand";
import {
  ListManagedPoliciesInPermissionSetCommandInput,
  ListManagedPoliciesInPermissionSetCommandOutput,
} from "../commands/ListManagedPoliciesInPermissionSetCommand";
import {
  ListPermissionSetProvisioningStatusCommandInput,
  ListPermissionSetProvisioningStatusCommandOutput,
} from "../commands/ListPermissionSetProvisioningStatusCommand";
import { ListPermissionSetsCommandInput, ListPermissionSetsCommandOutput } from "../commands/ListPermissionSetsCommand";
import {
  ListPermissionSetsProvisionedToAccountCommandInput,
  ListPermissionSetsProvisionedToAccountCommandOutput,
} from "../commands/ListPermissionSetsProvisionedToAccountCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ProvisionPermissionSetCommandInput,
  ProvisionPermissionSetCommandOutput,
} from "../commands/ProvisionPermissionSetCommand";
import {
  PutInlinePolicyToPermissionSetCommandInput,
  PutInlinePolicyToPermissionSetCommandOutput,
} from "../commands/PutInlinePolicyToPermissionSetCommand";
import {
  PutPermissionsBoundaryToPermissionSetCommandInput,
  PutPermissionsBoundaryToPermissionSetCommandOutput,
} from "../commands/PutPermissionsBoundaryToPermissionSetCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  UpdateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "../commands/UpdateInstanceAccessControlAttributeConfigurationCommand";
import {
  UpdatePermissionSetCommandInput,
  UpdatePermissionSetCommandOutput,
} from "../commands/UpdatePermissionSetCommand";
import {
  AccessControlAttribute,
  AccessControlAttributeValue,
  AccessDeniedException,
  AccountAssignment,
  AccountAssignmentOperationStatus,
  AccountAssignmentOperationStatusMetadata,
  AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  AttachCustomerManagedPolicyReferenceToPermissionSetResponse,
  AttachedManagedPolicy,
  AttachManagedPolicyToPermissionSetRequest,
  AttachManagedPolicyToPermissionSetResponse,
  ConflictException,
  CreateAccountAssignmentRequest,
  CreateAccountAssignmentResponse,
  CreateInstanceAccessControlAttributeConfigurationRequest,
  CreateInstanceAccessControlAttributeConfigurationResponse,
  CreatePermissionSetRequest,
  CreatePermissionSetResponse,
  CustomerManagedPolicyReference,
  DeleteAccountAssignmentRequest,
  DeleteAccountAssignmentResponse,
  DeleteInlinePolicyFromPermissionSetRequest,
  DeleteInlinePolicyFromPermissionSetResponse,
  DeleteInstanceAccessControlAttributeConfigurationRequest,
  DeleteInstanceAccessControlAttributeConfigurationResponse,
  DeletePermissionsBoundaryFromPermissionSetRequest,
  DeletePermissionsBoundaryFromPermissionSetResponse,
  DeletePermissionSetRequest,
  DeletePermissionSetResponse,
  DescribeAccountAssignmentCreationStatusRequest,
  DescribeAccountAssignmentCreationStatusResponse,
  DescribeAccountAssignmentDeletionStatusRequest,
  DescribeAccountAssignmentDeletionStatusResponse,
  DescribeInstanceAccessControlAttributeConfigurationRequest,
  DescribeInstanceAccessControlAttributeConfigurationResponse,
  DescribePermissionSetProvisioningStatusRequest,
  DescribePermissionSetProvisioningStatusResponse,
  DescribePermissionSetRequest,
  DescribePermissionSetResponse,
  DetachCustomerManagedPolicyReferenceFromPermissionSetRequest,
  DetachCustomerManagedPolicyReferenceFromPermissionSetResponse,
  DetachManagedPolicyFromPermissionSetRequest,
  DetachManagedPolicyFromPermissionSetResponse,
  GetInlinePolicyForPermissionSetRequest,
  GetInlinePolicyForPermissionSetResponse,
  GetPermissionsBoundaryForPermissionSetRequest,
  GetPermissionsBoundaryForPermissionSetResponse,
  InstanceAccessControlAttributeConfiguration,
  InstanceMetadata,
  InternalServerException,
  ListAccountAssignmentCreationStatusRequest,
  ListAccountAssignmentCreationStatusResponse,
  ListAccountAssignmentDeletionStatusRequest,
  ListAccountAssignmentDeletionStatusResponse,
  ListAccountAssignmentsRequest,
  ListAccountAssignmentsResponse,
  ListAccountsForProvisionedPermissionSetRequest,
  ListAccountsForProvisionedPermissionSetResponse,
  ListCustomerManagedPolicyReferencesInPermissionSetRequest,
  ListCustomerManagedPolicyReferencesInPermissionSetResponse,
  ListInstancesRequest,
  ListInstancesResponse,
  ListManagedPoliciesInPermissionSetRequest,
  ListManagedPoliciesInPermissionSetResponse,
  ListPermissionSetProvisioningStatusRequest,
  ListPermissionSetProvisioningStatusResponse,
  ListPermissionSetsProvisionedToAccountRequest,
  ListPermissionSetsProvisionedToAccountResponse,
  ListPermissionSetsRequest,
  ListPermissionSetsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  OperationStatusFilter,
  PermissionsBoundary,
  PermissionSet,
  PermissionSetProvisioningStatus,
  PermissionSetProvisioningStatusMetadata,
  ProvisionPermissionSetRequest,
  ProvisionPermissionSetResponse,
  PutInlinePolicyToPermissionSetRequest,
  PutInlinePolicyToPermissionSetResponse,
  PutPermissionsBoundaryToPermissionSetRequest,
  PutPermissionsBoundaryToPermissionSetResponse,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  ThrottlingException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateInstanceAccessControlAttributeConfigurationRequest,
  UpdateInstanceAccessControlAttributeConfigurationResponse,
  UpdatePermissionSetRequest,
  UpdatePermissionSetResponse,
  ValidationException,
} from "../models/models_0";
import { SSOAdminServiceException as __BaseException } from "../models/SSOAdminServiceException";

/**
 * serializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommand
 */
export const se_AttachCustomerManagedPolicyReferenceToPermissionSetCommand = async (
  input: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_AttachCustomerManagedPolicyReferenceToPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachManagedPolicyToPermissionSetCommand
 */
export const se_AttachManagedPolicyToPermissionSetCommand = async (
  input: AttachManagedPolicyToPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.AttachManagedPolicyToPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_AttachManagedPolicyToPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAccountAssignmentCommand
 */
export const se_CreateAccountAssignmentCommand = async (
  input: CreateAccountAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.CreateAccountAssignment",
  };
  let body: any;
  body = JSON.stringify(se_CreateAccountAssignmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand
 */
export const se_CreateInstanceAccessControlAttributeConfigurationCommand = async (
  input: CreateInstanceAccessControlAttributeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.CreateInstanceAccessControlAttributeConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_CreateInstanceAccessControlAttributeConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePermissionSetCommand
 */
export const se_CreatePermissionSetCommand = async (
  input: CreatePermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.CreatePermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_CreatePermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAccountAssignmentCommand
 */
export const se_DeleteAccountAssignmentCommand = async (
  input: DeleteAccountAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DeleteAccountAssignment",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAccountAssignmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommand
 */
export const se_DeleteInlinePolicyFromPermissionSetCommand = async (
  input: DeleteInlinePolicyFromPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DeleteInlinePolicyFromPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_DeleteInlinePolicyFromPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand
 */
export const se_DeleteInstanceAccessControlAttributeConfigurationCommand = async (
  input: DeleteInstanceAccessControlAttributeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DeleteInstanceAccessControlAttributeConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommand
 */
export const se_DeletePermissionsBoundaryFromPermissionSetCommand = async (
  input: DeletePermissionsBoundaryFromPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DeletePermissionsBoundaryFromPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_DeletePermissionsBoundaryFromPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePermissionSetCommand
 */
export const se_DeletePermissionSetCommand = async (
  input: DeletePermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DeletePermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_DeletePermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand
 */
export const se_DescribeAccountAssignmentCreationStatusCommand = async (
  input: DescribeAccountAssignmentCreationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DescribeAccountAssignmentCreationStatus",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAccountAssignmentCreationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommand
 */
export const se_DescribeAccountAssignmentDeletionStatusCommand = async (
  input: DescribeAccountAssignmentDeletionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DescribeAccountAssignmentDeletionStatus",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAccountAssignmentDeletionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommand
 */
export const se_DescribeInstanceAccessControlAttributeConfigurationCommand = async (
  input: DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DescribeInstanceAccessControlAttributeConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePermissionSetCommand
 */
export const se_DescribePermissionSetCommand = async (
  input: DescribePermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DescribePermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_DescribePermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePermissionSetProvisioningStatusCommand
 */
export const se_DescribePermissionSetProvisioningStatusCommand = async (
  input: DescribePermissionSetProvisioningStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DescribePermissionSetProvisioningStatus",
  };
  let body: any;
  body = JSON.stringify(se_DescribePermissionSetProvisioningStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommand
 */
export const se_DetachCustomerManagedPolicyReferenceFromPermissionSetCommand = async (
  input: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_DetachCustomerManagedPolicyReferenceFromPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand
 */
export const se_DetachManagedPolicyFromPermissionSetCommand = async (
  input: DetachManagedPolicyFromPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DetachManagedPolicyFromPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_DetachManagedPolicyFromPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInlinePolicyForPermissionSetCommand
 */
export const se_GetInlinePolicyForPermissionSetCommand = async (
  input: GetInlinePolicyForPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.GetInlinePolicyForPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_GetInlinePolicyForPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommand
 */
export const se_GetPermissionsBoundaryForPermissionSetCommand = async (
  input: GetPermissionsBoundaryForPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.GetPermissionsBoundaryForPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_GetPermissionsBoundaryForPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccountAssignmentCreationStatusCommand
 */
export const se_ListAccountAssignmentCreationStatusCommand = async (
  input: ListAccountAssignmentCreationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListAccountAssignmentCreationStatus",
  };
  let body: any;
  body = JSON.stringify(se_ListAccountAssignmentCreationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccountAssignmentDeletionStatusCommand
 */
export const se_ListAccountAssignmentDeletionStatusCommand = async (
  input: ListAccountAssignmentDeletionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListAccountAssignmentDeletionStatus",
  };
  let body: any;
  body = JSON.stringify(se_ListAccountAssignmentDeletionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccountAssignmentsCommand
 */
export const se_ListAccountAssignmentsCommand = async (
  input: ListAccountAssignmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListAccountAssignments",
  };
  let body: any;
  body = JSON.stringify(se_ListAccountAssignmentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccountsForProvisionedPermissionSetCommand
 */
export const se_ListAccountsForProvisionedPermissionSetCommand = async (
  input: ListAccountsForProvisionedPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListAccountsForProvisionedPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_ListAccountsForProvisionedPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommand
 */
export const se_ListCustomerManagedPolicyReferencesInPermissionSetCommand = async (
  input: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_ListCustomerManagedPolicyReferencesInPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInstancesCommand
 */
export const se_ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListInstances",
  };
  let body: any;
  body = JSON.stringify(se_ListInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListManagedPoliciesInPermissionSetCommand
 */
export const se_ListManagedPoliciesInPermissionSetCommand = async (
  input: ListManagedPoliciesInPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListManagedPoliciesInPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_ListManagedPoliciesInPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPermissionSetProvisioningStatusCommand
 */
export const se_ListPermissionSetProvisioningStatusCommand = async (
  input: ListPermissionSetProvisioningStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListPermissionSetProvisioningStatus",
  };
  let body: any;
  body = JSON.stringify(se_ListPermissionSetProvisioningStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPermissionSetsCommand
 */
export const se_ListPermissionSetsCommand = async (
  input: ListPermissionSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListPermissionSets",
  };
  let body: any;
  body = JSON.stringify(se_ListPermissionSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand
 */
export const se_ListPermissionSetsProvisionedToAccountCommand = async (
  input: ListPermissionSetsProvisionedToAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListPermissionSetsProvisionedToAccount",
  };
  let body: any;
  body = JSON.stringify(se_ListPermissionSetsProvisionedToAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ProvisionPermissionSetCommand
 */
export const se_ProvisionPermissionSetCommand = async (
  input: ProvisionPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ProvisionPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_ProvisionPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutInlinePolicyToPermissionSetCommand
 */
export const se_PutInlinePolicyToPermissionSetCommand = async (
  input: PutInlinePolicyToPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.PutInlinePolicyToPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_PutInlinePolicyToPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommand
 */
export const se_PutPermissionsBoundaryToPermissionSetCommand = async (
  input: PutPermissionsBoundaryToPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.PutPermissionsBoundaryToPermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_PutPermissionsBoundaryToPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand
 */
export const se_UpdateInstanceAccessControlAttributeConfigurationCommand = async (
  input: UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_UpdateInstanceAccessControlAttributeConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePermissionSetCommand
 */
export const se_UpdatePermissionSetCommand = async (
  input: UpdatePermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.UpdatePermissionSet",
  };
  let body: any;
  body = JSON.stringify(se_UpdatePermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommand
 */
export const de_AttachCustomerManagedPolicyReferenceToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachCustomerManagedPolicyReferenceToPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AttachCustomerManagedPolicyReferenceToPermissionSetResponse(data, context);
  const response: AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommandError
 */
const de_AttachCustomerManagedPolicyReferenceToPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1AttachManagedPolicyToPermissionSetCommand
 */
export const de_AttachManagedPolicyToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachManagedPolicyToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachManagedPolicyToPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AttachManagedPolicyToPermissionSetResponse(data, context);
  const response: AttachManagedPolicyToPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AttachManagedPolicyToPermissionSetCommandError
 */
const de_AttachManagedPolicyToPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachManagedPolicyToPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1CreateAccountAssignmentCommand
 */
export const de_CreateAccountAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAccountAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAccountAssignmentResponse(data, context);
  const response: CreateAccountAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAccountAssignmentCommandError
 */
const de_CreateAccountAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand
 */
export const de_CreateInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateInstanceAccessControlAttributeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateInstanceAccessControlAttributeConfigurationResponse(data, context);
  const response: CreateInstanceAccessControlAttributeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommandError
 */
const de_CreateInstanceAccessControlAttributeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceAccessControlAttributeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1CreatePermissionSetCommand
 */
export const de_CreatePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePermissionSetResponse(data, context);
  const response: CreatePermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePermissionSetCommandError
 */
const de_CreatePermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1DeleteAccountAssignmentCommand
 */
export const de_DeleteAccountAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAccountAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAccountAssignmentResponse(data, context);
  const response: DeleteAccountAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAccountAssignmentCommandError
 */
const de_DeleteAccountAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommand
 */
export const de_DeleteInlinePolicyFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInlinePolicyFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInlinePolicyFromPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteInlinePolicyFromPermissionSetResponse(data, context);
  const response: DeleteInlinePolicyFromPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommandError
 */
const de_DeleteInlinePolicyFromPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInlinePolicyFromPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand
 */
export const de_DeleteInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInstanceAccessControlAttributeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteInstanceAccessControlAttributeConfigurationResponse(data, context);
  const response: DeleteInstanceAccessControlAttributeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommandError
 */
const de_DeleteInstanceAccessControlAttributeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceAccessControlAttributeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommand
 */
export const de_DeletePermissionsBoundaryFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionsBoundaryFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePermissionsBoundaryFromPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeletePermissionsBoundaryFromPermissionSetResponse(data, context);
  const response: DeletePermissionsBoundaryFromPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommandError
 */
const de_DeletePermissionsBoundaryFromPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionsBoundaryFromPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1DeletePermissionSetCommand
 */
export const de_DeletePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeletePermissionSetResponse(data, context);
  const response: DeletePermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePermissionSetCommandError
 */
const de_DeletePermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand
 */
export const de_DescribeAccountAssignmentCreationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAssignmentCreationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountAssignmentCreationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountAssignmentCreationStatusResponse(data, context);
  const response: DescribeAccountAssignmentCreationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommandError
 */
const de_DescribeAccountAssignmentCreationStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAssignmentCreationStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommand
 */
export const de_DescribeAccountAssignmentDeletionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAssignmentDeletionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountAssignmentDeletionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountAssignmentDeletionStatusResponse(data, context);
  const response: DescribeAccountAssignmentDeletionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommandError
 */
const de_DescribeAccountAssignmentDeletionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAssignmentDeletionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommand
 */
export const de_DescribeInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInstanceAccessControlAttributeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInstanceAccessControlAttributeConfigurationResponse(data, context);
  const response: DescribeInstanceAccessControlAttributeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommandError
 */
const de_DescribeInstanceAccessControlAttributeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceAccessControlAttributeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1DescribePermissionSetCommand
 */
export const de_DescribePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePermissionSetResponse(data, context);
  const response: DescribePermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePermissionSetCommandError
 */
const de_DescribePermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1DescribePermissionSetProvisioningStatusCommand
 */
export const de_DescribePermissionSetProvisioningStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionSetProvisioningStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePermissionSetProvisioningStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePermissionSetProvisioningStatusResponse(data, context);
  const response: DescribePermissionSetProvisioningStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePermissionSetProvisioningStatusCommandError
 */
const de_DescribePermissionSetProvisioningStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionSetProvisioningStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommand
 */
export const de_DetachCustomerManagedPolicyReferenceFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachCustomerManagedPolicyReferenceFromPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetachCustomerManagedPolicyReferenceFromPermissionSetResponse(data, context);
  const response: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommandError
 */
const de_DetachCustomerManagedPolicyReferenceFromPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand
 */
export const de_DetachManagedPolicyFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachManagedPolicyFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachManagedPolicyFromPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetachManagedPolicyFromPermissionSetResponse(data, context);
  const response: DetachManagedPolicyFromPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetachManagedPolicyFromPermissionSetCommandError
 */
const de_DetachManagedPolicyFromPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachManagedPolicyFromPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1GetInlinePolicyForPermissionSetCommand
 */
export const de_GetInlinePolicyForPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInlinePolicyForPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInlinePolicyForPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInlinePolicyForPermissionSetResponse(data, context);
  const response: GetInlinePolicyForPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInlinePolicyForPermissionSetCommandError
 */
const de_GetInlinePolicyForPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInlinePolicyForPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommand
 */
export const de_GetPermissionsBoundaryForPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionsBoundaryForPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPermissionsBoundaryForPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPermissionsBoundaryForPermissionSetResponse(data, context);
  const response: GetPermissionsBoundaryForPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommandError
 */
const de_GetPermissionsBoundaryForPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionsBoundaryForPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1ListAccountAssignmentCreationStatusCommand
 */
export const de_ListAccountAssignmentCreationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentCreationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccountAssignmentCreationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccountAssignmentCreationStatusResponse(data, context);
  const response: ListAccountAssignmentCreationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAccountAssignmentCreationStatusCommandError
 */
const de_ListAccountAssignmentCreationStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentCreationStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1ListAccountAssignmentDeletionStatusCommand
 */
export const de_ListAccountAssignmentDeletionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentDeletionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccountAssignmentDeletionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccountAssignmentDeletionStatusResponse(data, context);
  const response: ListAccountAssignmentDeletionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAccountAssignmentDeletionStatusCommandError
 */
const de_ListAccountAssignmentDeletionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentDeletionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1ListAccountAssignmentsCommand
 */
export const de_ListAccountAssignmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccountAssignmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccountAssignmentsResponse(data, context);
  const response: ListAccountAssignmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAccountAssignmentsCommandError
 */
const de_ListAccountAssignmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1ListAccountsForProvisionedPermissionSetCommand
 */
export const de_ListAccountsForProvisionedPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsForProvisionedPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccountsForProvisionedPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccountsForProvisionedPermissionSetResponse(data, context);
  const response: ListAccountsForProvisionedPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAccountsForProvisionedPermissionSetCommandError
 */
const de_ListAccountsForProvisionedPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsForProvisionedPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommand
 */
export const de_ListCustomerManagedPolicyReferencesInPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCustomerManagedPolicyReferencesInPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCustomerManagedPolicyReferencesInPermissionSetResponse(data, context);
  const response: ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommandError
 */
const de_ListCustomerManagedPolicyReferencesInPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1ListInstancesCommand
 */
export const de_ListInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInstancesResponse(data, context);
  const response: ListInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListInstancesCommandError
 */
const de_ListInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommand
 */
export const de_ListManagedPoliciesInPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedPoliciesInPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListManagedPoliciesInPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListManagedPoliciesInPermissionSetResponse(data, context);
  const response: ListManagedPoliciesInPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommandError
 */
const de_ListManagedPoliciesInPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedPoliciesInPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1ListPermissionSetProvisioningStatusCommand
 */
export const de_ListPermissionSetProvisioningStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetProvisioningStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPermissionSetProvisioningStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPermissionSetProvisioningStatusResponse(data, context);
  const response: ListPermissionSetProvisioningStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPermissionSetProvisioningStatusCommandError
 */
const de_ListPermissionSetProvisioningStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetProvisioningStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1ListPermissionSetsCommand
 */
export const de_ListPermissionSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPermissionSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPermissionSetsResponse(data, context);
  const response: ListPermissionSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPermissionSetsCommandError
 */
const de_ListPermissionSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand
 */
export const de_ListPermissionSetsProvisionedToAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetsProvisionedToAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPermissionSetsProvisionedToAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPermissionSetsProvisionedToAccountResponse(data, context);
  const response: ListPermissionSetsProvisionedToAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPermissionSetsProvisionedToAccountCommandError
 */
const de_ListPermissionSetsProvisionedToAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetsProvisionedToAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1ProvisionPermissionSetCommand
 */
export const de_ProvisionPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ProvisionPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ProvisionPermissionSetResponse(data, context);
  const response: ProvisionPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ProvisionPermissionSetCommandError
 */
const de_ProvisionPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1PutInlinePolicyToPermissionSetCommand
 */
export const de_PutInlinePolicyToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInlinePolicyToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutInlinePolicyToPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutInlinePolicyToPermissionSetResponse(data, context);
  const response: PutInlinePolicyToPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutInlinePolicyToPermissionSetCommandError
 */
const de_PutInlinePolicyToPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInlinePolicyToPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommand
 */
export const de_PutPermissionsBoundaryToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionsBoundaryToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutPermissionsBoundaryToPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutPermissionsBoundaryToPermissionSetResponse(data, context);
  const response: PutPermissionsBoundaryToPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommandError
 */
const de_PutPermissionsBoundaryToPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionsBoundaryToPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand
 */
export const de_UpdateInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateInstanceAccessControlAttributeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateInstanceAccessControlAttributeConfigurationResponse(data, context);
  const response: UpdateInstanceAccessControlAttributeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommandError
 */
const de_UpdateInstanceAccessControlAttributeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceAccessControlAttributeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1UpdatePermissionSetCommand
 */
export const de_UpdatePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePermissionSetResponse(data, context);
  const response: UpdatePermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdatePermissionSetCommandError
 */
const de_UpdatePermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AccessControlAttribute
 */
const se_AccessControlAttribute = (input: AccessControlAttribute, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: se_AccessControlAttributeValue(input.Value, context) }),
  };
};

/**
 * serializeAws_json1_1AccessControlAttributeList
 */
const se_AccessControlAttributeList = (input: AccessControlAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AccessControlAttribute(entry, context);
    });
};

/**
 * serializeAws_json1_1AccessControlAttributeValue
 */
const se_AccessControlAttributeValue = (input: AccessControlAttributeValue, context: __SerdeContext): any => {
  return {
    ...(input.Source != null && { Source: se_AccessControlAttributeValueSourceList(input.Source, context) }),
  };
};

/**
 * serializeAws_json1_1AccessControlAttributeValueSourceList
 */
const se_AccessControlAttributeValueSourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetRequest
 */
const se_AttachCustomerManagedPolicyReferenceToPermissionSetRequest = (
  input: AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomerManagedPolicyReference != null && {
      CustomerManagedPolicyReference: se_CustomerManagedPolicyReference(input.CustomerManagedPolicyReference, context),
    }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1AttachManagedPolicyToPermissionSetRequest
 */
const se_AttachManagedPolicyToPermissionSetRequest = (
  input: AttachManagedPolicyToPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.ManagedPolicyArn != null && { ManagedPolicyArn: input.ManagedPolicyArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1CreateAccountAssignmentRequest
 */
const se_CreateAccountAssignmentRequest = (input: CreateAccountAssignmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
    ...(input.PrincipalId != null && { PrincipalId: input.PrincipalId }),
    ...(input.PrincipalType != null && { PrincipalType: input.PrincipalType }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
  };
};

/**
 * serializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationRequest
 */
const se_CreateInstanceAccessControlAttributeConfigurationRequest = (
  input: CreateInstanceAccessControlAttributeConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceAccessControlAttributeConfiguration != null && {
      InstanceAccessControlAttributeConfiguration: se_InstanceAccessControlAttributeConfiguration(
        input.InstanceAccessControlAttributeConfiguration,
        context
      ),
    }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
  };
};

/**
 * serializeAws_json1_1CreatePermissionSetRequest
 */
const se_CreatePermissionSetRequest = (input: CreatePermissionSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RelayState != null && { RelayState: input.RelayState }),
    ...(input.SessionDuration != null && { SessionDuration: input.SessionDuration }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CustomerManagedPolicyReference
 */
const se_CustomerManagedPolicyReference = (input: CustomerManagedPolicyReference, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Path != null && { Path: input.Path }),
  };
};

/**
 * serializeAws_json1_1DeleteAccountAssignmentRequest
 */
const se_DeleteAccountAssignmentRequest = (input: DeleteAccountAssignmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
    ...(input.PrincipalId != null && { PrincipalId: input.PrincipalId }),
    ...(input.PrincipalType != null && { PrincipalType: input.PrincipalType }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
  };
};

/**
 * serializeAws_json1_1DeleteInlinePolicyFromPermissionSetRequest
 */
const se_DeleteInlinePolicyFromPermissionSetRequest = (
  input: DeleteInlinePolicyFromPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationRequest
 */
const se_DeleteInstanceAccessControlAttributeConfigurationRequest = (
  input: DeleteInstanceAccessControlAttributeConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
  };
};

/**
 * serializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetRequest
 */
const se_DeletePermissionsBoundaryFromPermissionSetRequest = (
  input: DeletePermissionsBoundaryFromPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1DeletePermissionSetRequest
 */
const se_DeletePermissionSetRequest = (input: DeletePermissionSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1DescribeAccountAssignmentCreationStatusRequest
 */
const se_DescribeAccountAssignmentCreationStatusRequest = (
  input: DescribeAccountAssignmentCreationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountAssignmentCreationRequestId != null && {
      AccountAssignmentCreationRequestId: input.AccountAssignmentCreationRequestId,
    }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
  };
};

/**
 * serializeAws_json1_1DescribeAccountAssignmentDeletionStatusRequest
 */
const se_DescribeAccountAssignmentDeletionStatusRequest = (
  input: DescribeAccountAssignmentDeletionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountAssignmentDeletionRequestId != null && {
      AccountAssignmentDeletionRequestId: input.AccountAssignmentDeletionRequestId,
    }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
  };
};

/**
 * serializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationRequest
 */
const se_DescribeInstanceAccessControlAttributeConfigurationRequest = (
  input: DescribeInstanceAccessControlAttributeConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
  };
};

/**
 * serializeAws_json1_1DescribePermissionSetProvisioningStatusRequest
 */
const se_DescribePermissionSetProvisioningStatusRequest = (
  input: DescribePermissionSetProvisioningStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.ProvisionPermissionSetRequestId != null && {
      ProvisionPermissionSetRequestId: input.ProvisionPermissionSetRequestId,
    }),
  };
};

/**
 * serializeAws_json1_1DescribePermissionSetRequest
 */
const se_DescribePermissionSetRequest = (input: DescribePermissionSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetRequest
 */
const se_DetachCustomerManagedPolicyReferenceFromPermissionSetRequest = (
  input: DetachCustomerManagedPolicyReferenceFromPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomerManagedPolicyReference != null && {
      CustomerManagedPolicyReference: se_CustomerManagedPolicyReference(input.CustomerManagedPolicyReference, context),
    }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1DetachManagedPolicyFromPermissionSetRequest
 */
const se_DetachManagedPolicyFromPermissionSetRequest = (
  input: DetachManagedPolicyFromPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.ManagedPolicyArn != null && { ManagedPolicyArn: input.ManagedPolicyArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1GetInlinePolicyForPermissionSetRequest
 */
const se_GetInlinePolicyForPermissionSetRequest = (
  input: GetInlinePolicyForPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1GetPermissionsBoundaryForPermissionSetRequest
 */
const se_GetPermissionsBoundaryForPermissionSetRequest = (
  input: GetPermissionsBoundaryForPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1InstanceAccessControlAttributeConfiguration
 */
const se_InstanceAccessControlAttributeConfiguration = (
  input: InstanceAccessControlAttributeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessControlAttributes != null && {
      AccessControlAttributes: se_AccessControlAttributeList(input.AccessControlAttributes, context),
    }),
  };
};

/**
 * serializeAws_json1_1ListAccountAssignmentCreationStatusRequest
 */
const se_ListAccountAssignmentCreationStatusRequest = (
  input: ListAccountAssignmentCreationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_OperationStatusFilter(input.Filter, context) }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListAccountAssignmentDeletionStatusRequest
 */
const se_ListAccountAssignmentDeletionStatusRequest = (
  input: ListAccountAssignmentDeletionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_OperationStatusFilter(input.Filter, context) }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListAccountAssignmentsRequest
 */
const se_ListAccountAssignmentsRequest = (input: ListAccountAssignmentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1ListAccountsForProvisionedPermissionSetRequest
 */
const se_ListAccountsForProvisionedPermissionSetRequest = (
  input: ListAccountsForProvisionedPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
    ...(input.ProvisioningStatus != null && { ProvisioningStatus: input.ProvisioningStatus }),
  };
};

/**
 * serializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetRequest
 */
const se_ListCustomerManagedPolicyReferencesInPermissionSetRequest = (
  input: ListCustomerManagedPolicyReferencesInPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1ListInstancesRequest
 */
const se_ListInstancesRequest = (input: ListInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListManagedPoliciesInPermissionSetRequest
 */
const se_ListManagedPoliciesInPermissionSetRequest = (
  input: ListManagedPoliciesInPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1ListPermissionSetProvisioningStatusRequest
 */
const se_ListPermissionSetProvisioningStatusRequest = (
  input: ListPermissionSetProvisioningStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_OperationStatusFilter(input.Filter, context) }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListPermissionSetsProvisionedToAccountRequest
 */
const se_ListPermissionSetsProvisionedToAccountRequest = (
  input: ListPermissionSetsProvisionedToAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProvisioningStatus != null && { ProvisioningStatus: input.ProvisioningStatus }),
  };
};

/**
 * serializeAws_json1_1ListPermissionSetsRequest
 */
const se_ListPermissionSetsRequest = (input: ListPermissionSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1OperationStatusFilter
 */
const se_OperationStatusFilter = (input: OperationStatusFilter, context: __SerdeContext): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1PermissionsBoundary
 */
const se_PermissionsBoundary = (input: PermissionsBoundary, context: __SerdeContext): any => {
  return {
    ...(input.CustomerManagedPolicyReference != null && {
      CustomerManagedPolicyReference: se_CustomerManagedPolicyReference(input.CustomerManagedPolicyReference, context),
    }),
    ...(input.ManagedPolicyArn != null && { ManagedPolicyArn: input.ManagedPolicyArn }),
  };
};

/**
 * serializeAws_json1_1ProvisionPermissionSetRequest
 */
const se_ProvisionPermissionSetRequest = (input: ProvisionPermissionSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
  };
};

/**
 * serializeAws_json1_1PutInlinePolicyToPermissionSetRequest
 */
const se_PutInlinePolicyToPermissionSetRequest = (
  input: PutInlinePolicyToPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InlinePolicy != null && { InlinePolicy: input.InlinePolicy }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

/**
 * serializeAws_json1_1PutPermissionsBoundaryToPermissionSetRequest
 */
const se_PutPermissionsBoundaryToPermissionSetRequest = (
  input: PutPermissionsBoundaryToPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
    ...(input.PermissionsBoundary != null && {
      PermissionsBoundary: se_PermissionsBoundary(input.PermissionsBoundary, context),
    }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationRequest
 */
const se_UpdateInstanceAccessControlAttributeConfigurationRequest = (
  input: UpdateInstanceAccessControlAttributeConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceAccessControlAttributeConfiguration != null && {
      InstanceAccessControlAttributeConfiguration: se_InstanceAccessControlAttributeConfiguration(
        input.InstanceAccessControlAttributeConfiguration,
        context
      ),
    }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
  };
};

/**
 * serializeAws_json1_1UpdatePermissionSetRequest
 */
const se_UpdatePermissionSetRequest = (input: UpdatePermissionSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
    ...(input.RelayState != null && { RelayState: input.RelayState }),
    ...(input.SessionDuration != null && { SessionDuration: input.SessionDuration }),
  };
};

/**
 * deserializeAws_json1_1AccessControlAttribute
 */
const de_AccessControlAttribute = (output: any, context: __SerdeContext): AccessControlAttribute => {
  return {
    Key: __expectString(output.Key),
    Value: output.Value != null ? de_AccessControlAttributeValue(output.Value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AccessControlAttributeList
 */
const de_AccessControlAttributeList = (output: any, context: __SerdeContext): AccessControlAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccessControlAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AccessControlAttributeValue
 */
const de_AccessControlAttributeValue = (output: any, context: __SerdeContext): AccessControlAttributeValue => {
  return {
    Source: output.Source != null ? de_AccessControlAttributeValueSourceList(output.Source, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AccessControlAttributeValueSourceList
 */
const de_AccessControlAttributeValueSourceList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AccountAssignment
 */
const de_AccountAssignment = (output: any, context: __SerdeContext): AccountAssignment => {
  return {
    AccountId: __expectString(output.AccountId),
    PermissionSetArn: __expectString(output.PermissionSetArn),
    PrincipalId: __expectString(output.PrincipalId),
    PrincipalType: __expectString(output.PrincipalType),
  } as any;
};

/**
 * deserializeAws_json1_1AccountAssignmentList
 */
const de_AccountAssignmentList = (output: any, context: __SerdeContext): AccountAssignment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountAssignment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AccountAssignmentOperationStatus
 */
const de_AccountAssignmentOperationStatus = (
  output: any,
  context: __SerdeContext
): AccountAssignmentOperationStatus => {
  return {
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    PermissionSetArn: __expectString(output.PermissionSetArn),
    PrincipalId: __expectString(output.PrincipalId),
    PrincipalType: __expectString(output.PrincipalType),
    RequestId: __expectString(output.RequestId),
    Status: __expectString(output.Status),
    TargetId: __expectString(output.TargetId),
    TargetType: __expectString(output.TargetType),
  } as any;
};

/**
 * deserializeAws_json1_1AccountAssignmentOperationStatusList
 */
const de_AccountAssignmentOperationStatusList = (
  output: any,
  context: __SerdeContext
): AccountAssignmentOperationStatusMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountAssignmentOperationStatusMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AccountAssignmentOperationStatusMetadata
 */
const de_AccountAssignmentOperationStatusMetadata = (
  output: any,
  context: __SerdeContext
): AccountAssignmentOperationStatusMetadata => {
  return {
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    RequestId: __expectString(output.RequestId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1AccountList
 */
const de_AccountList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetResponse
 */
const de_AttachCustomerManagedPolicyReferenceToPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): AttachCustomerManagedPolicyReferenceToPermissionSetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AttachedManagedPolicy
 */
const de_AttachedManagedPolicy = (output: any, context: __SerdeContext): AttachedManagedPolicy => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1AttachedManagedPolicyList
 */
const de_AttachedManagedPolicyList = (output: any, context: __SerdeContext): AttachedManagedPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttachedManagedPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttachManagedPolicyToPermissionSetResponse
 */
const de_AttachManagedPolicyToPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): AttachManagedPolicyToPermissionSetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateAccountAssignmentResponse
 */
const de_CreateAccountAssignmentResponse = (output: any, context: __SerdeContext): CreateAccountAssignmentResponse => {
  return {
    AccountAssignmentCreationStatus:
      output.AccountAssignmentCreationStatus != null
        ? de_AccountAssignmentOperationStatus(output.AccountAssignmentCreationStatus, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationResponse
 */
const de_CreateInstanceAccessControlAttributeConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateInstanceAccessControlAttributeConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreatePermissionSetResponse
 */
const de_CreatePermissionSetResponse = (output: any, context: __SerdeContext): CreatePermissionSetResponse => {
  return {
    PermissionSet: output.PermissionSet != null ? de_PermissionSet(output.PermissionSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomerManagedPolicyReference
 */
const de_CustomerManagedPolicyReference = (output: any, context: __SerdeContext): CustomerManagedPolicyReference => {
  return {
    Name: __expectString(output.Name),
    Path: __expectString(output.Path),
  } as any;
};

/**
 * deserializeAws_json1_1CustomerManagedPolicyReferenceList
 */
const de_CustomerManagedPolicyReferenceList = (
  output: any,
  context: __SerdeContext
): CustomerManagedPolicyReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomerManagedPolicyReference(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeleteAccountAssignmentResponse
 */
const de_DeleteAccountAssignmentResponse = (output: any, context: __SerdeContext): DeleteAccountAssignmentResponse => {
  return {
    AccountAssignmentDeletionStatus:
      output.AccountAssignmentDeletionStatus != null
        ? de_AccountAssignmentOperationStatus(output.AccountAssignmentDeletionStatus, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteInlinePolicyFromPermissionSetResponse
 */
const de_DeleteInlinePolicyFromPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteInlinePolicyFromPermissionSetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationResponse
 */
const de_DeleteInstanceAccessControlAttributeConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteInstanceAccessControlAttributeConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetResponse
 */
const de_DeletePermissionsBoundaryFromPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): DeletePermissionsBoundaryFromPermissionSetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeletePermissionSetResponse
 */
const de_DeletePermissionSetResponse = (output: any, context: __SerdeContext): DeletePermissionSetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeAccountAssignmentCreationStatusResponse
 */
const de_DescribeAccountAssignmentCreationStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccountAssignmentCreationStatusResponse => {
  return {
    AccountAssignmentCreationStatus:
      output.AccountAssignmentCreationStatus != null
        ? de_AccountAssignmentOperationStatus(output.AccountAssignmentCreationStatus, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusResponse
 */
const de_DescribeAccountAssignmentDeletionStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccountAssignmentDeletionStatusResponse => {
  return {
    AccountAssignmentDeletionStatus:
      output.AccountAssignmentDeletionStatus != null
        ? de_AccountAssignmentOperationStatus(output.AccountAssignmentDeletionStatus, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationResponse
 */
const de_DescribeInstanceAccessControlAttributeConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeInstanceAccessControlAttributeConfigurationResponse => {
  return {
    InstanceAccessControlAttributeConfiguration:
      output.InstanceAccessControlAttributeConfiguration != null
        ? de_InstanceAccessControlAttributeConfiguration(output.InstanceAccessControlAttributeConfiguration, context)
        : undefined,
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
  } as any;
};

/**
 * deserializeAws_json1_1DescribePermissionSetProvisioningStatusResponse
 */
const de_DescribePermissionSetProvisioningStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribePermissionSetProvisioningStatusResponse => {
  return {
    PermissionSetProvisioningStatus:
      output.PermissionSetProvisioningStatus != null
        ? de_PermissionSetProvisioningStatus(output.PermissionSetProvisioningStatus, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribePermissionSetResponse
 */
const de_DescribePermissionSetResponse = (output: any, context: __SerdeContext): DescribePermissionSetResponse => {
  return {
    PermissionSet: output.PermissionSet != null ? de_PermissionSet(output.PermissionSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetResponse
 */
const de_DetachCustomerManagedPolicyReferenceFromPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): DetachCustomerManagedPolicyReferenceFromPermissionSetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DetachManagedPolicyFromPermissionSetResponse
 */
const de_DetachManagedPolicyFromPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): DetachManagedPolicyFromPermissionSetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1GetInlinePolicyForPermissionSetResponse
 */
const de_GetInlinePolicyForPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): GetInlinePolicyForPermissionSetResponse => {
  return {
    InlinePolicy: __expectString(output.InlinePolicy),
  } as any;
};

/**
 * deserializeAws_json1_1GetPermissionsBoundaryForPermissionSetResponse
 */
const de_GetPermissionsBoundaryForPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): GetPermissionsBoundaryForPermissionSetResponse => {
  return {
    PermissionsBoundary:
      output.PermissionsBoundary != null ? de_PermissionsBoundary(output.PermissionsBoundary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceAccessControlAttributeConfiguration
 */
const de_InstanceAccessControlAttributeConfiguration = (
  output: any,
  context: __SerdeContext
): InstanceAccessControlAttributeConfiguration => {
  return {
    AccessControlAttributes:
      output.AccessControlAttributes != null
        ? de_AccessControlAttributeList(output.AccessControlAttributes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceList
 */
const de_InstanceList = (output: any, context: __SerdeContext): InstanceMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceMetadata
 */
const de_InstanceMetadata = (output: any, context: __SerdeContext): InstanceMetadata => {
  return {
    IdentityStoreId: __expectString(output.IdentityStoreId),
    InstanceArn: __expectString(output.InstanceArn),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAccountAssignmentCreationStatusResponse
 */
const de_ListAccountAssignmentCreationStatusResponse = (
  output: any,
  context: __SerdeContext
): ListAccountAssignmentCreationStatusResponse => {
  return {
    AccountAssignmentsCreationStatus:
      output.AccountAssignmentsCreationStatus != null
        ? de_AccountAssignmentOperationStatusList(output.AccountAssignmentsCreationStatus, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListAccountAssignmentDeletionStatusResponse
 */
const de_ListAccountAssignmentDeletionStatusResponse = (
  output: any,
  context: __SerdeContext
): ListAccountAssignmentDeletionStatusResponse => {
  return {
    AccountAssignmentsDeletionStatus:
      output.AccountAssignmentsDeletionStatus != null
        ? de_AccountAssignmentOperationStatusList(output.AccountAssignmentsDeletionStatus, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListAccountAssignmentsResponse
 */
const de_ListAccountAssignmentsResponse = (output: any, context: __SerdeContext): ListAccountAssignmentsResponse => {
  return {
    AccountAssignments:
      output.AccountAssignments != null ? de_AccountAssignmentList(output.AccountAssignments, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListAccountsForProvisionedPermissionSetResponse
 */
const de_ListAccountsForProvisionedPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): ListAccountsForProvisionedPermissionSetResponse => {
  return {
    AccountIds: output.AccountIds != null ? de_AccountList(output.AccountIds, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetResponse
 */
const de_ListCustomerManagedPolicyReferencesInPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): ListCustomerManagedPolicyReferencesInPermissionSetResponse => {
  return {
    CustomerManagedPolicyReferences:
      output.CustomerManagedPolicyReferences != null
        ? de_CustomerManagedPolicyReferenceList(output.CustomerManagedPolicyReferences, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListInstancesResponse
 */
const de_ListInstancesResponse = (output: any, context: __SerdeContext): ListInstancesResponse => {
  return {
    Instances: output.Instances != null ? de_InstanceList(output.Instances, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListManagedPoliciesInPermissionSetResponse
 */
const de_ListManagedPoliciesInPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): ListManagedPoliciesInPermissionSetResponse => {
  return {
    AttachedManagedPolicies:
      output.AttachedManagedPolicies != null
        ? de_AttachedManagedPolicyList(output.AttachedManagedPolicies, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListPermissionSetProvisioningStatusResponse
 */
const de_ListPermissionSetProvisioningStatusResponse = (
  output: any,
  context: __SerdeContext
): ListPermissionSetProvisioningStatusResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PermissionSetsProvisioningStatus:
      output.PermissionSetsProvisioningStatus != null
        ? de_PermissionSetProvisioningStatusList(output.PermissionSetsProvisioningStatus, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPermissionSetsProvisionedToAccountResponse
 */
const de_ListPermissionSetsProvisionedToAccountResponse = (
  output: any,
  context: __SerdeContext
): ListPermissionSetsProvisionedToAccountResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PermissionSets: output.PermissionSets != null ? de_PermissionSetList(output.PermissionSets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPermissionSetsResponse
 */
const de_ListPermissionSetsResponse = (output: any, context: __SerdeContext): ListPermissionSetsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PermissionSets: output.PermissionSets != null ? de_PermissionSetList(output.PermissionSets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PermissionsBoundary
 */
const de_PermissionsBoundary = (output: any, context: __SerdeContext): PermissionsBoundary => {
  return {
    CustomerManagedPolicyReference:
      output.CustomerManagedPolicyReference != null
        ? de_CustomerManagedPolicyReference(output.CustomerManagedPolicyReference, context)
        : undefined,
    ManagedPolicyArn: __expectString(output.ManagedPolicyArn),
  } as any;
};

/**
 * deserializeAws_json1_1PermissionSet
 */
const de_PermissionSet = (output: any, context: __SerdeContext): PermissionSet => {
  return {
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    PermissionSetArn: __expectString(output.PermissionSetArn),
    RelayState: __expectString(output.RelayState),
    SessionDuration: __expectString(output.SessionDuration),
  } as any;
};

/**
 * deserializeAws_json1_1PermissionSetList
 */
const de_PermissionSetList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1PermissionSetProvisioningStatus
 */
const de_PermissionSetProvisioningStatus = (output: any, context: __SerdeContext): PermissionSetProvisioningStatus => {
  return {
    AccountId: __expectString(output.AccountId),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    PermissionSetArn: __expectString(output.PermissionSetArn),
    RequestId: __expectString(output.RequestId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1PermissionSetProvisioningStatusList
 */
const de_PermissionSetProvisioningStatusList = (
  output: any,
  context: __SerdeContext
): PermissionSetProvisioningStatusMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PermissionSetProvisioningStatusMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PermissionSetProvisioningStatusMetadata
 */
const de_PermissionSetProvisioningStatusMetadata = (
  output: any,
  context: __SerdeContext
): PermissionSetProvisioningStatusMetadata => {
  return {
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    RequestId: __expectString(output.RequestId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ProvisionPermissionSetResponse
 */
const de_ProvisionPermissionSetResponse = (output: any, context: __SerdeContext): ProvisionPermissionSetResponse => {
  return {
    PermissionSetProvisioningStatus:
      output.PermissionSetProvisioningStatus != null
        ? de_PermissionSetProvisioningStatus(output.PermissionSetProvisioningStatus, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutInlinePolicyToPermissionSetResponse
 */
const de_PutInlinePolicyToPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): PutInlinePolicyToPermissionSetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutPermissionsBoundaryToPermissionSetResponse
 */
const de_PutPermissionsBoundaryToPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): PutPermissionsBoundaryToPermissionSetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
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
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationResponse
 */
const de_UpdateInstanceAccessControlAttributeConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateInstanceAccessControlAttributeConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdatePermissionSetResponse
 */
const de_UpdatePermissionSetResponse = (output: any, context: __SerdeContext): UpdatePermissionSetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

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
