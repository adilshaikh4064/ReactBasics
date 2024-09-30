import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";

/*
import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const user = await account.create(
    ID.unique(), 
    'email@example.com', 
    'password'
);
 */
export class AuthService{
    client=new Client();
    account; // wait for the client to set endpoints and project id.
    // we want client to set endpoints whenever there is an object instatiation of AuthService is happening.
    // setting endpoints directly along with creation on client object is wastage of resources
    // as we only need endpoints when we want to create an user.

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account=new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                // either call login function and let user login 
                // or, redirect to login page for the login and enter
                return this.login({ email, password });
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service:: GetCurrent User:: error",error)
        }
        return null;
    }
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service:: Logout User:: error",error)
        }
    }
}

const authService=new AuthService();
export default authService;