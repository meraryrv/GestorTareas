using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using appNet.Data;
using appNet.Models;
using AutoMapper;
using appNet.DTOs;
using System.Reflection.Metadata.Ecma335;

namespace appNet.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TaskController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public TaskController(AppDbContext context, IMapper mapper)
    {
      _context = context;
      _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<TaskDto>>> GetTasks()
   {
    var tasks = await _context.TaskItems.ToListAsync();

    return Ok(_mapper.Map<List<TaskDto>>(tasks));
    }

// Duplicate GetTask removed; the earlier GetTask method is kept.

    [HttpPost]
    public async Task<ActionResult<TaskDto>> CreateTask(CreateTaskDto createTaskDto)
   {
    var task = _mapper.Map<TaskItems>(createTaskDto);

    task.Id = Guid.NewGuid();
    task.CreationDate = DateTime.Now;
    task.IsComplete = false;

    _context.TaskItems.Add(task);

    await _context.SaveChangesAsync();

    return CreatedAtAction(
        nameof(GetTask),
        new { id = task.Id },
        _mapper.Map<TaskDto>(task));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTask(Guid id, UpdateTaskDto updateTaskDto)
    {
    var task = await _context.TaskItems.FindAsync(id);

    if (task == null)
        return NotFound();

    _mapper.Map(updateTaskDto, task);

    await _context.SaveChangesAsync();

    return NoContent();
}

    [HttpGet("{id}")]
public async Task<ActionResult<TaskDto>> GetTask(Guid id)
{
    var task = await _context.TaskItems.FindAsync(id);

    if (task == null)
        return NotFound();

    return Ok(_mapper.Map<TaskDto>(task));
}

[HttpPatch("{id}/complete")]
public async Task<IActionResult> CompleteTask(Guid id)
{
    var task = await _context.TaskItems.FindAsync(id);

    if (task == null)
        return NotFound();

    task.IsComplete = true;

    await _context.SaveChangesAsync();

    return NoContent();
}

[HttpDelete("{id}")]
public async Task<IActionResult> DeleteTask(Guid id)
{
    var task = await _context.TaskItems.FindAsync(id);

    if (task == null)
        return NotFound();

    _context.TaskItems.Remove(task);
    await _context.SaveChangesAsync();

    return NoContent();
}
}
