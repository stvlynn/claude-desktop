// Restored from ref/.vite/renderer/buddy_window/assets/BuddyWindow-CzbBlukH.js

import {
  type DragEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useIntl } from "react-intl";
import {
  getBuddyApi,
  getBuddyFileBridge,
  type BuddyConnectionStatus,
  type BuddyDeviceStatus,
  type BuddyDiscoveredDevice,
  type BuddyPreview,
} from "../../shared/api/claude-desktop-api";
import { FormattedMessage } from "../../shared/i18n/formatted-message";
import { classNames } from "../../shared/lib/class-names";
import { Button } from "../../shared/ui/button";

declare const process: {
  platform: string;
};

const mutedTextStyle = { color: "var(--ink-dim)" };
const headerPaddingClassName =
  process.platform === "darwin" ? "pl-[83px]" : "pl-5";
const buddyRepositoryUrl = "https://github.com/anthropics/claude-desktop-buddy";

type UploadProgress = {
  className: "" | "err" | "ok";
  message: string;
  percent: number;
};

function linkBuddyRepository(chunks: ReactNode[]) {
  return (
    <a href={buddyRepositoryUrl} target="_blank" rel="noreferrer">
      {chunks}
    </a>
  );
}

function formatUptime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return hours > 0
    ? `${hours}h${String(minutes).padStart(2, "0")}m`
    : `${minutes}m`;
}

type StatRowProps = {
  label: ReactNode;
  tone?: string;
  value: ReactNode;
};

function StatRow({ label, tone, value }: StatRowProps) {
  return (
    <div className="flex justify-between py-[5px]">
      <span style={mutedTextStyle}>{label}</span>
      <span className="tabular-nums" style={tone ? { color: tone } : undefined}>
        {value}
      </span>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div
      className="text-[10px] tracking-wider mt-2.5 mb-0.5"
      style={mutedTextStyle}
    >
      {children}
    </div>
  );
}

function BuddyPreviewPane({ preview }: { preview: BuddyPreview | null }) {
  let content: ReactNode;

  if (preview?.kind === "gif" && preview.dataUrl) {
    content = <img src={preview.dataUrl} alt="" />;
  } else if (preview?.kind === "text" && preview.frames?.length) {
    content = (
      <div
        className="font-mono text-[10px] whitespace-pre tracking-[0.02em]"
        style={{ color: preview.color ?? "#fff" }}
      >
        {preview.frames[0]}
      </div>
    );
  } else {
    content = (
      <div className="text-[11px] text-center px-4" style={{ color: "#444" }}>
        <FormattedMessage
          defaultMessage="preview"
          id="Jbz0kqYNRP"
          description="Placeholder text on the device-mockup screen before a character is selected"
        />
      </div>
    );
  }

  return (
    <div className="buddy-stick">
      <div className="buddy-stick-screen">{content}</div>
      <div className="flex-1 flex items-center justify-center">
        <div className="buddy-stick-btn" />
      </div>
    </div>
  );
}

type BuddyStatusCardProps = {
  connection: BuddyConnectionStatus | null;
  device: BuddyDeviceStatus | null;
  editedName: string;
  onChangeDevice: () => void;
  onConnect: () => void;
  onForgetDevice: () => void;
  onSaveName: () => void;
  setEditedName: (name: string) => void;
};

