import MockAdapter from "axios-mock-adapter";
import api from "./axios";
import { revenueData, summaryData } from "../data/dashboardData";

const mock = new MockAdapter(api,{delayResponse:800});

mock.onGet("/summary").reply(200,{

success:true,

data:summaryData

});

mock.onGet("/revenue").reply(200,{

success:true,

data:revenueData

});

export default mock;