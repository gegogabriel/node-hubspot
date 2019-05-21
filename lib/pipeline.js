class Pipeline {
  constructor(client) {
    this.client = client
  }

  get(options, pipelineType) {
    return this.client._request({
      method: 'GET',
      path: `/crm-pipelines/v1/pipelines/${pipelineType}`,
      qs: options,
    })
  }

  create(data, pipelineType) {
    return this.client._request({
      method: 'POST',
      path: `/crm-pipelines/v1/pipelines/${pipelineType}`,
      body: data,
    })
  }

  updateById(id, data, pipelineType) {
    return this.client._request({
      method: 'PUT',
      path: `/crm-pipelines/v1/pipelines/${pipelineType}/${id}`,
      body: data,
    })
  }

  deleteById(id, pipelineType) {
    return this.client._request({
      method: 'DELETE',
      path: `/crm-pipelines/v1/pipelines/${pipelineType}/${id}`,
    })
  }
}

module.exports = Pipeline
