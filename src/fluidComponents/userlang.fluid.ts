import { v4 as uuidv4 } from "uuid";
import { DataObject, DataObjectFactory } from "@fluidframework/aqueduct";
import { SharedMap } from "@fluidframework/map";
import { IFluidHandle } from "@fluidframework/core-interfaces";
import { IUser, IUserLangDataModel } from "../model";


export class UserLang extends DataObject implements IUserLangDataModel {
    private usersMap: SharedMap;
    private langMap: SharedMap;

    private userId: string;


    protected async initializingFirstTime() {
        this.createdSharedMap("users");
        this.createdSharedMap("langs");
    }

    /**
     * Create shared map
     * @param id unique Id
     */
    private createdSharedMap(id: string): void {
        const map = SharedMap.create(this.runtime);
        this.root.set(id, map.handle);
    }

    /**
     * hasInitialized called every time a client joins sessions
     * 
     * perform task required for each client
     */
    protected async hasInitialized() {

        //Create local reference to the sharedmaps
        this.usersMap = await this.root.get<IFluidHandle<SharedMap>>("users").get();
        this.langMap = await this.root.get<IFluidHandle<SharedMap>>("langs").get();

        //add current user to set of collaboration
        this.addUser();
        
        //set up event listeners for ui & data changes
        this.createEventListeners(this.usersMap);
        
    }

    public getUser = () => {
        return this.usersMap.get<IUser>(this.userId);
    }

    public getUsers(): IUser[] {
        const users: IUser[] = [];
        this.usersMap.forEach((i: IUser) => {
            users.push(i);
        });
        return users;
    }

    public createLang = () => {

    }


    public addUser = () => {
        if (sessionStorage.getItem("userId")
            &&
            this.usersMap.get<IUser>(sessionStorage.getItem("userId"))
        ) {
            this.userId = sessionStorage.getItem("userId");
        } else {
            const user: IUser = {
                id: '',
                name: ''
            };
            this.userId = user.id;
            sessionStorage.setItem("userId", user.id);
            this.usersMap.set(user.id, user);
        }
    }

    /**
     * 
     * @param event listeners for shared object 
     */
    private createEventListeners(sharedMap: SharedMap): void {
        sharedMap.on('valueChanged', () => {
            this.emit("change");
        });

        sharedMap.on("clear", () => {
            this.emit("change")
        });

        //const quorum = this.context.getQuorum();




    }

}


export const UserLangInitFactory = new DataObjectFactory(
    "UserLang",
    UserLang,
    [SharedMap.getFactory()],
    {}
)