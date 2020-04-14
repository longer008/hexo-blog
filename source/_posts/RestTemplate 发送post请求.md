---
title: RestTemplate 发送post请求
toc: true
recommend: 1
top: 1
keywords: RestTemplate post
thumbnail: 'https://cdn.jsdelivr.net/gh/longer008/images/2020/resttemplate.jpg'
tags: 
    - 开发教程 
    - SpringBoot
    - RestTemplate
categories:
  - 开发教程
  - SpringBoot
abbrlink: b28e6d36
date: 2020-04-10 08:58:12
---


**SpringBoot**使用RestTemplate发送`POST`请求的参数有`application/json`和 `FormData`两种形式：

1. 参数是` json`形式，直接使用阿里巴巴的json包 `com.alibaba.fastjson` ，代码如下：
<!-- more -->

    ```java
    url='http://posturl';
    JSONObject postData = new JSONObject();
    postData.put("id", 1);
    JSONObject result = restTemplate.postForEntity(url, postData, JSONObject.class).getBody();
    return result;
    ```

2. 参数是`formdata`形式则需要使用RestTemplate发送`multipart/form-data`格式的数据

- 对请求头进行设置
    
    ```java
    String url = 'http://posturl';
    MultiValueMap<String, String> map= new LinkedMultiValueMap<String, String>();
    map.add("id","1");
    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
    HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);
    return restTemplate.postForEntity(url, request,String.class);
    ```
    
- 不设置请求头

    ```java
    String url = 'http://posturl';
    MultiValueMap<String, String> map= new LinkedMultiValueMap<String, String>();
    map.add("id","1");
    return restTemplate.postForEntity(url, map,String.class);
    ```
