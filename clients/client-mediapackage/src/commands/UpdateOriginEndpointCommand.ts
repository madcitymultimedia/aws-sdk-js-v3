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

import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { UpdateOriginEndpointRequest, UpdateOriginEndpointResponse } from "../models/models_0";
import { de_UpdateOriginEndpointCommand, se_UpdateOriginEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateOriginEndpointCommand}.
 */
export interface UpdateOriginEndpointCommandInput extends UpdateOriginEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOriginEndpointCommand}.
 */
export interface UpdateOriginEndpointCommandOutput extends UpdateOriginEndpointResponse, __MetadataBearer {}

/**
 * @public
 * Updates an existing OriginEndpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, UpdateOriginEndpointCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, UpdateOriginEndpointCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const input = { // UpdateOriginEndpointRequest
 *   Authorization: { // Authorization
 *     CdnIdentifierSecret: "STRING_VALUE", // required
 *     SecretsRoleArn: "STRING_VALUE", // required
 *   },
 *   CmafPackage: { // CmafPackageCreateOrUpdateParameters
 *     Encryption: { // CmafEncryption
 *       ConstantInitializationVector: "STRING_VALUE",
 *       EncryptionMethod: "SAMPLE_AES" || "AES_CTR",
 *       KeyRotationIntervalSeconds: Number("int"),
 *       SpekeKeyProvider: { // SpekeKeyProvider
 *         CertificateArn: "STRING_VALUE",
 *         EncryptionContractConfiguration: { // EncryptionContractConfiguration
 *           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 *           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 *         },
 *         ResourceId: "STRING_VALUE", // required
 *         RoleArn: "STRING_VALUE", // required
 *         SystemIds: [ // __listOf__string // required
 *           "STRING_VALUE",
 *         ],
 *         Url: "STRING_VALUE", // required
 *       },
 *     },
 *     HlsManifests: [ // __listOfHlsManifestCreateOrUpdateParameters
 *       { // HlsManifestCreateOrUpdateParameters
 *         AdMarkers: "NONE" || "SCTE35_ENHANCED" || "PASSTHROUGH" || "DATERANGE",
 *         AdTriggers: [ // AdTriggers
 *           "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
 *         ],
 *         AdsOnDeliveryRestrictions: "NONE" || "RESTRICTED" || "UNRESTRICTED" || "BOTH",
 *         Id: "STRING_VALUE", // required
 *         IncludeIframeOnlyStream: true || false,
 *         ManifestName: "STRING_VALUE",
 *         PlaylistType: "NONE" || "EVENT" || "VOD",
 *         PlaylistWindowSeconds: Number("int"),
 *         ProgramDateTimeIntervalSeconds: Number("int"),
 *       },
 *     ],
 *     SegmentDurationSeconds: Number("int"),
 *     SegmentPrefix: "STRING_VALUE",
 *     StreamSelection: { // StreamSelection
 *       MaxVideoBitsPerSecond: Number("int"),
 *       MinVideoBitsPerSecond: Number("int"),
 *       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 *     },
 *   },
 *   DashPackage: { // DashPackage
 *     AdTriggers: [
 *       "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
 *     ],
 *     AdsOnDeliveryRestrictions: "NONE" || "RESTRICTED" || "UNRESTRICTED" || "BOTH",
 *     Encryption: { // DashEncryption
 *       KeyRotationIntervalSeconds: Number("int"),
 *       SpekeKeyProvider: {
 *         CertificateArn: "STRING_VALUE",
 *         EncryptionContractConfiguration: {
 *           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 *           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 *         },
 *         ResourceId: "STRING_VALUE", // required
 *         RoleArn: "STRING_VALUE", // required
 *         SystemIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         Url: "STRING_VALUE", // required
 *       },
 *     },
 *     IncludeIframeOnlyStream: true || false,
 *     ManifestLayout: "FULL" || "COMPACT",
 *     ManifestWindowSeconds: Number("int"),
 *     MinBufferTimeSeconds: Number("int"),
 *     MinUpdatePeriodSeconds: Number("int"),
 *     PeriodTriggers: [ // __listOf__PeriodTriggersElement
 *       "ADS",
 *     ],
 *     Profile: "NONE" || "HBBTV_1_5" || "HYBRIDCAST" || "DVB_DASH_2014",
 *     SegmentDurationSeconds: Number("int"),
 *     SegmentTemplateFormat: "NUMBER_WITH_TIMELINE" || "TIME_WITH_TIMELINE" || "NUMBER_WITH_DURATION",
 *     StreamSelection: {
 *       MaxVideoBitsPerSecond: Number("int"),
 *       MinVideoBitsPerSecond: Number("int"),
 *       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 *     },
 *     SuggestedPresentationDelaySeconds: Number("int"),
 *     UtcTiming: "NONE" || "HTTP-HEAD" || "HTTP-ISO" || "HTTP-XSDATE",
 *     UtcTimingUri: "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 *   HlsPackage: { // HlsPackage
 *     AdMarkers: "NONE" || "SCTE35_ENHANCED" || "PASSTHROUGH" || "DATERANGE",
 *     AdTriggers: [
 *       "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
 *     ],
 *     AdsOnDeliveryRestrictions: "NONE" || "RESTRICTED" || "UNRESTRICTED" || "BOTH",
 *     Encryption: { // HlsEncryption
 *       ConstantInitializationVector: "STRING_VALUE",
 *       EncryptionMethod: "AES_128" || "SAMPLE_AES",
 *       KeyRotationIntervalSeconds: Number("int"),
 *       RepeatExtXKey: true || false,
 *       SpekeKeyProvider: {
 *         CertificateArn: "STRING_VALUE",
 *         EncryptionContractConfiguration: {
 *           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 *           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 *         },
 *         ResourceId: "STRING_VALUE", // required
 *         RoleArn: "STRING_VALUE", // required
 *         SystemIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         Url: "STRING_VALUE", // required
 *       },
 *     },
 *     IncludeDvbSubtitles: true || false,
 *     IncludeIframeOnlyStream: true || false,
 *     PlaylistType: "NONE" || "EVENT" || "VOD",
 *     PlaylistWindowSeconds: Number("int"),
 *     ProgramDateTimeIntervalSeconds: Number("int"),
 *     SegmentDurationSeconds: Number("int"),
 *     StreamSelection: {
 *       MaxVideoBitsPerSecond: Number("int"),
 *       MinVideoBitsPerSecond: Number("int"),
 *       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 *     },
 *     UseAudioRenditionGroup: true || false,
 *   },
 *   Id: "STRING_VALUE", // required
 *   ManifestName: "STRING_VALUE",
 *   MssPackage: { // MssPackage
 *     Encryption: { // MssEncryption
 *       SpekeKeyProvider: {
 *         CertificateArn: "STRING_VALUE",
 *         EncryptionContractConfiguration: {
 *           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 *           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 *         },
 *         ResourceId: "STRING_VALUE", // required
 *         RoleArn: "STRING_VALUE", // required
 *         SystemIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         Url: "STRING_VALUE", // required
 *       },
 *     },
 *     ManifestWindowSeconds: Number("int"),
 *     SegmentDurationSeconds: Number("int"),
 *     StreamSelection: {
 *       MaxVideoBitsPerSecond: Number("int"),
 *       MinVideoBitsPerSecond: Number("int"),
 *       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 *     },
 *   },
 *   Origination: "ALLOW" || "DENY",
 *   StartoverWindowSeconds: Number("int"),
 *   TimeDelaySeconds: Number("int"),
 *   Whitelist: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateOriginEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateOriginEndpointCommandInput - {@link UpdateOriginEndpointCommandInput}
 * @returns {@link UpdateOriginEndpointCommandOutput}
 * @see {@link UpdateOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for MediaPackageClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 *
 */
export class UpdateOriginEndpointCommand extends $Command<
  UpdateOriginEndpointCommandInput,
  UpdateOriginEndpointCommandOutput,
  MediaPackageClientResolvedConfig
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
  constructor(readonly input: UpdateOriginEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateOriginEndpointCommandInput, UpdateOriginEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateOriginEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "UpdateOriginEndpointCommand";
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
  private serialize(input: UpdateOriginEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateOriginEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateOriginEndpointCommandOutput> {
    return de_UpdateOriginEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
