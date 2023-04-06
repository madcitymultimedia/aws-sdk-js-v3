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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DescribeAlarmsInput, DescribeAlarmsOutput } from "../models/models_0";
import { de_DescribeAlarmsCommand, se_DescribeAlarmsCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeAlarmsCommand}.
 */
export interface DescribeAlarmsCommandInput extends DescribeAlarmsInput {}
/**
 * @public
 *
 * The output of {@link DescribeAlarmsCommand}.
 */
export interface DescribeAlarmsCommandOutput extends DescribeAlarmsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm
 * 			name, the alarm state, or a prefix for any action.</p>
 *          <p>To use this operation and return information about composite alarms, you must be signed on with
 * 		the <code>cloudwatch:DescribeAlarms</code> permission that is scoped to <code>*</code>. You can't return information
 * 			about composite alarms if your <code>cloudwatch:DescribeAlarms</code> permission has a narrower scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAlarmsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAlarmsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // DescribeAlarmsInput
 *   AlarmNames: [ // AlarmNames
 *     "STRING_VALUE",
 *   ],
 *   AlarmNamePrefix: "STRING_VALUE",
 *   AlarmTypes: [ // AlarmTypes
 *     "CompositeAlarm" || "MetricAlarm",
 *   ],
 *   ChildrenOfAlarmName: "STRING_VALUE",
 *   ParentsOfAlarmName: "STRING_VALUE",
 *   StateValue: "OK" || "ALARM" || "INSUFFICIENT_DATA",
 *   ActionPrefix: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAlarmsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeAlarmsCommandInput - {@link DescribeAlarmsCommandInput}
 * @returns {@link DescribeAlarmsCommandOutput}
 * @see {@link DescribeAlarmsCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The next token specified is invalid.</p>
 *
 *
 */
export class DescribeAlarmsCommand extends $Command<
  DescribeAlarmsCommandInput,
  DescribeAlarmsCommandOutput,
  CloudWatchClientResolvedConfig
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
  constructor(readonly input: DescribeAlarmsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAlarmsCommandInput, DescribeAlarmsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAlarmsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DescribeAlarmsCommand";
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
  private serialize(input: DescribeAlarmsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAlarmsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAlarmsCommandOutput> {
    return de_DescribeAlarmsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
