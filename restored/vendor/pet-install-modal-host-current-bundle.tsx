// Restored from ref/webview/assets/pet-install-modal-host-D2_OQIXZ.js
// Current PetInstallModalHost backing bundle with restored dependency imports.
import { once as rolldownRuntimeN } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUpperD as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wD,
  currentAppInitialSharedCompatSlotUpperE as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
  currentAppInitialSharedCompatSlotUpperKLowerO as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo,
  currentAppInitialSharedCompatSlotUpperVLowerO as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wVo,
  currentAppInitialSharedCompatSlotLowerGLowerC as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGc,
  currentAppInitialSharedCompatSlotLowerLLowerC as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wLc,
  currentAppInitialSharedCompatSlotLowerQLowerO as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperCLowerA as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwCa,
  worktreeNewThreadQueryCompatSlotUpperDLowerM as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwDm,
  worktreeNewThreadQueryCompatSlotUpperDLowerO as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwDo,
  worktreeNewThreadQueryCompatSlotUpperELowerM as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEm,
  worktreeNewThreadQueryCompatSlotUpperOLowerM as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOm,
  worktreeNewThreadQueryCompatSlotUpperTLowerM as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
  worktreeNewThreadQueryCompatSlotUnderscoreLowerA as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwA,
  worktreeNewThreadQueryCompatSlotLowerBLowerA as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
  worktreeNewThreadQueryCompatSlotLowerVLowerA as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwVa,
  worktreeNewThreadQueryCompatSlotLowerWLowerO as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwWo,
  worktreeNewThreadQueryCompatSlotLowerYLowerA as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwYa,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  intlFormatDateTimeRuntime as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dIy,
  currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  initAvatarMascotButtonChunk as avatarMascotButtonN,
  AvatarMascotButton as avatarMascotButtonT,
} from "../ui/avatar-mascot-button";
import {
  pullRequestNewThreadCompatSlotLowerBLowerN as appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkBn,
  pullRequestNewThreadCompatSlotLowerYLowerN as appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkYn,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  useSelectedAvatar as appInitialAppMainPetInstallModalHostAvatarOverlayPageAvatarOverlayNativePageS9e72i2gR,
  initAvatarSelectionStateChunk as appInitialAppMainPetInstallModalHostAvatarOverlayPageAvatarOverlayNativePageS9e72i2gT,
} from "../features/custom-avatars-query";
import {
  initCustomAvatarsQueryChunk as customAvatarsQueryR,
  CUSTOM_AVATARS_QUERY_KEY as customAvatarsQueryT,
} from "../features/custom-avatars-query";
import {
  petInstallSession$ as petInstallStateIState,
  initPetInstallStateChunk as petInstallStateNState,
  installPet as petInstallStateRState,
  closePetInstallSession as petInstallStateTState,
} from "../features/pet-install-state";
function petInstallModalHostHelper1(petInstallModalHostParam1) {
  let petInstallModalHostValue6 = (0, petInstallModalHostValue1.c)(37),
    {
      session: session,
      onClose: onClose,
      onInstall: onInstall,
    } = petInstallModalHostParam1,
    { setSelectedAvatarId: setSelectedAvatarId } =
      appInitialAppMainPetInstallModalHostAvatarOverlayPageAvatarOverlayNativePageS9e72i2gR(),
    petInstallModalHostValue7 = session.status !== `installing`,
    petInstallModalHostValue8 =
      session.status === `ready` || session.status === `installError`,
    petInstallModalHostValue9;
  petInstallModalHostValue6[0] !== petInstallModalHostValue7 ||
  petInstallModalHostValue6[1] !== onClose
    ? ((petInstallModalHostValue9 = (petInstallModalHostParam3) => {
        !petInstallModalHostParam3 && petInstallModalHostValue7 && onClose();
      }),
      (petInstallModalHostValue6[0] = petInstallModalHostValue7),
      (petInstallModalHostValue6[1] = onClose),
      (petInstallModalHostValue6[2] = petInstallModalHostValue9))
    : (petInstallModalHostValue9 = petInstallModalHostValue6[2]);
  let petInstallModalHostValue10 = !petInstallModalHostValue7,
    petInstallModalHostValue11;
  petInstallModalHostValue6[3] !== petInstallModalHostValue8 ||
  petInstallModalHostValue6[4] !== onInstall
    ? ((petInstallModalHostValue11 = (event) => {
        (event.preventDefault(), petInstallModalHostValue8 && onInstall());
      }),
      (petInstallModalHostValue6[3] = petInstallModalHostValue8),
      (petInstallModalHostValue6[4] = onInstall),
      (petInstallModalHostValue6[5] = petInstallModalHostValue11))
    : (petInstallModalHostValue11 = petInstallModalHostValue6[5]);
  let petInstallModalHostValue12;
  petInstallModalHostValue6[6] !== session.name ||
  petInstallModalHostValue6[7] !== session.status
    ? ((petInstallModalHostValue12 =
        session.status === `installed`
          ? (0, petInstallModalHostValue2.jsx)(
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
              {
                id: `pets.install.installedTitle`,
                defaultMessage: `Installed {petName}`,
                description: `Title shown after a pet installs successfully`,
                values: {
                  petName: session.name,
                },
              },
            )
          : (0, petInstallModalHostValue2.jsx)(
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
              {
                id: `pets.install.title`,
                defaultMessage: `Install {petName}?`,
                description: `Title for the pet install modal`,
                values: {
                  petName: session.name,
                },
              },
            )),
      (petInstallModalHostValue6[6] = session.name),
      (petInstallModalHostValue6[7] = session.status),
      (petInstallModalHostValue6[8] = petInstallModalHostValue12))
    : (petInstallModalHostValue12 = petInstallModalHostValue6[8]);
  let petInstallModalHostValue13;
  petInstallModalHostValue6[9] !== session.description ||
  petInstallModalHostValue6[10] !== petInstallModalHostValue12
    ? ((petInstallModalHostValue13 = (0, petInstallModalHostValue2.jsx)(
        appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
        {
          children: (0, petInstallModalHostValue2.jsx)(
            appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwYa,
            {
              title: petInstallModalHostValue12,
              subtitle: session.description,
            },
          ),
        },
      )),
      (petInstallModalHostValue6[9] = session.description),
      (petInstallModalHostValue6[10] = petInstallModalHostValue12),
      (petInstallModalHostValue6[11] = petInstallModalHostValue13))
    : (petInstallModalHostValue13 = petInstallModalHostValue6[11]);
  let petInstallModalHostValue14;
  petInstallModalHostValue6[12] !== session.name ||
  petInstallModalHostValue6[13] !== session.preview ||
  petInstallModalHostValue6[14] !== session.status
    ? ((petInstallModalHostValue14 = (0, petInstallModalHostValue2.jsx)(
        appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
        {
          children: (0, petInstallModalHostValue2.jsx)(`div`, {
            className: `flex min-h-32 items-center justify-center`,
            children:
              session.status === `loading`
                ? (0, petInstallModalHostValue2.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-sm text-token-text-secondary`,
                    children: [
                      (0, petInstallModalHostValue2.jsx)(
                        appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwDm,
                        {
                          className: `icon-xs`,
                        },
                      ),
                      (0, petInstallModalHostValue2.jsx)(
                        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                        {
                          id: `pets.install.loading`,
                          defaultMessage: `Loading {petName}`,
                          description: `Loading state shown while a pet preview is prepared`,
                          values: {
                            petName: session.name,
                          },
                        },
                      ),
                    ],
                  })
                : session.status === `previewError`
                  ? (0, petInstallModalHostValue2.jsx)(`div`, {
                      className: `px-5 text-center text-sm text-token-text-secondary`,
                      children: (0, petInstallModalHostValue2.jsx)(
                        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                        {
                          id: `pets.install.error`,
                          defaultMessage: `Unable to load {petName}`,
                          description: `Error state shown when a pet cannot be prepared`,
                          values: {
                            petName: session.name,
                          },
                        },
                      ),
                    })
                  : (0, petInstallModalHostValue2.jsx)(avatarMascotButtonT, {
                      assetRef: `codex`,
                      spritesheetUrl: session.preview.spritesheetDataUrl,
                    }),
          }),
        },
      )),
      (petInstallModalHostValue6[12] = session.name),
      (petInstallModalHostValue6[13] = session.preview),
      (petInstallModalHostValue6[14] = session.status),
      (petInstallModalHostValue6[15] = petInstallModalHostValue14))
    : (petInstallModalHostValue14 = petInstallModalHostValue6[15]);
  let petInstallModalHostValue15;
  petInstallModalHostValue6[16] !== session.name ||
  petInstallModalHostValue6[17] !== session.status
    ? ((petInstallModalHostValue15 =
        session.status === `installError`
          ? (0, petInstallModalHostValue2.jsx)(
              appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
              {
                children: (0, petInstallModalHostValue2.jsx)(`div`, {
                  className: `text-sm text-token-text-secondary`,
                  children: (0, petInstallModalHostValue2.jsx)(
                    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                    {
                      id: `pets.install.installError`,
                      defaultMessage: `Unable to install {petName}`,
                      description: `Error state shown when a pet preview is valid but installation fails`,
                      values: {
                        petName: session.name,
                      },
                    },
                  ),
                }),
              },
            )
          : null),
      (petInstallModalHostValue6[16] = session.name),
      (petInstallModalHostValue6[17] = session.status),
      (petInstallModalHostValue6[18] = petInstallModalHostValue15))
    : (petInstallModalHostValue15 = petInstallModalHostValue6[18]);
  let petInstallModalHostValue16;
  petInstallModalHostValue6[19] !== petInstallModalHostValue7 ||
  petInstallModalHostValue6[20] !== petInstallModalHostValue8 ||
  petInstallModalHostValue6[21] !== onClose ||
  petInstallModalHostValue6[22] !== session.installedAvatarId ||
  petInstallModalHostValue6[23] !== session.status ||
  petInstallModalHostValue6[24] !== setSelectedAvatarId
    ? ((petInstallModalHostValue16 = (0, petInstallModalHostValue2.jsx)(
        appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
        {
          children:
            session.status === `installed`
              ? (0, petInstallModalHostValue2.jsxs)(
                  appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwVa,
                  {
                    children: [
                      (0, petInstallModalHostValue2.jsx)(
                        appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
                        {
                          color: `outline`,
                          type: `button`,
                          onClick: onClose,
                          children: (0, petInstallModalHostValue2.jsx)(
                            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                            {
                              id: `pets.install.close`,
                              defaultMessage: `Close`,
                              description: `Button label to close a completed pet install modal`,
                            },
                          ),
                        },
                      ),
                      (0, petInstallModalHostValue2.jsx)(
                        appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
                        {
                          type: `button`,
                          onClick: () => {
                            (setSelectedAvatarId(session.installedAvatarId),
                              onClose());
                          },
                          children: (0, petInstallModalHostValue2.jsx)(
                            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                            {
                              id: `pets.install.usePet`,
                              defaultMessage: `Use this pet`,
                              description: `Button label to select an installed pet`,
                            },
                          ),
                        },
                      ),
                    ],
                  },
                )
              : (0, petInstallModalHostValue2.jsxs)(
                  appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwVa,
                  {
                    children: [
                      (0, petInstallModalHostValue2.jsx)(
                        appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
                        {
                          color: `outline`,
                          disabled: !petInstallModalHostValue7,
                          type: `button`,
                          onClick: onClose,
                          children: (0, petInstallModalHostValue2.jsx)(
                            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                            {
                              id: `pets.install.cancel`,
                              defaultMessage: `Cancel`,
                              description: `Button label to cancel a pet install`,
                            },
                          ),
                        },
                      ),
                      (0, petInstallModalHostValue2.jsx)(
                        appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
                        {
                          disabled: !petInstallModalHostValue8,
                          loading: session.status === `installing`,
                          type: `submit`,
                          children:
                            session.status === `installError`
                              ? (0, petInstallModalHostValue2.jsx)(
                                  appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                  {
                                    id: `pets.install.tryAgain`,
                                    defaultMessage: `Try again`,
                                    description: `Button label to retry a failed pet install`,
                                  },
                                )
                              : (0, petInstallModalHostValue2.jsx)(
                                  appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                  {
                                    id: `pets.install.install`,
                                    defaultMessage: `Install`,
                                    description: `Button label to install a pet`,
                                  },
                                ),
                        },
                      ),
                    ],
                  },
                ),
        },
      )),
      (petInstallModalHostValue6[19] = petInstallModalHostValue7),
      (petInstallModalHostValue6[20] = petInstallModalHostValue8),
      (petInstallModalHostValue6[21] = onClose),
      (petInstallModalHostValue6[22] = session.installedAvatarId),
      (petInstallModalHostValue6[23] = session.status),
      (petInstallModalHostValue6[24] = setSelectedAvatarId),
      (petInstallModalHostValue6[25] = petInstallModalHostValue16))
    : (petInstallModalHostValue16 = petInstallModalHostValue6[25]);
  let petInstallModalHostValue17;
  petInstallModalHostValue6[26] !== petInstallModalHostValue11 ||
  petInstallModalHostValue6[27] !== petInstallModalHostValue13 ||
  petInstallModalHostValue6[28] !== petInstallModalHostValue14 ||
  petInstallModalHostValue6[29] !== petInstallModalHostValue15 ||
  petInstallModalHostValue6[30] !== petInstallModalHostValue16
    ? ((petInstallModalHostValue17 = (0, petInstallModalHostValue2.jsxs)(
        appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwA,
        {
          as: `form`,
          onSubmit: petInstallModalHostValue11,
          children: [
            petInstallModalHostValue13,
            petInstallModalHostValue14,
            petInstallModalHostValue15,
            petInstallModalHostValue16,
          ],
        },
      )),
      (petInstallModalHostValue6[26] = petInstallModalHostValue11),
      (petInstallModalHostValue6[27] = petInstallModalHostValue13),
      (petInstallModalHostValue6[28] = petInstallModalHostValue14),
      (petInstallModalHostValue6[29] = petInstallModalHostValue15),
      (petInstallModalHostValue6[30] = petInstallModalHostValue16),
      (petInstallModalHostValue6[31] = petInstallModalHostValue17))
    : (petInstallModalHostValue17 = petInstallModalHostValue6[31]);
  let petInstallModalHostValue18;
  return (
    petInstallModalHostValue6[32] !== petInstallModalHostValue7 ||
    petInstallModalHostValue6[33] !== petInstallModalHostValue9 ||
    petInstallModalHostValue6[34] !== petInstallModalHostValue10 ||
    petInstallModalHostValue6[35] !== petInstallModalHostValue17
      ? ((petInstallModalHostValue18 = (0, petInstallModalHostValue2.jsx)(
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwWo,
          {
            open: !0,
            onOpenChange: petInstallModalHostValue9,
            shouldIgnoreClickOutside: petInstallModalHostValue10,
            showDialogClose: petInstallModalHostValue7,
            size: `compact`,
            children: petInstallModalHostValue17,
          },
        )),
        (petInstallModalHostValue6[32] = petInstallModalHostValue7),
        (petInstallModalHostValue6[33] = petInstallModalHostValue9),
        (petInstallModalHostValue6[34] = petInstallModalHostValue10),
        (petInstallModalHostValue6[35] = petInstallModalHostValue17),
        (petInstallModalHostValue6[36] = petInstallModalHostValue18))
      : (petInstallModalHostValue18 = petInstallModalHostValue6[36]),
    petInstallModalHostValue18
  );
}
var petInstallModalHostValue1,
  petInstallModalHostValue2,
  petInstallModalHostValue3 = rolldownRuntimeN(() => {
    ((petInstallModalHostValue1 =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGc()),
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dIy(),
      avatarMascotButtonN(),
      appInitialAppMainPetInstallModalHostAvatarOverlayPageAvatarOverlayNativePageS9e72i2gT(),
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEm(),
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwDo(),
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwCa(),
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOm(),
      (petInstallModalHostValue2 =
        appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wLc()));
  });
function PetInstallModalHost(petInstallModalHostParam2) {
  let petInstallModalHostValue19 = (0, petInstallModalHostValue4.c)(10),
    { onClose: onClose } = petInstallModalHostParam2,
    petInstallModalHostValue20 =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    petInstallModalHostValue21 =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        petInstallStateIState,
      ),
    petInstallModalHostValue22 =
      appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkBn();
  if (petInstallModalHostValue21 == null) return null;
  let petInstallModalHostValue23;
  petInstallModalHostValue19[0] !== onClose ||
  petInstallModalHostValue19[1] !== petInstallModalHostValue20
    ? ((petInstallModalHostValue23 = () => {
        (petInstallStateTState(petInstallModalHostValue20), onClose());
      }),
      (petInstallModalHostValue19[0] = onClose),
      (petInstallModalHostValue19[1] = petInstallModalHostValue20),
      (petInstallModalHostValue19[2] = petInstallModalHostValue23))
    : (petInstallModalHostValue23 = petInstallModalHostValue19[2]);
  let petInstallModalHostValue24;
  petInstallModalHostValue19[3] !== petInstallModalHostValue22 ||
  petInstallModalHostValue19[4] !== petInstallModalHostValue20
    ? ((petInstallModalHostValue24 = () =>
        petInstallStateRState(petInstallModalHostValue20, () =>
          petInstallModalHostValue22(customAvatarsQueryT),
        )),
      (petInstallModalHostValue19[3] = petInstallModalHostValue22),
      (petInstallModalHostValue19[4] = petInstallModalHostValue20),
      (petInstallModalHostValue19[5] = petInstallModalHostValue24))
    : (petInstallModalHostValue24 = petInstallModalHostValue19[5]);
  let petInstallModalHostValue25;
  return (
    petInstallModalHostValue19[6] !== petInstallModalHostValue21 ||
    petInstallModalHostValue19[7] !== petInstallModalHostValue23 ||
    petInstallModalHostValue19[8] !== petInstallModalHostValue24
      ? ((petInstallModalHostValue25 = (0, petInstallModalHostValue5.jsx)(
          petInstallModalHostHelper1,
          {
            session: petInstallModalHostValue21,
            onClose: petInstallModalHostValue23,
            onInstall: petInstallModalHostValue24,
          },
        )),
        (petInstallModalHostValue19[6] = petInstallModalHostValue21),
        (petInstallModalHostValue19[7] = petInstallModalHostValue23),
        (petInstallModalHostValue19[8] = petInstallModalHostValue24),
        (petInstallModalHostValue19[9] = petInstallModalHostValue25))
      : (petInstallModalHostValue25 = petInstallModalHostValue19[9]),
    petInstallModalHostValue25
  );
}
var petInstallModalHostValue4, petInstallModalHostValue5;
rolldownRuntimeN(() => {
  ((petInstallModalHostValue4 =
    appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGc()),
    appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wVo(),
    customAvatarsQueryR(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkYn(),
    appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wD(),
    petInstallModalHostValue3(),
    petInstallStateNState(),
    (petInstallModalHostValue5 =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wLc()));
})();
export { PetInstallModalHost };
