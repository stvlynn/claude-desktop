// Restored from ref/webview/assets/add-project-menu-items-D9fKjvei.js
// Add-project menu items and folder-plus icon.
import React, { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { FolderIcon } from "../icons/folder-icon";
import { PlusIcon } from "../icons/plus-icon";
import { Dropdown, DropdownMenu } from "./dropdown";

export type AddProjectIconProps = ComponentPropsWithoutRef<"svg">;

export function AddProjectIcon(props: AddProjectIconProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.2041 17.5V15.665H13.3691C13.0019 15.665 12.7041 15.3673 12.7041 15C12.7041 14.6327 13.0019 14.335 13.3691 14.335H15.2041V12.5C15.2041 12.1327 15.5019 11.835 15.8691 11.835C16.2362 11.8352 16.5332 12.1329 16.5332 12.5V14.335H18.3691C18.7362 14.3352 19.0332 14.6329 19.0332 15C19.0332 15.3671 18.7362 15.6648 18.3691 15.665H16.5332V17.5C16.5332 17.8671 16.2362 18.1648 15.8691 18.165C15.5019 18.165 15.2041 17.8673 15.2041 17.5ZM2.12012 12.7002V7.29981C2.12012 6.64581 2.11922 6.1149 2.1543 5.68555C2.19002 5.24867 2.26619 4.85832 2.45117 4.49512L2.56836 4.28516C2.86045 3.80898 3.27979 3.42103 3.78028 3.16602L3.91797 3.10156C4.24192 2.96268 4.5885 2.90039 4.97071 2.86914C5.40006 2.83406 5.93096 2.83496 6.58496 2.83496H7.28028C7.42346 2.83496 7.52305 2.83479 7.6211 2.84082L7.875 2.86719C8.46133 2.95309 9.01189 3.20874 9.45703 3.60547L9.70215 3.84473C9.81425 3.95779 9.85105 3.99455 9.88672 4.02637L9.99805 4.11719C10.2646 4.31741 10.5851 4.43638 10.9199 4.45703L11.1797 4.45996H13.6914C14.2499 4.45996 14.703 4.45958 15.0713 4.48535C15.4458 4.51157 15.7828 4.56683 16.1025 4.70313L16.3662 4.83106C16.9638 5.15706 17.4378 5.67623 17.707 6.30762L17.7939 6.54981C17.868 6.79538 17.904 7.05317 17.9238 7.33203C17.9498 7.69789 17.9502 8.14747 17.9502 8.7002C17.9501 8.87631 17.8803 9.0453 17.7559 9.16992C17.6311 9.29464 17.4615 9.36524 17.2852 9.36524H3.4502V12.7002C3.4502 13.3761 3.45084 13.8434 3.48047 14.2061C3.50947 14.5608 3.56304 14.7568 3.63672 14.9014L3.70215 15.0195C3.86642 15.2873 4.10236 15.505 4.38379 15.6484L4.50391 15.7002C4.63661 15.7476 4.81329 15.783 5.0791 15.8047C5.44174 15.8343 5.90903 15.835 6.58496 15.835H9.40918L9.54395 15.8486C9.84681 15.9108 10.0742 16.1788 10.0742 16.5C10.0742 16.8212 9.84681 17.0892 9.54395 17.1514L9.40918 17.165H6.58496C5.93096 17.165 5.40006 17.1659 4.97071 17.1309C4.5885 17.0996 4.24192 17.0373 3.91797 16.8984L3.78028 16.834C3.27979 16.579 2.86045 16.191 2.56836 15.7148L2.45117 15.5049C2.26619 15.1417 2.19002 14.7513 2.1543 14.3145C2.11922 13.8851 2.12012 13.3542 2.12012 12.7002ZM3.4502 8.03516H16.6201C16.6201 7.76691 16.6192 7.54537 16.6055 7.35449C16.5934 7.18613 16.5723 7.06616 16.543 6.96387L16.5029 6.85254C16.3493 6.4769 16.0708 6.16585 15.7168 5.9707L15.5859 5.90527C15.4053 5.82071 15.1909 5.77814 14.9297 5.75977C14.6593 5.74085 14.3192 5.74023 13.8379 5.74023H11.1797C10.9297 5.74023 10.7487 5.74036 10.5859 5.72852C10.4197 5.71645 10.2887 5.69309 10.168 5.64453L10.0352 5.58398C9.86499 5.49185 9.71875 5.36084 9.51172 5.16992L9.41211 5.08203C9.36979 5.0446 9.33659 5.01562 9.30469 4.98926L9.19141 4.89746C8.99951 4.74414 8.77995 4.64518 8.54297 4.60449L8.31055 4.58398C8.24414 4.58398 8.1696 4.58398 8.08301 4.58398H6.58496C5.93096 4.58398 5.40006 4.58308 4.97071 4.61816C4.5885 4.64941 4.24192 4.7117 3.91797 4.85059L3.78028 4.91504C3.27979 5.17004 2.86045 5.558 2.56836 6.03418L2.45117 6.24414C2.26619 6.60734 2.19002 6.99769 2.1543 7.43457C2.11922 7.86392 2.12012 8.39482 2.12012 9.04883V9.82324C2.3475 9.65788 2.62158 9.56543 2.91504 9.56543C3.2085 9.56543 3.48258 9.65788 3.70996 9.82324V9.04883L3.4502 8.03516Z"
        fill="currentColor"
      />
    </svg>
  );
}

type AddProjectMenuItemsProps = {
  children?: ReactNode;
  localProjectSourcesEnabled?: boolean;
  onOpenChange?: (open: boolean) => void;
  onStartFromScratch: () => void;
  onUseExistingFolder: () => void;
  open?: boolean;
  triggerButton: ReactNode;
};

export function AddProjectMenuItems({
  children,
  localProjectSourcesEnabled = false,
  onOpenChange,
  onStartFromScratch,
  onUseExistingFolder,
  open,
  triggerButton,
}: AddProjectMenuItemsProps) {
  const shouldStartAfterCloseRef = React.useRef(false);
  function handleCloseAutoFocus(event: Event) {
    if (shouldStartAfterCloseRef.current) {
      shouldStartAfterCloseRef.current = false;
      event.preventDefault();
      onStartFromScratch();
    }
  }
  const startMenuItem = localProjectSourcesEnabled ? (
    <Dropdown.Item
      LeftIcon={FolderIcon}
      onSelect={() => {
        shouldStartAfterCloseRef.current = true;
      }}
    >
      Local project
    </Dropdown.Item>
  ) : (
    <>
      <Dropdown.Item
        LeftIcon={PlusIcon}
        onSelect={() => {
          shouldStartAfterCloseRef.current = true;
        }}
      >
        Start from scratch
      </Dropdown.Item>
      <Dropdown.Item LeftIcon={FolderIcon} onSelect={onUseExistingFolder}>
        Use an existing folder
      </Dropdown.Item>
    </>
  );
  return (
    <DropdownMenu
      triggerButton={triggerButton}
      contentWidth="menu"
      onOpenChange={onOpenChange}
      onCloseAutoFocus={handleCloseAutoFocus}
      open={open}
    >
      {startMenuItem}
      {children}
    </DropdownMenu>
  );
}
