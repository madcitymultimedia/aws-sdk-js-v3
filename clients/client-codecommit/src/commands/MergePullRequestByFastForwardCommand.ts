// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergePullRequestByFastForwardInput, MergePullRequestByFastForwardOutput } from "../models/models_1";
import {
  de_MergePullRequestByFastForwardCommand,
  se_MergePullRequestByFastForwardCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link MergePullRequestByFastForwardCommand}.
 */
export interface MergePullRequestByFastForwardCommandInput extends MergePullRequestByFastForwardInput {}
/**
 * @public
 *
 * The output of {@link MergePullRequestByFastForwardCommand}.
 */
export interface MergePullRequestByFastForwardCommandOutput
  extends MergePullRequestByFastForwardOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Attempts to merge the source commit of a pull request into the specified destination
 *             branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergePullRequestByFastForwardCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergePullRequestByFastForwardCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // MergePullRequestByFastForwardInput
 *   pullRequestId: "STRING_VALUE", // required
 *   repositoryName: "STRING_VALUE", // required
 *   sourceCommitId: "STRING_VALUE",
 * };
 * const command = new MergePullRequestByFastForwardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param MergePullRequestByFastForwardCommandInput - {@link MergePullRequestByFastForwardCommandInput}
 * @returns {@link MergePullRequestByFastForwardCommandOutput}
 * @see {@link MergePullRequestByFastForwardCommandInput} for command's `input` shape.
 * @see {@link MergePullRequestByFastForwardCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ConcurrentReferenceUpdateException} (client fault)
 *  <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *  <p>An encryption integrity check failed.</p>
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *  <p>An encryption key could not be accessed.</p>
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *  <p>The encryption key is disabled.</p>
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *  <p>No encryption key was found.</p>
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *  <p>The encryption key is not available.</p>
 *
 * @throws {@link InvalidCommitIdException} (client fault)
 *  <p>The specified commit ID is not valid.</p>
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *  <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *
 *         <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link ManualMergeRequiredException} (client fault)
 *  <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
 *
 * @throws {@link PullRequestAlreadyClosedException} (client fault)
 *  <p>The pull request status cannot be updated because it is already closed.</p>
 *
 * @throws {@link PullRequestApprovalRulesNotSatisfiedException} (client fault)
 *  <p>The pull request cannot be merged because one or more approval rules applied to the pull request have conditions that have not been met.</p>
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *  <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *  <p>A pull request ID is required, but none was provided.</p>
 *
 * @throws {@link ReferenceDoesNotExistException} (client fault)
 *  <p>The specified reference does not exist. You must provide a full commit ID.</p>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link RepositoryNotAssociatedWithPullRequestException} (client fault)
 *  <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
 *
 * @throws {@link TipOfSourceReferenceIsDifferentException} (client fault)
 *  <p>The tip of the source branch in the destination repository does not match the tip of the source branch specified in your request.
 *             The pull request might have been updated. Make sure that you have the latest changes.</p>
 *
 *
 */
export class MergePullRequestByFastForwardCommand extends $Command<
  MergePullRequestByFastForwardCommandInput,
  MergePullRequestByFastForwardCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: MergePullRequestByFastForwardCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MergePullRequestByFastForwardCommandInput, MergePullRequestByFastForwardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, MergePullRequestByFastForwardCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "MergePullRequestByFastForwardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: MergePullRequestByFastForwardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_MergePullRequestByFastForwardCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MergePullRequestByFastForwardCommandOutput> {
    return de_MergePullRequestByFastForwardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
