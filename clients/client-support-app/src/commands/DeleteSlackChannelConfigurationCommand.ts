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

import { DeleteSlackChannelConfigurationRequest, DeleteSlackChannelConfigurationResult } from "../models/models_0";
import {
  de_DeleteSlackChannelConfigurationCommand,
  se_DeleteSlackChannelConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupportAppClientResolvedConfig } from "../SupportAppClient";

/**
 * @public
 *
 * The input for {@link DeleteSlackChannelConfigurationCommand}.
 */
export interface DeleteSlackChannelConfigurationCommandInput extends DeleteSlackChannelConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSlackChannelConfigurationCommand}.
 */
export interface DeleteSlackChannelConfigurationCommandOutput
  extends DeleteSlackChannelConfigurationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't
 *       delete your Slack channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, DeleteSlackChannelConfigurationCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, DeleteSlackChannelConfigurationCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * const client = new SupportAppClient(config);
 * const input = { // DeleteSlackChannelConfigurationRequest
 *   teamId: "STRING_VALUE", // required
 *   channelId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSlackChannelConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteSlackChannelConfigurationCommandInput - {@link DeleteSlackChannelConfigurationCommandInput}
 * @returns {@link DeleteSlackChannelConfigurationCommandOutput}
 * @see {@link DeleteSlackChannelConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSlackChannelConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SupportAppClientResolvedConfig | config} for SupportAppClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has a conflict. For example, you might receive this error if you try the
 *       following:</p>
 *          <ul>
 *             <li>
 *                <p>Add, update, or delete a Slack channel configuration before you add a Slack workspace
 *           to your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>Add a Slack channel configuration that already exists in your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>Delete a Slack channel configuration for a live chat channel.</p>
 *             </li>
 *             <li>
 *                <p>Delete a Slack workspace from your Amazon Web Services account that has an active live chat
 *           channel.</p>
 *             </li>
 *             <li>
 *                <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API from an Amazon Web Services account
 *           that doesn't belong to an organization.</p>
 *             </li>
 *             <li>
 *                <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API from a member account,
 *           but the management account hasn't registered that workspace yet for the
 *           organization.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource is missing or doesn't exist, such as an account alias, Slack
 *       channel configuration, or Slack workspace configuration.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your request input doesn't meet the constraints that the Amazon Web Services Support App specifies.</p>
 *
 *
 */
export class DeleteSlackChannelConfigurationCommand extends $Command<
  DeleteSlackChannelConfigurationCommandInput,
  DeleteSlackChannelConfigurationCommandOutput,
  SupportAppClientResolvedConfig
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
  constructor(readonly input: DeleteSlackChannelConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportAppClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSlackChannelConfigurationCommandInput, DeleteSlackChannelConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSlackChannelConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportAppClient";
    const commandName = "DeleteSlackChannelConfigurationCommand";
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
  private serialize(
    input: DeleteSlackChannelConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteSlackChannelConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSlackChannelConfigurationCommandOutput> {
    return de_DeleteSlackChannelConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
