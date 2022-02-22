import axios from "@/utils/axios"
import {IResource} from "@/type/IResource";
import {AxiosResponse} from "axios";

/**
 * 리소스 목록 조회
 * @param offset 오프셋
 * @param limit 리피트
 */
function getResources(offset = 0, limit = 10): Promise<AxiosResponse> {
    return axios({
        url: "/api/resources",
        method: "get",
        params: {
            offset: offset,
            limit: limit
        },
        withCredentials: true
    });
}

/**
 * 리소스 상세 정보 조회
 * @param id 리소스 ID
 */
function getResource(id: number): Promise<AxiosResponse> {
    return axios({
        url: "/api/resources/" + id,
        method: "get",
        withCredentials: true
    });
}

/**
 * 리소스 등록
 * @param resource 리소스 정보
 */
function createResource(resource: IResource): Promise<AxiosResponse> {
    return axios({
        url: "/api/resources",
        method: "post",
        data: resource,
        withCredentials: true
    });
}

/**
 * 리소스 변경
 * @param id 리소스 ID
 * @param resource 리소스 정보
 */
function updateResource(id: number, resource: IResource): Promise<AxiosResponse> {
    return axios({
        url: "/api/resources/" + id,
        method: "put",
        data: resource,
        withCredentials: true
    });
}

export {
    getResources,
    getResource,
    createResource,
    updateResource
}