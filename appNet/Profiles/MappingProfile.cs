using AutoMapper;
using appNet.DTOs;
using appNet.Models;

namespace appNet.Profiles;

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<TaskItems, TaskDto>();
            CreateMap<CreateTaskDto, TaskItems>();
            CreateMap<UpdateTaskDto, TaskItems>();
        }
    }
