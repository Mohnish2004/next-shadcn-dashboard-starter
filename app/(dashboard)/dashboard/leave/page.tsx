'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { KanbanBoard } from '@/components/kanban/kanban-board';
import NewTaskDialog from '@/components/kanban/new-task-dialog';
import { Heading } from '@/components/ui/heading';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { ScrollArea } from '@radix-ui/react-scroll-area';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Leave', link: '/dashboard/leave' }
];

export default function page() {
  return (
    <>
      <ScrollArea className="flex-1 overflow-y-auto">
        <div className="flex-1 space-y-5 p-4 pt-6 md:p-8">
          <Breadcrumbs items={breadcrumbItems} />
          <Heading
            title={`Leave application`}
            description="Enter the following details"
          />
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="leave-title">Leave Title</Label>
                  <Input id="leave-title" placeholder="Enter leave title" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="leave-type">Leave Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select leave type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vacation">Vacation</SelectItem>
                      <SelectItem value="sick">Sick</SelectItem>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="leave-dates">Leave Dates</Label>
                  <div className="flex gap-2">
                    <CalendarDateRangePicker />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reliever">Reliever</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select reliever" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Doe</SelectItem>
                      <SelectItem value="jane">Jane Smith</SelectItem>
                      <SelectItem value="bob">Bob Johnson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="employee-code">Employee Code</Label>
                  <Input id="employee-code" type="number" placeholder="1234" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-number">Contact Number</Label>
                  <Input
                    id="contact-number"
                    type="tel"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="leave-reason">Leave Reason</Label>
                  <Textarea
                    id="leave-reason"
                    placeholder="Enter leave reason"
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="document-upload">Document Upload</Label>
                  <Input id="document-upload" type="file" />
                </div>
                <Button type="submit" className="w-full">
                  Submit Leave Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </>
  );
}
