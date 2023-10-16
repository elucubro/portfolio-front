---
title: "Not Everything Needs To Scale"
date: "2023-10-14"
published: true
img_src: "/blog/blog-flowers.webp"
img_alt: "Photo of flowers against a dark green background"
desc: "Scalability is important, but there's still a place for self-hosted, *gasp* monolithic applications. As it becomes easier than ever to host via Amazon Web Services, Google Cloud Platform, Digital Ocean and..."
---

# Not Everything Needs to Scale

Scalability is important, but there's still a place for self-hosted, *gasp* monolithic applications. As it becomes easier than ever to host via Amazon Web Services, Google Cloud Platform, Digital Ocean and Azure, (much to the dismay of my nostagia) it becomes less and less common to see debian servers running Nginx or Apache pointing to a household IP.

In the realm of software development, the term "scaling" often carries immense weight. Whether you're building a web application, a database, or a piece of infrastructure, the prevailing wisdom is that scalability is paramount. However, it's essential to recognize that not everything in software development needs to scale, and there are situations where the relentless pursuit of scalability can be counterproductive.

## The Scalability Obsession

Software developers and engineers frequently talk about scalability as a fundamental goal. The idea is to design systems that can handle an increasing number of users, data, and transactions without a hitch. Scalability is particularly critical for applications and services with a large and growing user base, as downtime and performance issues can be costly.

Yet, the fixation on scalability sometimes overshadows other crucial aspects of software development that deserve attention.

## What Should Scale?

Before we dive into what doesn't need to scale, let's clarify the areas in which scalability is genuinely essential:

1. **User Growth**: When your application's user base is expanding rapidly, you need to scale to accommodate the increased demand. This involves horizontal scaling, load balancing, and other strategies to ensure your service remains responsive.

2. **Data Management**: As data accumulates, especially in applications that rely heavily on databases, scaling data storage and retrieval mechanisms is vital. This often involves the use of distributed databases and caching systems.

3. **Performance-Critical Systems**: For applications where performance is paramount, such as real-time gaming or financial trading platforms, scaling is necessary to maintain low latency and ensure a seamless user experience.

4. **High Availability**: Critical systems must be designed to scale for high availability, ensuring they remain operational even in the face of hardware failures or other issues.

While these scenarios undeniably require a focus on scalability, many aspects of software development can function perfectly well without it.

## What Doesn't Need to Scale

1. **Prototyping and MVPs**: In the early stages of a software project, you're better off building a Minimum Viable Product (MVP) or a prototype that focuses on validating your idea. Worrying too much about scalability can slow down development and hinder your ability to test and iterate quickly.

2. **Development Environments**: Your local development environment, where you write and test code, doesn't need to scale. It's better to optimize for simplicity and ease of use.

3. **Internal Tools**: Tools used exclusively by your development team or for internal processes often don't need to scale to the same degree as customer-facing applications. Prioritize efficiency and ease of use over scalability in these cases.

4. **One-Time Scripts**: For ad-hoc scripts or one-time data processing tasks, scalability isn't a top concern. These scripts can be written to get the job done quickly and efficiently without worrying about accommodating future growth.

5. **Legacy Systems**: In some cases, scaling a legacy system can be more trouble than it's worth. It may be more pragmatic to migrate to a more modern architecture or rewrite portions of the system to achieve better performance.

## The Balance in Software Development

While scalability is a crucial consideration in software development, it's equally important to strike a balance. Not everything needs to scale, and a single-minded focus on scalability can lead to unnecessary complexity, slower development, and increased costs. Prioritize scalability where it matters most, and for other aspects of your software development process, focus on efficiency, simplicity, and meeting immediate needs.

Ultimately, the value of any software project is not solely determined by its scalability but by its ability to meet its intended purpose effectively and efficiently.

*Article by Tinotenda Mhandire*
*Date: October 14, 2023*
<style>
    * {
        width: 90vw;
    }
</style>