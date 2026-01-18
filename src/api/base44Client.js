const APP_ID = import.meta.env.VITE_BASE44_APP_ID;

import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion } = appParams;

// If there's no Base44 app id, we are running in "local mode" and should NOT
// initialize the SDK (it will spam /api/apps/null/* and analytics).
export const base44 = APP_ID
  ? createClient({
      appId: APP_ID,
      // keep whatever other options you already had here (baseUrl, proxy, etc.)
    })
  : {
      // Minimal no-op surface so any leftover imports don't crash the app.
      entities: {},
      auth: {},
      analytics: { track: () => {}, flush: async () => {} },
      appLogs: { logUserInApp: async () => {} },
    };
    