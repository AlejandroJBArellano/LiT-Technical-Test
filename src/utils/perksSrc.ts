import { Perk } from "../types/Perk"


export const perksSre = (perk: Perk) => {
    
    if(perk.includes("remotefriendly")){
        return "perk-remote-friendly.svg"
    } else if (perk.includes("unlimitedvacation")){
        return "perk-unlimited-vacation.svg"
    } else if (perk.includes("paidparentalleave")){
        return "perk-parental-leave.svg"
    } else if (perk.includes("latinxintech")){
        return "perk-latinx-in-tech.svg"
    } else if (perk.includes("womenintecherg")){
        return "perk-women-in-tech.svg"
    } else if (perk.includes("lgbtqierg-2")){
        return "perk-lgtbiq.svg"
    }
}