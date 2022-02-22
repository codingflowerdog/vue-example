import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {IErrorResponse} from "@/type/IErrorResponse";

/**
 * Axios
 */
class Axios {
    // 인스턴스
    static instance: AxiosInstance | null = null;

    /**
     * 인스턴스
     */
    static getInstance(): AxiosInstance {
        if (!this.instance) {
            this.instance = axios.create({
                timeout: 5000,
                withCredentials: true,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Authorization",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": "true"
                }
            });

            this.instance.defaults.xsrfCookieName = "csrftoken";
            this.instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";

            /**
             * 리퀘스트 인터셉터
             */
            this.instance.interceptors.request.use(
                /**
                 * 리퀘스트 성공 처리
                 * @param config
                 */
                function (config: AxiosRequestConfig) {
                    console.debug("리퀘스트 성공 인터셉터");
                    console.debug(config);
                    return config;
                },
                /**
                 * 리퀘스트 에러 처리
                 * @param error
                 */
                function (error) {
                    console.debug("리퀘스트 에러 인터셉터");
                    console.error(error);
                    return Promise.reject(error);
                }
            );

            /**
             * 리스폰스 인터셉터
             */
            this.instance.interceptors.response.use(
                function (response: AxiosResponse) {
                    console.debug("리스폰스 성공 인터셉터");
                    console.debug(response);
                    return response;
                },
                function (error) {
                    switch (error.response.status) {
                        case 401:
                            console.debug("서버 내부 에러")
                            break;
                        case 403:
                            console.debug("접근 권한 부족")
                            break;
                        default:
                            console.debug("서버 내부 에러")
                            break;
                    }

                    Axios.printErrorResponse(error.response);
                    return Promise.reject(error);
                }
            );

            return this.instance;
        } else {
            return this.instance;
        }
    }

    /**
     * 에러 응답 출력
     */
    private static printErrorResponse(response: AxiosResponse): void {
        const errorResponse: IErrorResponse = {
            code: response.data.code,
            status: response.data.status,
            message: response.data.message
        }

        console.log(errorResponse);
    }
}

export default Axios.getInstance();