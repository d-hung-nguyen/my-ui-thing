<template>
  <div>
    <!-- Greeting top section -->
    <div class="mb-10 flex items-center justify-between">
      <div class="flex flex-col">
        <h1 class="text-2xl font-bold tracking-tight">Welcome back!</h1>
        <p class="text-muted-foreground">Below is a list of your most recent tasks</p>
      </div>
      <!-- User dropdown menu -->
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <UiButton variant="ghost" class="relative size-9 rounded-full ring-1 ring-muted/50">
            <UiAvatar class=" ">
              <UiAvatarImage src="https://behonbaker.com/icon.png" alt="Behon Baker" />
              <UiAvatarFallback>BB</UiAvatarFallback>
            </UiAvatar>
          </UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent class="w-52" align="end">
          <UiDropdownMenuLabel class="flex font-normal">
            <div class="flex flex-col space-y-1">
              <p class="text-sm leading-none font-medium">Behon Baker</p>
              <p class="text-xs leading-none text-muted-foreground">behon.baker.com</p>
            </div>
          </UiDropdownMenuLabel>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuGroup>
            <UiDropdownMenuItem title="Profile" shortcut="⇧⌘P" />
            <UiDropdownMenuItem title="Billing" shortcut="⌘B" />
            <UiDropdownMenuItem title="Settings" shortcut="⌘S" />
            <UiDropdownMenuItem title="New Team" />
          </UiDropdownMenuGroup>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem title="Help" shortcut="?" />
          <UiDropdownMenuItem title="Keyboard Shortcuts" shortcut="⇧?" />
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem title="Log out" shortcut="⇧⌘Q" variant="destructive" />
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    </div>

    <!-- Table -->

    <ClientOnly>
      <ui-datatable class="display" :data="localTasks" :options>
        <template #column-title="{ cellData, rowData }">
          <div class="flex items-center gap-2">
            <ui-badge variant="outline" class="capitalize">{{ rowData.label }}</ui-badge>
            <p :title="cellData" class="max-w-[400px] truncate font-medium">{{ cellData }}</p>
          </div>
        </template>
        <template #column-status="{ cellData, rowData }">
          <div class="flex items-center gap-2">
            <UiIcon :name="getStatusIcon(rowData.status)" class="size-4 text-muted-foreground" />
            <p class="whitespace-nowrap capitalize">{{ cellData }}</p>
          </div>
        </template>
        <template #column-priority="{ cellData }">
          <div class="flex items-center gap-2">
            <UiIcon :name="getPriorityIcon(cellData)" class="size-4 text-muted-foreground" />
            <p class="whitespace-nowrap capitalize">{{ cellData }}</p>
          </div>
        </template>
        <template #action>
          <UiDropdownMenu>
            <UiDropdownMenuTrigger as-child>
              <UiButton variant="ghost" class="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
                <UiIcon name="radix-icons:dots-horizontal" class="size-4" />
                <span class="sr-only">Open menu</span>
              </UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent align="end" class="w-[160px]">
              <UiDropdownMenuItem>Edit</UiDropdownMenuItem>
              <UiDropdownMenuItem>Make a copy</UiDropdownMenuItem>
              <UiDropdownMenuItem>Favorite</UiDropdownMenuItem>
              <UiDropdownMenuSeparator />
              <UiDropdownMenuItem variant="destructive">
                Delete
                <UiDropdownMenuShortcut>⌘⌫</UiDropdownMenuShortcut>
              </UiDropdownMenuItem>
            </UiDropdownMenuContent>
          </UiDropdownMenu>
        </template>
      </ui-datatable>
    </ClientOnly>
  </div>
</template>

<script lang="ts">
  // Importing the tasks data from a JSON file
  import tasks from "~/assets/json/home-tasks.json";
  import type { Config } from "datatables.net";

  /**
   * Represents a task in the system.
   */
  interface Task {
    id: string;
    title: string;
    status: Status;
    label: Label;
    priority: Priority;
  }

  enum Label {
    Bug = "bug",
    Documentation = "documentation",
    Feature = "feature",
  }

  enum Priority {
    High = "high",
    Low = "low",
    Medium = "medium",
  }

  enum Status {
    Backlog = "backlog",
    Canceled = "canceled",
    Done = "done",
    InProgress = "in progress",
    Todo = "todo",
  }
  // End of interface and enum definitions
</script>

<script lang="ts" setup>
  // create local data for tasks
  const localTasks = ref<Task[]>(tasks as unknown as Task[]);

  const options: Config = {
    dom: "<'sm:max-w-[400px] mb-5'f><'grid grid-col-1 border rounded-lg w-full overflow-x-auto't><'flex items-center justify-between mt-5'<'*:!gap-1'i>p>",
    language: {
      info: "Page<b>_PAGE_</b>of<b>_PAGES_</b>",
      search: "",
      searchPlaceholder: "Search tasks...",
    },
    pagingType: "full",
    ordering: false,

    columns: [
      { title: "Task", data: "id", className: `whitespace-nowrap` },
      { title: "Title", data: "title", name: "title" },
      { title: "Status", data: "status", name: "status" },
      { title: "Priority", data: "priority", name: "priority" },
      { data: null, render: "#action", searchable: false, orderable: false },
    ],
  };

  /**
   * Returns the icon name based on the task status.
   */
  const getStatusIcon = (status: Status) => {
    switch (status) {
      case Status.Backlog:
        return "radix-icons:question-mark-circled";
      case Status.Canceled:
        return "radix-icons:cross-circled";
      case Status.Done:
        return "radix-icons:check-circled";
      case Status.InProgress:
        return "radix-icons:stopwatch";
      case Status.Todo:
        return "radix-icons:circle";
      default:
        return "radix-icons:circle";
    }
  };

  /**
   * Returns the icon name based on the task priority.
   */
  const getPriorityIcon = (priority: Priority) => {
    switch (priority) {
      case Priority.High:
        return "radix-icons:arrow-up";
      case Priority.Low:
        return "radix-icons:arrow-down";
      case Priority.Medium:
        return "radix-icons:arrow-right";
      default:
        return "radix-icons:minus";
    }
  };
</script>