function BuddyStatusCard({
  connection,
  device,
  editedName,
  onChangeDevice,
  onConnect,
  onForgetDevice,
  onSaveName,
  setEditedName,
}: BuddyStatusCardProps) {
  const intl = useIntl();
  const connected = connection?.connected ?? false;

  return (
    <div className="buddy-card flex-1 min-w-0 p-4 text-xs overflow-y-auto">
      <div className="flex items-center gap-2 text-[13px]">
        <span className={`buddy-dot ${connected ? "on" : ""}`} />
        <span>
          {connected ? (
            device?.sec ? (
              <FormattedMessage
                defaultMessage="Connected · Encrypted"
                id="RyNwSXgWrG"
                description="Status when the buddy device is connected over an encrypted (bonded) BLE link"
              />
            ) : (
              <FormattedMessage
                defaultMessage="Connected"
                id="9HIsz1Smer"
                description="Status when the buddy device is connected over BLE"
              />
            )
          ) : connection?.paired ? (
            <FormattedMessage
              defaultMessage="Disconnected"
              id="os7LTcHuiw"
              description="Status when a buddy is paired but not currently reachable"
            />
          ) : (
            <FormattedMessage
              defaultMessage="No buddy paired"
              id="EC3fHlxj1a"
              description="Status when no buddy device has ever been paired"
            />
          )}
        </span>
      </div>

      {connected && device && !device.sec && (
        <div
          className="text-[10px] mt-1 mb-2"
          style={{ color: "#e8a33d" }}
          title={intl.formatMessage({
            defaultMessage:
              "This device requested an unencrypted connection. Data is being sent unencrypted, meaning that other devices close by can easily listen in.",
            id: "4xrT8niZlX",
            description: "Tooltip explaining why the BLE link is unencrypted",
          })}
        >
          <FormattedMessage
            defaultMessage="Connection is unencrypted"
            id="U4fXjfVCw/"
            description="Warning shown when the connected device doesn't support BLE bonding"
          />
        </div>
      )}

      {connection?.paired && (
        <div
          className="py-1.5 pb-2.5 mb-3 border-b text-[11px]"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="font-mono" style={{ color: "var(--ink)" }}>
            {connection.paired.name}
          </div>
          <div className="flex gap-1.5 mt-1" style={mutedTextStyle}>
            <Button variant="ghost" size="sm" onClick={onChangeDevice}>
              <FormattedMessage
                defaultMessage="Change…"
                id="VhCZutgTZg"
                description="Button to open the BLE device picker and change the paired buddy"
              />
            </Button>
            <Button variant="ghost" size="sm" onClick={onForgetDevice}>
              <FormattedMessage
                defaultMessage="Forget"
                id="/6Btt89krf"
                description="Button to forget the paired buddy device"
              />
            </Button>
          </div>
        </div>
      )}

      {connected ? (
        device ? (
          <>
            <div className="flex items-center justify-between gap-2 py-[5px]">
              <span style={mutedTextStyle}>
                <FormattedMessage
                  defaultMessage="Name"
                  id="VOiMOmSSAB"
                  description="Label for the buddy device name field"
                />
              </span>
              <input
                className="w-14 min-w-0 px-2 py-1 border rounded text-[12px] tabular-nums text-right bg-white focus:outline-none focus:border-[var(--clay)]"
                style={{ borderColor: "var(--line)" }}
                value={editedName}
                placeholder={device.name}
                maxLength={22}
                onChange={(event) => setEditedName(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && onSaveName()}
              />
              <Button
                variant="ghost"
                size="sm"
                disabled={!editedName.trim() || editedName === device.name}
                onClick={onSaveName}
              >
                <FormattedMessage
                  defaultMessage="Save"
                  id="JkRLRwAcGs"
                  description="Button to save the new buddy device name"
                />
              </Button>
            </div>

            <SectionLabel>
              <FormattedMessage
                defaultMessage="Battery"
                id="olgIzDjDhD"
                description="Section header for battery stats"
              />
            </SectionLabel>
            <StatRow
              label={
                device.bat.usb ? (
                  device.bat.mA > 1 ? (
                    <FormattedMessage
                      defaultMessage="Charging"
                      id="Ig9Ho5m0e7"
                      description="Battery row label when the device is charging over USB"
                    />
                  ) : (
                    <FormattedMessage
                      defaultMessage="USB"
                      id="BHrCNQSl+/"
                      description="Battery row label when on USB power but not charging"
                    />
                  )
                ) : (
                  <FormattedMessage
                    defaultMessage="{mA}mA"
                    id="45E6u2ngvv"
                    description="Battery current draw in milliamps"
                    values={{ mA: device.bat.mA }}
                  />
                )
              }
              value={
                <FormattedMessage
                  defaultMessage="{pct}%"
                  id="dsgmG2ONi3"
                  description="Battery charge percentage"
                  values={{ pct: device.bat.pct }}
                />
              }
              tone={device.bat.pct > 30 ? "var(--ok)" : "#e8a33d"}
            />

            <SectionLabel>
              <FormattedMessage
                defaultMessage="Progress"
                id="aWKY5pRsBZ"
                description="Section header for buddy gamification stats"
              />
            </SectionLabel>
            <StatRow
              label={
                <FormattedMessage
                  defaultMessage="Level"
                  id="OYyUbCYWdu"
                  description="Stat label: buddy level"
                />
              }
              value={device.stats.lvl}
            />
            <StatRow
              label={
                <FormattedMessage
                  defaultMessage="Approved"
                  id="wEHkyvS7VM"
                  description="Stat label: number of approved tool calls"
                />
              }
              value={device.stats.appr}
            />
            <StatRow
              label={
                <FormattedMessage
                  defaultMessage="Velocity"
                  id="icGnhQJ0b2"
                  description="Stat label: average seconds to approve"
                />
              }
              value={
                <FormattedMessage
                  defaultMessage="{s}s"
                  id="FwEm/ZxDYe"
                  description="Velocity value in seconds; em-dash if zero"
                  values={{ s: device.stats.vel || "—" }}
                />
              }
            />

            <SectionLabel>
              <FormattedMessage
                defaultMessage="System"
                id="JJRLwJcTdl"
                description="Section header for device system stats"
              />
            </SectionLabel>
            <StatRow
              label={
                <FormattedMessage
                  defaultMessage="Uptime"
                  id="ZiyxRLRcqH"
                  description="Stat label: device uptime"
                />
              }
              value={formatUptime(device.sys.up)}
            />
            <StatRow
              label={
                <FormattedMessage
                  defaultMessage="Heap"
                  id="R4UYfBI7n4"
                  description="Stat label: free heap memory"
                />
              }
              value={
                <FormattedMessage
                  defaultMessage="{kb}KB"
                  id="Bx8SVIBqp8"
                  description="Heap size in kilobytes"
                  values={{ kb: Math.round(device.sys.heap / 1024) }}
                />
              }
            />
          </>
        ) : (
          <div className="text-xs" style={mutedTextStyle}>
            <FormattedMessage
              defaultMessage="No response"
              id="mM1zeqoT65"
              description="Shown when connected over BLE but the device is not answering status queries"
            />
          </div>
        )
      ) : (
        <Button variant="flat" size="sm" className="mt-3" onClick={onConnect}>
          <FormattedMessage
            defaultMessage="Connect"
            id="r7yWnNBpJl"
            description="Button to connect or pair a buddy device"
          />
        </Button>
      )}
    </div>
  );
}

type DevicePickerOverlayProps = {
  devices: BuddyDiscoveredDevice[] | null;
  onClose: () => void;
  onPick: (deviceId: string) => void;
};

function DevicePickerOverlay({
  devices,
  onClose,
  onPick,
}: DevicePickerOverlayProps) {
  const intl = useIntl();

  return (
    <div className="buddy-overlay nc-no-drag">
      <Button
        variant="ghost"
        size="icon"
        className="text-2xl leading-none"
        style={{
          position: "absolute",
          top: 50,
          right: 16,
          color: "var(--ink)",
        }}
        aria-label={intl.formatMessage({
          defaultMessage: "Close",
          id: "GvZR+GimJM",
          description: "Accessible label for the maker guide close button",
        })}
        onClick={onClose}
      >
        ×
      </Button>
      <div className="px-8 pt-14 pb-7 overflow-y-auto text-[13px] leading-relaxed">
        <h2 className="text-lg mb-1" style={{ color: "var(--ink)" }}>
          <FormattedMessage
            defaultMessage="Choose your Buddy"
            id="X4B0fhGYCv"
            description="Heading for the BLE device picker overlay"
          />
        </h2>
        <p style={mutedTextStyle}>
          {devices === null ? (
            <FormattedMessage
              defaultMessage="Scanning for 5s…"
              id="+rUDCO79Js"
              description="Shown while scanning for nearby buddy devices"
            />
          ) : (
            <FormattedMessage
              defaultMessage="Tap to pair:"
              id="c57Uvzn9py"
              description="Prompt above the list of discovered buddy devices"
            />
          )}
        </p>
        <div className="flex flex-col gap-1.5 mt-3">
          {devices?.length === 0 && (
            <div className="text-xs py-3" style={mutedTextStyle}>
              <FormattedMessage
                defaultMessage="None found. Make sure yours is on and nearby."
                id="w1n324NTbz"
                description="Shown when the BLE scan returns no buddy devices"
              />
            </div>
          )}
          {devices?.map((device) => (
            <button
              className="buddy-card text-left font-mono text-[13px] p-3 hover:!border-[var(--clay)]"
              key={device.id}
              onClick={() => onPick(device.id)}
              type="button"
            >
              {device.name || device.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

type PairingCodeOverlayProps = {
  deviceName: string;
  onSubmit: (pin: string | null) => void;
};

function PairingCodeOverlay({ deviceName, onSubmit }: PairingCodeOverlayProps) {
  const intl = useIntl();
  const [pin, setPin] = useState("");

  return (
    <div className="buddy-overlay nc-no-drag">
      <div className="px-8 pt-14 pb-7 text-[13px] leading-relaxed">
        <h2 className="text-lg mb-1" style={{ color: "var(--ink)" }}>
          <FormattedMessage
            defaultMessage="Pair with {name}"
            id="EI/bM1mkxe"
            description="Heading for the BLE passkey entry overlay"
            values={{ name: deviceName }}
          />
        </h2>
        <p style={mutedTextStyle}>
          <FormattedMessage
            defaultMessage="Enter the 6-digit code shown on the device's screen to connect."
            id="bFjLlL146p"
            description="Instructions above the BLE passkey input"
          />
        </p>
        <input
          autoFocus
          inputMode="numeric"
          maxLength={6}
          aria-label={intl.formatMessage({
            defaultMessage: "Pairing code",
            id: "lPkYPQQtQp",
            description: "Accessible label for the BLE passkey input",
          })}
          className="font-mono text-2xl tracking-[0.4em] text-center w-48 mt-4 px-3 py-2 border rounded bg-white focus:outline-none focus:border-[var(--clay)]"
          style={{ borderColor: "var(--line)" }}
          value={pin}
          onChange={(event) => setPin(event.target.value.replace(/\D/g, ""))}
          onKeyDown={(event) =>
            event.key === "Enter" && pin.length === 6 && onSubmit(pin)
          }
        />
        <div className="flex gap-2 mt-4">
          <Button
            variant="flat"
            size="sm"
            disabled={pin.length !== 6}
            onClick={() => onSubmit(pin)}
          >
            <FormattedMessage
              defaultMessage="Pair"
              id="WiBUYCwrBG"
              description="Button to submit the BLE passkey"
            />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => onSubmit(null)}>
            <FormattedMessage
              defaultMessage="Cancel"
              id="075Zq8hhWT"
              description="Button to cancel BLE pairing"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

function MakerGuideOverlay({ onClose }: { onClose: () => void }) {
  const intl = useIntl();

  return (
    <div className="buddy-overlay nc-no-drag">
      <div
        className={`h-[45px] flex items-center ${headerPaddingClassName} pr-3 border-b shrink-0`}
        style={{ borderColor: "var(--line)" }}
      >
        <h1 className="text-xs font-bold opacity-40">
          <FormattedMessage
            defaultMessage="Hardware Buddy & Maker Devices"
            id="cIji9pIUOl"
            description="Title of the Hardware Buddy companion window"
          />
        </h1>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto text-lg leading-none"
          style={{ color: "var(--ink)" }}
          aria-label={intl.formatMessage({
            defaultMessage: "Close",
            id: "GvZR+GimJM",
            description: "Accessible label for the maker guide close button",
          })}
          onClick={onClose}
        >
          ×
        </Button>
      </div>
      <div className="px-8 pt-5 pb-7 overflow-y-auto text-[13px] leading-relaxed select-text">
        <h2 className="text-lg mb-1" style={{ color: "var(--ink)" }}>
          <FormattedMessage
            defaultMessage="Connect maker devices to Claude"
            id="+Fax0wMvjs"
            description="Heading for the Hardware Buddy maker guide overlay"
          />
        </h2>
        <p style={mutedTextStyle}>
          <FormattedMessage
            defaultMessage="Claude for macOS, Windows, and Linux can connect Claude Cowork and Claude Code to maker devices over BLE, so developers can build hardware that displays permission prompts, recent messages, and other interactions."
            id="ZFmsM8Cqua"
            description="Intro paragraph explaining the BLE maker device bridge"
          />
        </p>
        <SectionLabel>
          <FormattedMessage
            defaultMessage="Reference implementation"
            id="ouKZBgbNpq"
            description="Section header for the reference desk-pet firmware"
          />
        </SectionLabel>
        <p style={mutedTextStyle}>
          <FormattedMessage
            defaultMessage="Find the firmware, build instructions, and character pack guide in the <a>claude-desktop-buddy repository</a>."
            id="mTUIZX4Qq2"
            description="Reference desk pet description; <a> wraps the repo link text"
            values={{ a: linkBuddyRepository }}
          />
        </p>
        <SectionLabel>
          <FormattedMessage
            defaultMessage="Build your own device"
            id="UKbdajsboe"
            description="Section header for the BLE protocol details"
          />
        </SectionLabel>
        <p className="mt-3" style={mutedTextStyle}>
          <FormattedMessage
            defaultMessage="Advertise a name starting with Claude over the Nordic UART Service. Everything on the wire is UTF-8 JSON, one object per line."
            id="tkAZD2CTH1"
            description="BLE transport requirements summary"
          />
        </p>
        <pre>
          service 6e400001-b5a3-f393-e0a9-e50e24dcca9e{"\n"}
          rx write 6e400002-b5a3-f393-e0a9-e50e24dcca9e{"\n"}
          tx notif 6e400003-b5a3-f393-e0a9-e50e24dcca9e
        </pre>
        <SectionLabel>
          <FormattedMessage
            defaultMessage="Availability"
            id="f+EuS5oQ+o"
            description="Section header for the maker bridge disclaimer"
          />
        </SectionLabel>
        <p style={mutedTextStyle}>
          <FormattedMessage
            defaultMessage="The BLE API is only available when the desktop app is in developer mode. It's intended for makers and developers and isn't an officially supported product feature."
            id="zTrDHxC7yZ"
            description="Disclaimer that the BLE maker bridge is unsupported"
          />
        </p>
      </div>
    </div>
  );
}

function progressFromMessage(message: string): UploadProgress {
  const percentMatch = message.match(/(\d+)%/);

  return {
    className: message.startsWith("✓")
      ? "ok"
      : message.startsWith("✗")
        ? "err"
        : "",
    message,
    percent: message.startsWith("✓")
      ? 100
      : percentMatch
        ? Number(percentMatch[1])
        : 0,
  };
}

export function BuddyWindowPage() {
  const intl = useIntl();
  const [connection, setConnection] = useState<BuddyConnectionStatus | null>(
    null,
  );
  const [device, setDevice] = useState<BuddyDeviceStatus | null>(null);
  const [editedName, setEditedName] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [preview, setPreview] = useState<BuddyPreview | null>(null);
  const [isInstalling, setIsInstalling] = useState(false);
  const [progress, setProgress] = useState<UploadProgress>({
    className: "",
    message: "",
    percent: 0,
  });
  const [showDevicePicker, setShowDevicePicker] = useState(false);
  const [showMakerGuide, setShowMakerGuide] = useState(false);
  const [pairingDeviceName, setPairingDeviceName] = useState<string | null>(
    null,
  );
  const [isDragOver, setIsDragOver] = useState(false);
  const [discoveredDevices, setDiscoveredDevices] = useState<
    BuddyDiscoveredDevice[] | null
  >(null);

  const refreshStatus = useCallback(async () => {
    const api = getBuddyApi();
    if (!api?.status) {
      return;
    }

    const nextConnection = await api.status();
    setConnection(nextConnection);

    const nextDevice =
      nextConnection.connected && api.deviceStatus
        ? await api.deviceStatus()
        : null;
    setDevice(nextDevice);
    setEditedName((current) =>
      current === "" && nextDevice?.name ? nextDevice.name : current,
    );
  }, []);

  useEffect(() => {
    void refreshStatus();
    const interval = setInterval(refreshStatus, 2000);
    return () => clearInterval(interval);
  }, [refreshStatus]);

  useEffect(() => {
    return getBuddyApi()?.onPairingPrompt?.((deviceName) => {
      setShowDevicePicker(false);
      setPairingDeviceName(deviceName);
    });
  }, []);

  useEffect(() => {
    return getBuddyApi()?.onProgress?.((message) => {
      setProgress(progressFromMessage(message));
    });
  }, []);

  const loadFolderPreview = useCallback(
    async (folderPath: string | null | undefined) => {
      if (!folderPath) {
        return;
      }

      const nextPreview = (await getBuddyApi()?.preview?.(folderPath)) ?? null;
      setSelectedFolder(nextPreview ? folderPath : null);
      setPreview(nextPreview);
      setProgress(
        nextPreview
          ? { className: "", message: "", percent: 0 }
          : {
              className: "err",
              message: intl.formatMessage({
                defaultMessage: "Can't read folder, or it's empty or too large",
                id: "T4jmJZPPo0",
                description:
                  "Error when the dropped folder cannot be read or fails the size check",
              }),
              percent: 0,
            },
      );
    },
    [intl],
  );

  const installSelectedFolder = useCallback(async () => {
    if (!selectedFolder) {
      return;
    }

    setIsInstalling(true);
    setProgress({
      className: "",
      message: intl.formatMessage({
        defaultMessage: "Uploading…",
        id: "TZvMyB3+VV",
        description:
          "Progress label while a folder is being uploaded to the device",
      }),
      percent: 0,
    });

    try {
      await getBuddyApi()?.install?.(selectedFolder);
    } catch (error) {
      setProgress({
        className: "err",
        message: error instanceof Error ? error.message : String(error),
        percent: 0,
      });
    } finally {
      setIsInstalling(false);
    }
  }, [intl, selectedFolder]);

  const saveDeviceName = useCallback(async () => {
    const trimmedName = editedName.trim();
    if (!trimmedName) {
      return;
    }

    const saved = await getBuddyApi()?.setName?.(trimmedName);
    setProgress({
      className: saved ? "ok" : "err",
      message: saved
        ? intl.formatMessage({
            defaultMessage: "Name saved",
            id: "EZtqZABDTT",
            description: "Confirmation after the buddy device name was updated",
          })
        : intl.formatMessage({
            defaultMessage: "Device did not respond",
            id: "b32kW1tdoX",
            description: "Error when renaming the buddy device times out",
          }),
      percent: saved ? 100 : 0,
    });
  }, [editedName, intl]);

  const openDevicePicker = useCallback(async () => {
    const api = getBuddyApi();
    if (connection?.paired) {
      await api?.pairDevice?.();
      await refreshStatus();
      return;
    }

    setShowDevicePicker(true);
    setDiscoveredDevices(null);
    setDiscoveredDevices((await api?.scanDevices?.()) ?? []);
  }, [connection, refreshStatus]);

  const closeDevicePicker = useCallback(() => {
    void getBuddyApi()?.cancelScan?.();
    setShowDevicePicker(false);
    void refreshStatus();
  }, [refreshStatus]);

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragOver(false);
      const file = event.dataTransfer.files[0];
      const droppedPath = file
        ? getBuddyFileBridge()?.getPathForFile?.(file)
        : undefined;
      void loadFolderPreview(droppedPath);
    },
    [loadFolderPreview],
  );

  return (
    <div className="buddy-body h-screen flex flex-col font-sans text-sm select-none nc-drag">
      <header
        className={`h-[45px] flex items-center ${headerPaddingClassName} pr-3 border-b shrink-0`}
        style={{ borderColor: "var(--line)" }}
      >
        <h1 className="text-xs font-bold opacity-40">
          <FormattedMessage
            defaultMessage="Hardware Buddy & Maker Devices"
            id="cIji9pIUOl"
            description="Title of the Hardware Buddy companion window"
          />
        </h1>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto nc-no-drag"
          style={mutedTextStyle}
          onClick={() => setShowMakerGuide(true)}
        >
          <FormattedMessage
            defaultMessage="What is this?"
            id="S/wf3blo3N"
            description="Header button that opens the maker guide overlay"
          />
        </Button>
      </header>

      <main className="flex-1 px-6 pt-5 pb-5 flex flex-col gap-4 nc-no-drag min-h-0 overflow-hidden">
        <div className="flex gap-5 items-stretch flex-1 min-h-0">
          <BuddyPreviewPane preview={preview} />
          <BuddyStatusCard
            connection={connection}
            device={device}
            editedName={editedName}
            setEditedName={setEditedName}
            onSaveName={saveDeviceName}
            onConnect={openDevicePicker}
            onChangeDevice={() => setShowDevicePicker(true)}
            onForgetDevice={() =>
              void getBuddyApi()?.forgetDevice?.().then(refreshStatus)
            }
          />
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            <div
              className={classNames(
                "buddy-card buddy-dashed p-3.5 flex-1 flex flex-col items-center justify-center text-center cursor-pointer transition-colors hover:!border-[var(--clay)]",
                isDragOver && "buddy-drop-over",
              )}
              onClick={() =>
                void getBuddyApi()?.pickFolder?.().then(loadFolderPreview)
              }
              onDragOver={(event) => {
                event.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
            >
              <div className="text-[13px]" style={mutedTextStyle}>
                <FormattedMessage
                  defaultMessage="Drop a data folder here{br}or click to choose"
                  id="Hi3O8oQmoX"
                  description="Drag-and-drop target instructions for sending a folder to the device"
                  values={{ br: <br /> }}
                />
              </div>
              {selectedFolder && (
                <div
                  className="mt-2 font-mono text-[11px] break-all"
                  style={mutedTextStyle}
                >
                  {selectedFolder.split("/").slice(-2).join("/")}
                </div>
              )}
            </div>
            <Button
              variant="flat"
              size="lg"
              disabled={!selectedFolder || isInstalling}
              onClick={installSelectedFolder}
            >
              <FormattedMessage
                defaultMessage="Send to Device"
                id="rzOlorSGCr"
                description="Button to upload the selected folder to the buddy device"
              />
            </Button>
          </div>
        </div>
        <div>
          <div
            className={`buddy-bar ${isInstalling || progress.percent ? "active" : ""}`}
          >
            <div style={{ width: `${progress.percent}%` }} />
          </div>
          <div
            className={classNames(
              "mt-2 font-mono text-[11px] min-h-[14px]",
              progress.className === "err"
                ? "whitespace-pre-wrap text-left"
                : "text-center",
            )}
            style={{
              color:
                progress.className === "ok"
                  ? "var(--ok)"
                  : progress.className === "err"
                    ? "var(--err)"
                    : "var(--ink-dim)",
            }}
          >
            {progress.message}
          </div>
        </div>
      </main>

      {showMakerGuide && (
        <MakerGuideOverlay onClose={() => setShowMakerGuide(false)} />
      )}
      {pairingDeviceName && (
        <PairingCodeOverlay
          deviceName={pairingDeviceName}
          onSubmit={(pin) => {
            void getBuddyApi()?.submitPin?.(pin);
            setPairingDeviceName(null);
            void refreshStatus();
          }}
        />
      )}
      {showDevicePicker && (
        <DevicePickerOverlay
          devices={discoveredDevices}
          onClose={closeDevicePicker}
          onPick={(deviceId) => {
            void getBuddyApi()
              ?.pickDevice?.(deviceId)
              .then(() => {
                setShowDevicePicker(false);
                void refreshStatus();
              });
          }}
        />
      )}
    </div>
  );
}

export default BuddyWindowPage;
