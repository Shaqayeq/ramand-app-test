import { UserManager, UserSettings } from "oidc-client";
import { userManagerSettings, clientId } from "../constants/auth-constant";


const userManager = new UserManager(userManagerSettings);

const getUserSettings = (): UserSettings | null => {
    const oidcStorageString = localStorage.getItem(`oidc.user:${clientId}`) ?? "";
    if (oidcStorageString === "") return null;
    const userSettings: UserSettings = JSON.parse(oidcStorageString) as UserSettings;
    return userSettings;
};

const login = (): Promise<void> => 
    userManager.signinRedirect({}).then((user:any )=> {
    localStorage.setItem(`oidc.user:${clientId}`,user);
}).catch(() => { });

const signinRedirectCallback = (callbackFunc :Function): Promise<void> => 
userManager.signinRedirectCallback().then(() => {
    if(callbackFunc) callbackFunc();
});

const isAuthenticated = (): boolean => {
    debugger
    const userSettings = getUserSettings();
    if (userSettings === null) return false;
    return true;
};

export {
    login,
    isAuthenticated,
    signinRedirectCallback,
};