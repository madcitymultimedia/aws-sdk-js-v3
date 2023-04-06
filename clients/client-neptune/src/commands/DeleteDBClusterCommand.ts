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

import { DeleteDBClusterMessage, DeleteDBClusterResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_DeleteDBClusterCommand, se_DeleteDBClusterCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DeleteDBClusterCommand}.
 */
export interface DeleteDBClusterCommandInput extends DeleteDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBClusterCommand}.
 */
export interface DeleteDBClusterCommandOutput extends DeleteDBClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a
 *       DB cluster, all automated backups for that DB cluster are deleted and can't be recovered.
 *       Manual DB cluster snapshots of the specified DB cluster are not deleted.</p>
 *          <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled.  To
 *       delete it, you must first set its <code>DeletionProtection</code> field to
 *       <code>False</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // DeleteDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   SkipFinalSnapshot: true || false,
 *   FinalDBSnapshotIdentifier: "STRING_VALUE",
 * };
 * const command = new DeleteDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteDBClusterCommandInput - {@link DeleteDBClusterCommandInput}
 * @returns {@link DeleteDBClusterCommandOutput}
 * @see {@link DeleteDBClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterSnapshotAlreadyExistsFault} (client fault)
 *  <p>User already has a DB cluster snapshot with the given identifier.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value is not a valid DB cluster snapshot state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The DB cluster is not in a valid state.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>Request would result in user exceeding the allowed number of DB snapshots.</p>
 *
 *
 */
export class DeleteDBClusterCommand extends $Command<
  DeleteDBClusterCommandInput,
  DeleteDBClusterCommandOutput,
  NeptuneClientResolvedConfig
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
  constructor(readonly input: DeleteDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DeleteDBClusterCommand";
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
  private serialize(input: DeleteDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDBClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBClusterCommandOutput> {
    return de_DeleteDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
