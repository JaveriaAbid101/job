import tugageApi from '../config'


export const getProject = () => async () => {
    try {
        debugger;
        const result = await tugageApi.get('/projects', {});
    }
    catch (error) {
    }
}

export const getNameList = () => async () => {
    try {
        debugger;
        const result = await tugageApi.get('/v1/projects/e64f535c-49da-481f-9a6d-6add3ab5a62f', {});
    }
    catch (error) {
    }
}