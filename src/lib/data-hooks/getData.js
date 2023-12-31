import getAboutData from "./getAboutData";
import getCareerData from "./getCareerData";
import getDownloadAppData from "./getDownloadAppData";
import getHelpAndSupportData from "./getHelpAndSupportData";
import getHomeData from "./getHomeData";
import getLocationData from "./getLocationData";
import getPrivacyData from "./getPrivacyData";
import getServicesData from "./getServicesData";
import getTermsData from "./getTermsData";

const getData = async (id, arabic) => {
  switch (id) {
    case "300942ec-7d92-4f42-b8b2-15250cbf1c04":
      return await getServicesData(id, arabic);
    case "b797d4f3-9da1-48c2-9b37-89250fd85a84":
      return await getLocationData(arabic);

    case "ab9bc9b1-cd72-42b7-b086-14ea9e1489ff":
      return await getHelpAndSupportData(id, arabic);

    case "464bc255-fcaa-40f3-a9b3-6dff74e5436b":
      return await getAboutData(id, arabic);
    case "2f433ac6-6b0b-4a65-bcb8-2f84b7e6b211":
      return await getCareerData(id, arabic);
    case "7e1edd52-c907-43c4-8076-36dada4fc25c":
      return await getTermsData(id, arabic);
    case "cd61ee96-9117-4b4e-9663-40764ac4ee6f":
      return await getPrivacyData(id, arabic);
    case "fd59b077-71ee-4fbf-bc35-d627d367ed6b":
      return await getDownloadAppData(id, arabic);

    case "a4ebcba3-3ba6-4d3b-bd01-29ea514119ed":
      return await getServicesData(id, arabic);
    case "e9a0fcb1-57be-499d-ae50-ec17fb7bc69a":
      return await getLocationData(arabic);
    case "e1880864-7e75-491a-a301-fad016620580":
      return await getHelpAndSupportData(id, arabic);

    case "b6f20761-83c3-4cff-8090-aac0b7ab9b9d":
      return await getAboutData(id, arabic);
    case "4b5b6411-a391-4f04-a5e1-ffb4918636ae":
      return await getCareerData(id, arabic);

    case "feaab073-9016-4bba-8ae2-992c2ddd4015":
      return await getTermsData(id, arabic);

    case "291a2fb2-b0ba-4ffd-a670-514e9f6405ff":
      return await getPrivacyData(id, arabic);
    case "238442e3-ceb5-4d3b-96eb-ed616380c065":
      return await getDownloadAppData(id, arabic);

    default:
      return "error";
  }
};

export default getData;
